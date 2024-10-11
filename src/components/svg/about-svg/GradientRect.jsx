/* eslint-disable react/prop-types */
const GradientRect = ({
  width,
  height,
  x,
  y,
  transform,
  gradientId,
  gradientX1,
  gradientY1,
  gradientX2,
  gradientY2,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.1"
        x={x}
        y={y}
        width={width}
        height={height}
        transform={transform}
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1={gradientX1}
          y1={gradientY1}
          x2={gradientX2}
          y2={gradientY2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientRect;
