import { type FC } from "react";

interface Props {
    title: string;
    counter: number;
}

const Metric: FC<Props> = ({
    title,
    counter    
}) => {
  return (
    <dl className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">{title}</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{counter}</dd>
    </dl>
  );
};

Metric.displayName = "Metric";

export default Metric;