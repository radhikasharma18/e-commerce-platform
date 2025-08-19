import React from 'react'
import paws from '../assets/paws.png';
import { CiLocationArrow1 } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";



const Footer = () => {
  return (
    
     <div>
      

      <div className="md:h-[50vh] h-[100vh] object-fit bg-[#e9e7e8] p-8" style={{ backgroundImage: `url(${paws})`}}>
        <div className=' md:h-[40vh] h-[90vh] w-[96%] flex md:flex-row flex-col justify-between  p-0 m-2 gap-2'>
        <div className='text-black flex flex-col gap-2 '>
          <div className='text-2xl font-bold mb-2'>Exclusive</div>
          <div className='lg:text-xl sm:text-lg  '>Subscribe</div>
          <div className='lg:text-sm sm:text-xs'>Get 10% off your first order</div>
          <div className=' text-sm flex items-center justify-around border-2 border-white h-6 w-[150px] p-1 '> <input type="email" placeholder="Enter your email" className='rounded-md text-white bg-black w-[100px]' />
          <button className='text-black text-2xl rotate-45 p-1 '><CiLocationArrow1 /></button></div>
        </div>

        <div className='text-black flex flex-col gap-2 '>
          <div className='lg:text-xl text-lg  mb-2'>Support</div>
          <div className='lg:text-sm sm:text-xs'>A-13 Nehru Nagar Panipech Jaipur</div>
          <div className='lg:text-sm sm:text-xs'>sharmaradhika1803@gmail.com</div>
          <div className='lg:text-sm sm:text-xs'>8619818765</div>
        </div>
        <div className='text-black flex flex-col gap-2'>
          <div className='lg:text-xl text-lg mb-2'>Account</div>
          <div className='lg:text-sm text-xs'>My Account</div>
          <div className='lg:text-sm text-xs'>Login/Register</div>
          <div className='lg:text-sm text-xs'>Cart</div>
          <div className='lg:text-sm text-xs'>Whislist</div>
          <div className='lg:text-sm text-xs'>Shop</div>
          </div>
        <div className='text-black md:flex flex-col gap-2 lg:block hidden'>
          <div className='lg:text-xl mb-2'>Quick Link</div>
          <div className='lg:text-sm text-xs'>Privacy Policy</div>
          <div className='lg:text-sm text-xs'>Terms of Use</div>
          <div className='lg:text-sm text-xs'>FAQ</div>
          <div className='lg:text-sm text-xs'>Contact</div>
        </div>
        <div className='text-black flex flex-col gap-2'>
          <div className='lg:text-xl text-lg  mb-2'>Download App</div>
          <div className='text-xs text-gray-500'>Save $3 with App New User Only  </div>
          <div className=' flex gap-2'>
            <div className='text-black bg-white size-20 text-8xl  flex p-1  justify-center items-center'><BsQrCode /></div>
            
          </div>
          <div></div>
          <div className='text-2xl flex gap-8'>
            <div><GrFacebookOption /></div>
            <div>< SiInstagram /></div>
            <div> <FaTwitter /></div>
            <div><FaLinkedinIn /></div>
          </div>
        </div>
      </div>
        <div></div>
      </div>
     </div>
  )
}

export default Footer;