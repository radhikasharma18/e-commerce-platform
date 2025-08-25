import React from "react";
import { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Petfood = () => {
  const [petfood, setPetfood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/petfood?_sort=price&_order=asc")
      .then((a) => a.json())
      .then(setPetfood)
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 m-8 ">
      {petfood.map((petfoods) => (
        <div
          className="border-[2px] rounded-lg p-4 shadow-2xl"
          key={petfoods.id}
        >
          <div className="font-semibold flex justify-center text-2xl font-serif">
            {petfoods.name}
          </div>
          <div className="flex justify-center">
            <img src={""} />
          </div>
          <div className="flex justify-between">
            <div className="">
              <span className="font-semibold">Category:</span>
              {petfoods.category}
            </div>
            <div className="text-orange-300 flex items-center">
              <span>
                {" "}
                <FaStar />{" "}
              </span>
              {petfoods.rating}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">
              <span className="font-serif">Price: $</span>
              {petfoods.price}
            </div>
            <div className="text-gray-600 flex items-center">
              <span>
                <IoPerson />
              </span>
              {petfoods.stock}
            </div>
          </div>

          <div className="font-serif">
            <span className="font-bold">Descriptin:</span>
            {petfoods.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Petfood;
