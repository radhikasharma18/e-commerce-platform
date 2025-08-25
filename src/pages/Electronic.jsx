import React from "react";
import { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import phone from "../assets/phone.jpg";

const Electronic = () => {
  const [electronic, serElectronic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/electronics?_sort=price&_order=asc")
      .then((a) => a.json())
      .then(serElectronic)
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 m-8 ">
      {electronic.map((electronics) => (
        <div
          className="border-[2px] rounded-lg p-4 shadow-2xl"
          key={electronics.id}
        >
          <div className="font-semibold flex justify-center text-2xl font-serif">
            {electronics.name}
          </div>
          <div className="flex justify-center">
            <img src={phone} />
          </div>
          <div className="flex justify-between">
            <div className="">
              <span className="font-semibold">Category:</span>
              {electronics.category}
            </div>
            <div className="text-orange-300 flex items-center">
              <span>
                {" "}
                <FaStar />{" "}
              </span>
              {electronics.rating}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">
              <span className="font-serif">Price: $</span>
              {electronics.price}
            </div>
            <div className="text-gray-600 flex items-center">
              <span>
                <IoPerson />
              </span>
              {electronics.stock}
            </div>
          </div>

          <div className="font-serif">
            <span className="font-bold">Descriptin:</span>
            {electronics.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Electronic;
