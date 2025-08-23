import React, { useEffect, useState } from "react";

const Toys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/toys?_sort=price&_order=asc")
      .then((a) => a.json())
      .then(setToys)
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Toys List</h2>
      <ul className="grid grid-cols-3 gap-4">
        {toys.map((toy) => (
          <li key={toy.id} className="border p-2 mb-2 rounded ">
            <h3 className="font-bold">{toy.name}</h3>
            <p>Brand: {toy.brand}</p>
            <p>Price: ₹{toy.price}</p>
            <p>Category: {toy.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toys;
