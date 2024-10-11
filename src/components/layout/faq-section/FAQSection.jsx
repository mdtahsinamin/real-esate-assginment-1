import { faqData } from "../../../utils/faqdata";
import FAQSvg from "../../svg/FAQ-svg/FAQSvg";
import FAQCard from "./FAQCard";
import UpperFAQ from "./UpperFAQ";

const FAQSection = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <UpperFAQ />
        <div className="-mx-4 flex flex-wrap">
          {faqData.map((item, index) => {
            return (
              <FAQCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                d={item.d}
              />
            );
          })}
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <FAQSvg width={"48"} fillData={"#13C296"} />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <FAQSvg width={"48"} fillData={"#3758F9"} />
        </span>
      </div>
    </section>
  );
};

export default FAQSection;
