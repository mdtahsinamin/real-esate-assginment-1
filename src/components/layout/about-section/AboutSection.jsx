import UpperAboutSection from "./UpperAboutSection";
import AboutImage from "../../../assets/images/about/about-image-01.jpg";
import AboutSecondImage from "../../../assets/images/about/about-image-02.jpg";
import GradientRect from "../../svg/about-svg/GradientRect";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div>
          <div className="-mx-4 flex flex-wrap items-center">
            <UpperAboutSection />
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <img
                      src={AboutImage}
                      alt="about image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <img
                      src={AboutSecondImage}
                      alt="about image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">
                        09
                      </span>
                      <span className="block text-base font-semibold text-white">
                        We have
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        Years of experience
                      </span>
                    </div>
                    <div>
                      <span className="absolute left-0 top-0 -z-10">
                        <GradientRect
                          width="106"
                          height="144"
                          x="-67"
                          y="47.127"
                          transform="rotate(-42.8643 -67 47.127)"
                          gradientId="paint0_linear_1416_214"
                          gradientX1="-10.3111"
                          gradientY1="47.127"
                          gradientX2="-10.3111"
                          gradientY2="178.431"
                        />
                      </span>
                      <span className="absolute right-0 top-0 -z-10">
                        <GradientRect
                          width="130"
                          height="97"
                          x="0.86792"
                          y="-6.67725"
                          transform="rotate(-42.8643 0.86792 -6.67725)"
                          gradientId="paint0_linear_1416_215"
                          gradientX1="78.6495"
                          gradientY1="-6.67725"
                          gradientX2="78.6495"
                          gradientY2="133.937"
                        />
                      </span>
                      <span className="absolute bottom-0 right-0 -z-10">
                        <GradientRect
                          width="175"
                          height="104"
                          x="175.011"
                          y="108.611"
                          transform="rotate(137.136 175.011 108.611)"
                          gradientId="paint0_linear_1416_216"
                          gradientX1="225.634"
                          gradientY1="108.611"
                          gradientX2="225.634"
                          gradientY2="256.79"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
