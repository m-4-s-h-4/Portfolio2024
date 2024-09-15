import type { SVGProps } from "react";

interface SvgArrowProps extends SVGProps<SVGSVGElement> {
  size?: string;
  fill?: string;
  stroke?: string;
}

const Arrow = ({
  size = "1em",
  fill = "none",
  stroke = "#403E3E",
  ...props
}: SvgArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 49 48"
    fill={fill}
    {...props}
  >
    <path
      d="M3 45L46 3M44.9456 44.5166V5.50382M4.44559 4.00383L48.4456 4.00382"
      stroke={stroke}
      strokeWidth="7"
    />
  </svg>
);

export default Arrow;
