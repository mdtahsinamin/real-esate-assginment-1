import { propertiesData } from "../../../utils/propertiesData";
import PropertiesCard from "./PropertiesCard";
import UpperSection from "./UpperSection";

const AvailableSection = () => {
  return (
    <section>
      <div className="container">
        <UpperSection />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertiesData.map((property, index) => {
            return <PropertiesCard key={index} property={property} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AvailableSection;
