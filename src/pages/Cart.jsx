import React from 'react'
import { useNavigate } from 'react-router-dom'
import product1 from "../assets/prod1.png";
import product2 from "../assets/prod2.png";

const Cart = () => {

  const navigate = useNavigate();
     const handleView=()=>{
      navigate("/billing");
     }

     const handleAll=()=>{
       navigate("/")
     }
  return (
    <div><div className='md:mx-8 mt-8 mx-6 px-6 md:px-8 flex flex-col gap-16'>

        <div className='flex justify-between items-center shadow-2xl bg-[#423b3c]  w-[100%] h-[50px] text-center border-[1.5px] border-gray-200  rounded-lg text-[#f6ab4a]'>
        <div className=' w-[25%]'>Product</div>
        <div className=' w-[25%]'>price</div>
        <div className=' w-[25%]'>Quantity</div>
        <div className=' w-[25%]'>Subtotal</div></div>
        <div  className='flex justify-between items-center bg-[#b6a7a8] shadow-2xl w-[100%] h-[50px] text-center border-[1.5px] border-gray-200  md:text-base text-xs  rounded-lg text-[#311c1e] '>
            <div className='flex gap-2 w-[25%] justify-center items-center'><img src={product1} className='md:size-9 size-7'/><div >Royal Cat Dry Food Ex 2kg</div></div>
            <div className=' w-[25%]'>$650</div>
            <div className='w-[25%]'>1</div>
            <div className='w-[25%]'>$650</div>
        </div>
        <div  className='flex justify-between items-center  bg-[#b6a7a8] shadow-2xl w-[100%] h-[50px] text-center border-[1.5px] border-gray-200 md:text-base text-xs rounded-lg text-[#311c1e]' >
            <div className='flex gap-2 w-[25%] justify-center items-center'><img src={product2} className='md:size-9 size-7'/><div className='md:text-base text-xs'>Bonnie Beef Cocktail (500g)</div></div>
            <div className='w-[25%]'>$550</div>
            <div className='w-[25%]'>1</div>
            <div className=' w-[25%] '>$550</div>
        </div>
        <div className='flex justify-between'>
          <div className='border-[1.5px] border-gray-500 w-[150px] h-[30px] flex justify-center items-center hover:w-[155px] hover:h-[35px] md:text-base text-xs rounded-lg text-[#f6ab4a] bg-[#423b3c] '><button onClick={(handleAll)}>Return To Shop</button></div>
          <div className='border-[1.5px] border-gray-500 w-[150px] h-[30px] flex justify-center items-center hover:w-[155px] hover:h-[35px] md:text-base text-xs rounded-lg text-[#f6ab4a] bg-[#423b3c] '><button onClick={(handleView)}>Updated Cart</button></div>
        </div>

    </div>
    <div className='md:m-8 m-6 p-6 md:p-8 flex gap-6 flex-col'>
      <div><div className='text-[#b6a7a8]'>First Name<span className='text-red-600'> *</span></div>
      <div><input className='bg-[#e2d9da] md:w-[300px] w-[360px] h-[30px] rounded-sm'/></div></div>
     <div><div className='text-[#b6a7a8]'>Company Name</div>
      <div><input className='bg-[#e2d9da] md:w-[300px] w-[360px] h-[30px] rounded-sm'/></div></div>
      <div><div className='text-[#b6a7a8]'>Street Address<span className='text-red-600'> *</span></div>
      <div><input className='bg-[#e2d9da] md:w-[300px] w-[360px] h-[30px] rounded-sm'/></div></div>
      <div><div className='text-[#b6a7a8]'>Apartment,Floor ,etc(optional)</div>
      <div><input className='bg-[#e2d9da] md:w-[300px] w-[360px] h-[30px] rounded-sm'/></div></div>
    </div>
    </div>
  )
}

export default Cart