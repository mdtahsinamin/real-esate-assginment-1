/* eslint-disable react/prop-types */
import SvgTeam from "./SvgTeam";

const IconSvg = ({ d }) => {
  return (
    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
      <SvgTeam
        width={"18"}
        height={"18"}
        innerStyle={"fill-current"}
        data={d}
      />
    </a>
  );
};

export default IconSvg;
