import React from 'react'
import { IoMdHeart } from "react-icons/io";

const Animalcard = (props) => {
  return (
    <div>
<div className='border-[1px] border-gray-200 rounded-lg w-[200px] h-[350px] flex flex-col items-center p-4 justify-between'>
    <div className='bg-black text-white w-[40px] h-[20px]  text-xs rounded-md flex justify-center '>NEW</div>
   <div><img src={props.picture}/></div> 
   <div className="flex items-center">
        <div className="flex justify-start items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={props.vector} className="w-3" alt="rating star" />
          ))}
        </div>
        <div className="text-xs text-gray-500"> {props.likes}</div>{" "}
      </div>
      <div>{props.name}</div>
      <div className='text-lg font-semibold'>{props.price}</div>
      <div className='flex justify-between items-center w-full'>
      <div>50 Purchase</div>
      <div className='text-gray-500'><IoMdHeart /> </div></div>
</div>
    </div>
  )
}

export default Animalcard