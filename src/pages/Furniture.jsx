import React from "react";
import { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import furnitured from "../assets/furniture.jpg";

const Furniture = () => {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/furniture?_sort=price&_order=asc")
      .then((a) => a.json())
      .then(setFurniture)
      .catch(console.error);
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 m-8 ">
      {furniture.map((furnitures) => (
        <div
          className="border-[2px] rounded-lg p-4 shadow-2xl"
          key={furnitures.id}
        >
          <div className="font-semibold flex justify-center text-2xl font-serif">
            {furnitures.name}
          </div>
          <div className="flex justify-center">
            <img src={furnitured} />
          </div>
          <div className="flex justify-between">
            <div className="">
              <span className="font-semibold">Category:</span>
              {furnitures.category}
            </div>
            <div className="text-orange-300 flex items-center">
              <span>
                {" "}
                <FaStar />{" "}
              </span>
              {furnitures.rating}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">
              <span className="font-serif">Price: $</span>
              {furnitures.price}
            </div>
            <div className="text-gray-600 flex items-center">
              <span>
                <IoPerson />
              </span>
              {furnitures.stock}
            </div>
          </div>

          <div className="font-serif">
            <span className="font-bold">Descriptin:</span>
            {furnitures.description}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Furniture;
