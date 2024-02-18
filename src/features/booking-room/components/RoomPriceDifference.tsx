import { type FC, useMemo } from "react";
import { type Price } from "../typings";

interface Props {
    originalPrice: Price;
    checkedPrice: Price;
}

const RoomPriceDifference: FC<Props> = ({
    originalPrice,
    checkedPrice
}) => {

    const price = useMemo(() => {        
        if (originalPrice && checkedPrice) {
            return originalPrice.value - checkedPrice.value;
        }

        return null;

    }, [originalPrice, checkedPrice]);


    if (!price) {
        return null;
    }

    return (
        <p className="text-sm text-gray-500 font-medium ml-6 text-left">
            <span>The difference between original and checked price: </span> 
            <b className="text-md text-gray-900 font-bold">{price} {checkedPrice.currencyCode}</b>
        </p>        
    )    
};

RoomPriceDifference.displayName = "RoomPriceDifference";

export default RoomPriceDifference;