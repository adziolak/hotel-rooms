import { type FC, type PropsWithChildren, type SVGAttributes, type ReactElement, cloneElement } from "react";

interface Props {
    title: string;
    icon: ReactElement<SVGAttributes<HTMLOrSVGElement>>;
}

const Testimonial: FC<PropsWithChildren<Props>> = ({
    title,
    icon,
    children
}) => {
  return (
    <dl className="text-center">
        <dt className="text-xl font-bold">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 mx-auto mb-2">
                {cloneElement(icon, {  
                    className: "h-8 w-8 text-white"
                })}        
            </div>
            {title}
        </dt>
        <dd className="mt-2 text-base leading-7 text-gray-700">
            {children}
        </dd>
    </dl>
  );
};

export default Testimonial;