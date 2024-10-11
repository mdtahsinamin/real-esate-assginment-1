import { listInformation } from "../../utils/listItems";
import SingleItem from "../navitems/SingleItem";

const ListItems = () => {
  return (
    <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
      {listInformation.map((item, index) => {
        return (
          <SingleItem
            key={index}
            itemName={item.itemName}
            url={item.url}
            innerStyle={item.innerStyle}
            listStyle={""}
          />
        );
      })}
    </ul>
  );
};

export default ListItems;
