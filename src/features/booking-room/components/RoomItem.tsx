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
        <div className="flex justify-between items-center min-h-14">            
            <div className="flex flex-col items-center justify-start">
                <div className="flex items-center mr-auto">
                    {availability ?
                        <AvaibilityStatus status={availability.availabilityStatus} /> : null
                    }
                    <h3 className="text-base font-semibold leading-7 text-gray-900 ml-2 mr-auto">
                        {name}
                    </h3>
                </div>

                {(availability?.price && price) ?
                    <RoomPriceDifference originalPrice={price} checkedPrice={availability.price} /> : null
                }
            </div>
            {price ?
                <p className="text-lg text-indigo-800 font-bold">{price.value} {price.currencyCode}</p> : null 
            }
        </div>          
    );
};

RoomItem.displayName = "RoomItem";

export default RoomItem;