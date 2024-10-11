import { teamData } from "../../../utils/teamCardData";
import TeamCard from "./TeamCard";
import UpperTeamSection from "./UpperTeamSection";

const TeamSection = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <UpperTeamSection />
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((item, index) => {
            return (
              <TeamCard
                key={index}
                imagePath={item.imagePath}
                name={item.name}
                expert={item.expert}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
