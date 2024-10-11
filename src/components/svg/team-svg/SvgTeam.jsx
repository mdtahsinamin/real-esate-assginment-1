/* eslint-disable react/prop-types */
const SvgTeam = ({ width, height, data, innerStyle = "", fill = "" }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        className={innerStyle}
      >
        {data.map((elt, index) => {
          return <path key={index} d={elt.d} fill="" />;
        })}
      </svg>
    </>
  );
};

export default SvgTeam;
