import { logoSvg } from "../../../utils/svgData";
import IconSvg from "../../svg/team-svg/IconSvg";

const TeamIcon = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      {logoSvg.map((elt, index) => {
        return <IconSvg key={index} d={elt} />;
      })}
    </div>
  );
};

export default TeamIcon;
