import MiddleFooter from "./MiddleFooter";
import MiddleRight from "./MiddleRight";
import RightSide from "./RightSide";
import TopLeftSide from "./TopLeftSide";

const Footer = () => {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <TopLeftSide />
          <MiddleFooter />
          <MiddleRight />
          <RightSide />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
