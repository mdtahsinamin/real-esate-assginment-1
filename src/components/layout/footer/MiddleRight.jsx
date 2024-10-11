import { middleRightList } from "../../../utils/listItems";
import SingleItem from "../../navitems/SingleItem";

const MiddleRight = () => {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-white">Features</h4>
        <ul>
          {middleRightList.map((elt, index) => {
            return (
              <SingleItem
                key={index}
                itemName={elt.itemName}
                url={elt.url}
                innerStyle={elt.innerStyle}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MiddleRight;
