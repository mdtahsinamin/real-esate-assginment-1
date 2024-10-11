import { cardData } from "../../utils/cardData";
import CardItems from "../cardItems/CardItems";

const Card = () => {
  return (
    <div className="-mx-4 flex flex-wrap">
      {cardData.map((elt, index) => {
        return (
          <CardItems
            key={index}
            title={elt.title}
            subtitle={elt.subtitle}
            d={elt.d}
          />
        );
      })}
    </div>
  );
};

export default Card;
