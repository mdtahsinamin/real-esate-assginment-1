import CircleCTA from "../../svg/cta-svg/CircleCTA";
import CTASvg from "../../svg/cta-svg/CTASvg.jsx";
import UpperCTASection from "./UpperCTASection";
import PolygonCTA from "./../../svg/cta-svg/PolygonCTA";

const CTASection = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <UpperCTASection />
      <div>
        <span className="absolute left-0 top-0">
          <CTASvg>
            <CircleCTA
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <CircleCTA
              cx="446"
              cy="0"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <PolygonCTA
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </CTASvg>
        </span>
        <span className="absolute bottom-0 right-0">
          <CTASvg>
            <CircleCTA
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <CircleCTA
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <PolygonCTA
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </CTASvg>
        </span>
      </div>
    </section>
  );
};

export default CTASection;
