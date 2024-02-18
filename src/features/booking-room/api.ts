import { createApi, fetchBaseQuery, type FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter, type EntityState } from "@reduxjs/toolkit"
import type { Room, Availability } from "./typings"; 

const roomsAdapter = createEntityAdapter<Room>({  
  sortComparer: (a, b) => {
    if (a === null) return 1;
    if (b === null) return -1;

    const priceA = a.price?.value ?? Infinity;
    const priceB = b.price?.value ?? Infinity;

    return priceA - priceB;
  }
});


type RoomAvalibility = Omit<Room, "name" | "price">;

const roomsAvaibilityAdapter = createEntityAdapter<RoomAvalibility>();

export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dcontent.inviacdn.net/shared/dev/test-api/" }),
  endpoints: (builder) => ({
    getRooms: builder.query<EntityState<Room, number>, void>({
      query: () => 'rooms',     
      transformResponse(response: Room[]): EntityState<Room, number> {
        return roomsAdapter.addMany(roomsAdapter.getInitialState(), response);  
      },
    }),
    getRoomsAvailability: builder.mutation<EntityState<RoomAvalibility, number>, number[]>({
      queryFn: async (roomIds, _, __, baseQuery): Promise<{ data?: any, error?: FetchBaseQueryError | undefined}> => {            
        try {          
          const results = await Promise.all(
            roomIds.map(id => baseQuery(`room/${id}`))
          );                  
          const hasError = results.some(({ error }) => error);
          
          if (hasError) {
            const firstError = results.find(({ error }) => error)?.error;
            return { error: firstError };
          }
          
          const items: RoomAvalibility[] = roomIds.map((id, index) => ({ id, availability: results[index].data as Availability })); 
          const data = roomsAvaibilityAdapter.setAll(roomsAvaibilityAdapter.getInitialState(), items);

          return { data }
        } catch (error) {
          return { 
            error: { 
              status: "FETCH_ERROR", 
              error: "An error occurred" 
            }
          };
        }
      },
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data: updatedRooms } = await queryFulfilled          
          dispatch(
            roomsApi.util.updateQueryData("getRooms", undefined, (rooms) => {
              rooms.ids.forEach(id => {
                Object.assign(rooms.entities[id], updatedRooms.entities[id]);               
              });
            })
          )
        } catch {}
      },
    }),
  }),
});

export const { useGetRoomsQuery, useGetRoomsAvailabilityMutation } = roomsApi;