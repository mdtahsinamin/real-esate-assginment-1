/* eslint-disable react/prop-types */
const PropertiesSvg = ({ d, fillRule }) => {
  return (
    <svg
      className="w-6 h-6 mr-3 text-gray-600 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d={d} fillRule={fillRule}></path>
    </svg>
  );
};

export default PropertiesSvg;
