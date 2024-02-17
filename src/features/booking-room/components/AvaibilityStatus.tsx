import { type FC, useMemo, useState } from "react";
import { AvailabilityStatus as AvaibilityStatusEnum } from "../typings";
import Tooltip from "components/Tooltip";
import useCallbackRef from "@restart/hooks/useCallbackRef";
import classNames from "classnames";

interface Props {
    status: AvaibilityStatusEnum
}

const AvaibilityStatus: FC<Props> = ({
    status
}) => {
    const [isVisible, setVisible] = useState(false); 
    const [ref, setRef] = useCallbackRef<HTMLElement>();

    const bgColor = useMemo(() => {
        switch (status) {
            case AvaibilityStatusEnum.Available:
                return "bg-emerald-500/20";
            case AvaibilityStatusEnum.Error:
                return "bg-red-500/20";
            case AvaibilityStatusEnum.OnRequest:
                return "bg-amber-500/20";
            case AvaibilityStatusEnum.SoldOut:
                return "bg-gray-500/20";                
            default:
                return null; 
        }
    }, [status]);

    const color = useMemo(() => {
        switch (status) {
            case AvaibilityStatusEnum.Available:
                return "bg-emerald-500";
            case AvaibilityStatusEnum.Error:
                return "bg-red-500";
            case AvaibilityStatusEnum.OnRequest:
                return "bg-amber-500";
            case AvaibilityStatusEnum.SoldOut:
                return "bg-gray-500";                
            default:
                return null; 
        }
    }, [status]);

    const description = useMemo(() => {
        switch (status) {
            case AvaibilityStatusEnum.Available:
                return "Available"
            case AvaibilityStatusEnum.Error:
                return "Error"
            case AvaibilityStatusEnum.OnRequest:
                return "On request"
            case AvaibilityStatusEnum.SoldOut:
                return "Sold out"
            default:
                return ""; 
        }
    }, [status]);

    const handleMouseLeave = () => setVisible(false);

    const handleMouseEnter = () => setVisible(true);

    return (
        <div className={classNames("flex-none rounded-full p-1", bgColor)} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} ref={setRef}>
            <div className={classNames("h-1.5 w-1.5 rounded-full", color)}></div>
            {description ?
                <Tooltip target={ref} isVisible={isVisible} message={description} onHide={() => setVisible(false)} /> : null 
            }
        </div>          
    )    
};

AvaibilityStatus.displayName = "AvaibilityStatus";

export default AvaibilityStatus;