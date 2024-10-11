import FeaturesSvg from "../svg/features-svg/FeaturesSvg";

/* eslint-disable react/prop-types */
const Anchor = ({ d }) => {
  return (
    <a href="javascript:void(0)" className="px-3 text-gray-7 hover:text-white">
      <FeaturesSvg
        width={"22"}
        height={"22"}
        fill={""}
        innerStyle={"fill-current"}
        data={d}
      />
    </a>
  );
};

export default Anchor;
