import { type FC } from "react";
import { Room } from "../typings";
import AvaibilityStatus from "./AvaibilityStatus";
import RoomPriceDifference from "./RoomPriceDifference";

const RoomItem: FC<Room> = ({
    name,
    availability,
    price
}) => {
    return (
        <div className="xs:flex justify-between items-center min-h-14">            
            <div className="flex flex-col items-start justify-start">
                <div className="flex items-center mr-auto w-full">
                    {availability ?
                        <AvaibilityStatus status={availability.availabilityStatus} /> : null
                    }
                    <h3 className="text-base font-semibold leading-6 text-gray-900 ml-2 mr-auto text-left">
                        {name}
                    </h3>
                </div>

                {(availability?.price && price) ?
                    <RoomPriceDifference originalPrice={price} checkedPrice={availability.price} /> : null
                }
            </div>
            {price ?
                <p className="text-lg text-indigo-800 font-bold whitespace-nowrap ml-6 xs:ml-3 text-left">{price.value} {price.currencyCode}</p> : null 
            }
        </div>          
    );
};

RoomItem.displayName = "RoomItem";

export default RoomItem;