// eslint-disable-next-line react/prop-types
const FAQSvg = ({ width, fillData }) => {
  const rows = 10;
  const cols = 4;
  const spacing = 14.66;
  const radius = 1.66667;

  const height = rows * spacing + radius * 2;

  const circles = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = col * spacing + radius;
      const cy = row * spacing + radius;
      circles.push({ cx, cy, r: radius });
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 134"
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

export default FAQSvg;
