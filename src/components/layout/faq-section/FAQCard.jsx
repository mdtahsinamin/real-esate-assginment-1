/* eslint-disable react/prop-types */

import FeaturesSvg from "../../svg/features-svg/FeaturesSvg";

const FAQCard = ({ title, subtitle, d }) => {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="mb-12 flex lg:mb-[70px]">
        <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
          <FeaturesSvg
            width={"32"}
            height={"32"}
            innerStyle={"fill-current"}
            data={d}
          />
        </div>
        <div className="w-full">
          <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
