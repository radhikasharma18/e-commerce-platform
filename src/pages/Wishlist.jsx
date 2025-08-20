import React from 'react'
import product1 from "../assets/prod1.png";
import product2 from "../assets/prod2.png";
import product3 from "../assets/prod3.png";
import product4 from "../assets/prod4.png";
import product5 from "../assets/prod5.png";
import Vectore from "../assets/Vector.png";
import Wishcard from './Wishcard';

const Wishlist = () => {
    const productlist = [
        {
          Image: product1,
          name: "Royal Canin Cat Dry Food Exigent 2kg",
          picture: Vectore,
          salesprice: "$395",
          label: "$100",
          price: "$500",
          likes: "(5)",
          ship: "Free Shiping",
          stock: "In stock",
        },
        {
          Image: product2,
          name: "Brit Premium by Nature Cat Can – Chicken (200g)",
          picture: Vectore,
          salesprice: "$590",
          label: "$3.00",
          price: "$610",
          likes: "(152)",
          ship: "Pre Order",
          stock: "Out of Stock",
        },
        {
          Image: product3,
          name: "Spectrum Starter32 Kitten Food – Chicken Formula (400g)",
          picture: Vectore,
          salesprice: "$1729",
          label: "$3.00",
          price: "$2110",
          likes: "(152)",
          ship: "Pre Order",
          stock: "Out of Stock",
        },
        {
          Image: product4,
          name: "Himalaya Erina EP Tick and Flea Control Shampoo 200 ml",
          picture: Vectore,
          salesprice: "$979",
          label: "$3.00",
          price: "$1259",
          likes: "(152)",
          ship: "Pre Order",
          stock: "In stock",
        },
        {
          Image: product5,
          name: "Bonnie Beef Cocktail (500g)",
          picture: Vectore,
          salesprice: "$9",
          label: "$3.00",
          price: "$12",
          likes: "(152)",
          ship: "Free Shiping",
          stock: "Out of Stock",
        },
      ];
  return (
    <div className='h-[80vh]'>
<div className="flex gap-2 mt-16 flex-col md:flex-row text-sm justify-between" >
            {productlist.map((Product, index) => (
              <Wishcard
                key={index}
                sales={Product.label}
                name={Product.name}
                price={Product.price}
                salesprice={Product.salesprice}
                picture={Product.Image}
                vector={Product.picture}
                instock={Product.instock}
                ship={Product.ship}
                likes={Product.likes}
                stock={Product.stock}
              />
            ))}
          </div>
    </div>
  )
}

export default Wishlist