import React from 'react'
import LOGO from '../assets/logo.png.png'
import { IoSearch } from "react-icons/io5";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaGripLines } from "react-icons/fa";


function Navbar() {
  return (
    <div className=' '>
        <div className='bg-gray-100 flex items-center justify-between w-[100%] h-[50px] px-8'>
            <div className='flex items-center w-[50%] justify-start gap-16 h-[100%]'>
         <div className='bg-white flex justify-center items-center w-[200px] h-[100%] border-[1px] border-gray-200 '>
            <img src={LOGO}/>
         </div>
         <div className='flex relative w-[250px] '>
         <div className=''><input placeholder='Search anything...' className='rounded-full w-[250px] p-2 text-xs'/></div>
         <div className='absolute right-0 bg-[#362526] text-orange-400 size-8 flex justify-center items-center rounded-full'> <IoSearch /></div></div>
         </div>
         <div className='flex items-center gap-1'>
            <div className='text-2xl'><FaPhone/></div>
            <div>
            <div className='text-xs'>help line (24/7)</div>
         <div className='font-bold'>+91 8619818765</div></div></div>
         <div className='flex text-[#362526] justify-between gap-6 text-xl'>
            <div><MdOutlineCurrencyExchange /></div>
            <div><IoMdHeart /></div>
            <div><IoPerson /></div>
            <div><FaShoppingBag /></div>
         </div>
        </div>
        <div className='px-8 flex justify-between w-[100%] h-[50px] bg-[#e9e7e8]'>
        <div className='flex  justify-between gap-2'>
        <div className='flex items-center bg-gray-100 justify-center w-[200px] h-[100%] border-[1px] border-gray-200 '><div>CATEGORIES</div> <span><IoIosArrowDown/></span></div>
        <div className='flex gap-6'>
        <div className='flex items-center'><div>HOME</div> <span><IoIosArrowDown/></span></div>
       <div className='flex items-center'><div>PAGES</div> <span><IoIosArrowDown/></span></div>
       <div className='flex items-center'><div>PRODUCTS</div> <span><IoIosArrowDown/></span></div>
        <div className='flex items-center'><div>CONTACT</div> </div></div></div>
        <div className='text-orange-400 bg-[#362526] w-[50px] text-2xl flex justify-center items-center'> <div>< FaGripLines /></div></div>
        </div>
    </div>
  )
}

export default Navbar