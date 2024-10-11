import { buttonItemsInfo } from "../../utils/buttonInformation";
import Button from "../button/Button";

const ButtonItems = () => {
  return (
    <div className="sm:flex">
      {buttonItemsInfo.map((items, index) => {
        return (
          <Button
            key={index}
            inputText={items.inputText}
            innerStyle={items.innerStyle}
            path={items.path}
          />
        );
      })}
    </div>
  );
};

export default ButtonItems;
