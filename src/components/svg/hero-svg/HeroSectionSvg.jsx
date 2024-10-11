/* eslint-disable react/prop-types */

const CircleGrid = ({ width, height, fillData = "white" }) => {
  const radius = 1.67;
  const rows = 8; // 8
  const cols = 10; // 10
  const spacing = 14.66;

  const circles = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = col * spacing + radius;
      const cy = row * spacing + radius;
      circles.push({ cx, cy, r: radius }); // white
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {circles.map((circle, index) => (
        <circle
          key={index}
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r}
          fill={fillData}
        />
      ))}
    </svg>
  );
};

export default CircleGrid;
