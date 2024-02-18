import { type FC, useState, useCallback, useMemo } from "react";
import { useCallbackRef } from "@restart/hooks"; 
import RoomsDropdown from "./RoomsDropdown";
import classNames from "classnames";
import { type Room, AvailabilityStatus } from "../typings";
import { useGetRoomsQuery, useGetRoomsAvailabilityMutation } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm: FC = () => {
    const { data: entityState, isLoading } = useGetRoomsQuery();
    const [ getRoomsAvailability, { data, isLoading: isUpdating } ] = useGetRoomsAvailabilityMutation();
 
    const [room, select] = useState<Room | null>(null);
    const [show, toggle] = useState(false);

    const notify = () => toast.error("This room is not available!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,      
        theme: "colored",
    });

    const [form, setForm] = useCallbackRef<Element>();

    const rooms = useMemo(() => {
        if (entityState) {
            const { ids, entities } = entityState;
            return ids.map(id => entities[id]);
        }

        return [];
    }, [entityState]);

    const handleToggle = useCallback((nextState: boolean) => {
        if (data) {
           toggle(nextState);
        } else {            
            if (entityState) {     
                getRoomsAvailability(entityState.ids).then(() => {                    
                    toggle(nextState);
                });
            }
        }          
    }, [data, entityState, getRoomsAvailability]);

    const handleRoomSelect = (room: Room) => {
        select(room);

        if (room.availability?.availabilityStatus !== AvailabilityStatus.Available) {
            notify();
        }
    } 

    const handleClick = () => {
        console.log(room);
    }

    return (
        <div ref={setForm} className={classNames(
            show ? "bg-white" : "bg-purple-400",
            "rounded-full mt-3 lg:mt-4 relative")
        }>            
            <fieldset className={classNames(
                "relative z-20 booking-dropdown", 
                show && "border-b border-solid border-indigo-200")                                
            }>
                <RoomsDropdown 
                    show={show}
                    rooms={rooms}
                    loading={isUpdating}
                    disabled={isLoading} 
                    title={room?.name ?? "Select Room"} 
                    onToggle={handleToggle} 
                    element={form} 
                    onRoomSelect={handleRoomSelect} 
                />
                <button 
                    type="button" 
                    disabled={room?.availability?.availabilityStatus !== AvailabilityStatus.Available} 
                    className="rounded-full bg-fuchsia-600 m-2 px-5 text-sm font-semibold leading-6 text-white shadow-sm disabled:opacity-50 hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleClick}
                >
                    Book
                </button>
                {isUpdating ?                        
                    <span className="absolute rounded-full left-0 top-0 opacity-50 bg-white w-full h-full"></span> : null 
                }
            </fieldset>
            <ToastContainer />      
        </div>          
    );
};

BookingForm.displayName = "BookingForm";

export default BookingForm;