/* eslint-disable react/prop-types */

import PropertiesSvg from "../../svg/properties-svg/propertiesSvg";

const PropertiesCard = ({ property }) => {
  const {
    imageSrc,
    title,
    price,
    numberOfBedRooms,
    numberOfBathRooms,
    svgFirst,
    svgSecond,
  } = property;

  return (
    <>
      <div className="p-4 bg-white rounded-lg border border-gray-600/10">
        <img src={imageSrc} alt="property" />

        <div className="p-6">
          <h4 className="text-2xl font-bold cursor-pointer">{title}</h4>
          <div className="mt-2">
            <span className="text-xl font-extrabold text-blue-600">
              {price}
            </span>
            /M
          </div>
        </div>
        <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
          <div className="flex items-center">
            <PropertiesSvg d={svgFirst} fillRule={""} />
            <p>
              <span className="font-bold text-gray-900">
                {numberOfBedRooms}
              </span>{" "}
              Bedrooms
            </p>
          </div>
          <div className="flex items-center">
            <PropertiesSvg d={svgSecond} fillRule={"evenodd"} />
            <p>
              <span className="font-bold text-gray-900">
                {numberOfBathRooms}
              </span>{" "}
              Bathrooms
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesCard;
