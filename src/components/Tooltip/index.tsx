import { type FC, useEffect } from "react";
import { Overlay } from "@restart/ui";
import useTimeout from "@restart/hooks/useTimeout";
import "./tooltip.scss";

interface Props {
    target: HTMLElement | null;
    isVisible: boolean;
    message: string;
    placement?: "bottom" | "top" | "left" | "right";
    strategy?: "fixed" | "absolute";
    showArrow?: boolean;
    onHide: () => void;
}

export const Tooltip: FC<Props> = ({
    target,
    isVisible,
    message,
    placement = "bottom",
    strategy = "absolute",
    showArrow = true,
    onHide,
}) => {
    const { set, clear } = useTimeout();

    set(() => onHide(), 5000);

    useEffect(() => {
        return () => clear();
    }, [clear]);

    return (
        <Overlay
            show={isVisible}
            target={target}
            placement={placement}
            onHide={onHide}
            offset={[16, 16]}
            popperConfig={{
                strategy,
            }}
        >
            {(props, { arrowProps }) => (
                <div {...props} data-placement={placement} className={"tooltip"}>
                    {message}
                    {showArrow ? (
                        <span {...arrowProps} className={"tooltip-arrow"} style={arrowProps.style}>
                            &nbsp;
                        </span>
                    ) : null}
                </div>
            )}
        </Overlay>
    );
};

Tooltip.displayName = "Tooltip";

export default Tooltip;




