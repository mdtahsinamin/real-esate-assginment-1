/* eslint-disable react/prop-types */
const CircleCTA = ({ cx, cy, r, stroke, strokeOpacity, strokeWidth }) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      stroke={stroke}
      strokeOpacity={strokeOpacity}
      strokeWidth={strokeWidth}
    />
  );
};

export default CircleCTA;
