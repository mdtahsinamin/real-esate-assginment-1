import { navbarItems } from "../../utils/navbarItems";
import SingleItem from "./SingleItem";

const NavItems = () => {
  return (
    <ul className="hidden lg:flex ">
      {navbarItems.map((item, index) => {
        return (
          <SingleItem
            key={index}
            itemName={item.itemName}
            url={item.url}
            innerStyle={item.innerStyle}
            listStyle={"group relative"}
          />
        );
      })}
    </ul>
  );
};

export default NavItems;
