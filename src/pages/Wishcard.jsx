import React from 'react'
import { IoMdHeart } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Wishcard = (props) => {
  return (
    <div>
<div className="group md:h-[250px] h-[320px] md:w-[220px] w-[300px] p-6  rounded-lg  transition-all duration-300">
      <div className="flex justify-between">
        <div className="bg-[#f6ab4a] text-white rounded-md px-2 h-5 flex justify-center items-center text-xs">
          {props.sales}
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <div className=" rounded-full flex justify-center  items-center size-8 bg-black text-[#f6ab4a] ">
            <IoMdHeart />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-4">
        <img src={props.picture} className="w-[155px]" alt="product" />
      </div>
      <div className="flex items-center">
        <div className="flex justify-start items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={props.vector} className="w-4" alt="rating star" />
          ))}
        </div>
        <div className="text-xs text-gray-500"> {props.likes}</div>{" "}
      </div>
      <div className="mt-2 font-medium text-gray-800">{props.name}</div>
      <div>
        Price:{" "}
        <span className="font-bold text-[#f6ab4a] ">{props.salesprice}</span>{" "}
        <span className="line-through text-gray-600">{props.price}</span>
      </div>
      <div className="border-green-500 text-green-500 border-[1.5px] rounded-md text-xs w-[80px]">
        {props.ship}
      </div>

      <div>{props.stock == "In stock" ? <div className="flex items-center text-green-600"><FaCheckCircle /> In Stock</div> :<div className=" flex items-center text-red-600"> <ImCross /> Out of Stock </div>}</div>
    </div>
 

        
    </div>
  )
}

export default Wishcard