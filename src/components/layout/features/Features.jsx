import Card from "../../card/Card";
import FeaturesContainer from "./features-container/FeaturesContainer";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <FeaturesContainer />
        <Card />
      </div>
    </section>
  );
};

export default Features;
