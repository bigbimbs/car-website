import clsx from "clsx";
import { ReactNode } from "react";

const sizes = {
  md: {
    circumference: 44,
    svgSize: "h-24 w-24",
    textSize: "text-lg",
    stroke: 8,
    cxy: 48,
  },
};

type CircularProgressProps = {
  hideLabel?: boolean;
  size?: keyof typeof sizes;
  children: ReactNode;
  color?: string;
  percent: number;
};

export const CircularProgress = ({
  hideLabel,
  children,
  color = "#FF5C3D",
  size = "md",
  percent = 0,
}: CircularProgressProps) => {
  const circumference = sizes[size].circumference * 2 * Math.PI;
  const colorSc = `text-[${color}]`;

  return (
    <div className="relative flex min-w-max items-center justify-center overflow-hidden rounded-full bg-transparent dark:bg-inherit">
      <svg className={sizes[size].svgSize} aria-hidden="true">
        <circle
          className="text-gray-200 shadow-md transition dark:text-gray-600"
          strokeWidth={2 + 1}
          stroke="currentColor"
          fill="transparent"
          r={sizes[size].circumference}
          cx={sizes[size].cxy}
          cy={sizes[size].cxy}
        />
        <circle
          className="text-white shadow-md transition dark:text-blue-600"
          strokeWidth={2}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          strokeLinecap="round"
          stroke={color}
          fill="transparent"
          r={sizes[size].circumference}
          cx={sizes[size].cxy}
          cy={sizes[size].cxy}
        />
      </svg>
      {!hideLabel && (
        <span
          className={clsx(
            colorSc,
            sizes[size].textSize,
            "absolute font-semibold "
          )}
        >
          {children}
        </span>
      )}
    </div>
  );
};
