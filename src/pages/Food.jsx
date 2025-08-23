import React from "react";
import { useEffect, useState } from "react";

const Food = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/foods?_sort=price&_order=asc")
      .then((r) => r.json())
      .then(setFood)
      .catch(console.error);
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {food.map((foods) => (
        <div key={foods.id} className="border-[1px] border-black p-4">
          <h6 className="font-bold text-xl">{foods.name}</h6>
          <div>Category{foods.category}</div>
          <div className="font-bold">Price-${foods.price}</div>
          <div>Rating-{foods.rating}</div>
          <div>Stock-{foods.stock}</div>
          <div>
            <span className="font-semibold">Description</span>-
            {foods.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Food;
