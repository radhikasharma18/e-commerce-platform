import React from "react";
import { useEffect, useState } from "react";
import blog2 from "../assets/blog2.jpg.png";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Household = () => {
  const [household, setHousehold] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/households?_sort=price&_order=asc")
      .then((a) => a.json())
      .then(setHousehold)
      .catch(console.error);
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 m-8 ">
      {household.map((households) => (
        <div
          className="border-[2px] rounded-lg p-4 shadow-2xl"
          key={households.id}
        >
          <div className="font-semibold flex justify-center text-2xl font-serif">
            {households.name}
          </div>
          <div className="flex justify-center">
            <img src={blog2} />
          </div>
          <div className="flex justify-between">
            <div className="">
              <span className="font-semibold">Category:</span>
              {households.category}
            </div>
            <div className="text-orange-300 flex items-center">
              <span>
                {" "}
                <FaStar />{" "}
              </span>
              {households.rating}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">
              <span className="font-serif">Price: $</span>
              {households.price}
            </div>
            <div className="text-gray-600 flex items-center">
              <span>
                <IoPerson />
              </span>
              {households.stock}
            </div>
          </div>

          <div className="font-serif">
            <span className="font-bold">Descriptin:</span>
            {households.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Household;
