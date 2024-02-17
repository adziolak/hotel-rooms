import type { FC, SVGAttributes } from "react";

const IconCaretBottom: FC<SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M12.408 15.837l7.429-7.1a.537.537 0 0 0 0-.77l-.848-.803a.6.6 0 0 0-.807 0l-6.178 5.903-6.185-5.91a.6.6 0 0 0-.808 0l-.848.81a.537.537 0 0 0 0 .77l6.565 6.274.025.024.847.81a.593.593 0 0 0 .808-.008z"
            />
        </svg>
    );
};

IconCaretBottom.displayName = "IconCaretBottom";

export default IconCaretBottom;
