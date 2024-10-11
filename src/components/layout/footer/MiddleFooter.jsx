import { middleFooterList } from "../../../utils/listItems";
import SingleItem from "../../navitems/SingleItem";

const MiddleFooter = () => {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-white">About Us</h4>
        <ul>
          {middleFooterList.map((elt, index) => {
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

export default MiddleFooter;
