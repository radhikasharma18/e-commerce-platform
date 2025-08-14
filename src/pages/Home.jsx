import React from 'react';
import background from '../assets/background.jpg'; 
import Banner from '../assets/slider_img1.png.png';
import banner1 from '../assets/brand1.png.png';
import banner2 from '../assets/brand2.png.png';
import banner3 from '../assets/brand3.png.png';
import banner4 from '../assets/brand4.png.png';
import banner5 from '../assets/brand5.png.png';
import banner6 from '../assets/banner.png.png';
import banner7 from '../assets/div.banner_img.png';
import cat1 from '../assets/cat1.png.png';
import cat2 from '../assets/cat2.png.png';
import cat3 from '../assets/cat3.png.png';
import cat4 from '../assets/cat4.png.png';
import cat5 from '../assets/cat5.png.png';
import cat6 from '../assets/cat6.png.png';
import cat7 from '../assets/cat7.png.png';
import cat8 from '../assets/cat8.png.png';
import { IoIosArrowRoundForward } from "react-icons/io";
const Home = () => {
  return (
    <div className="p-8 ">
      <div className="md:h-[100vh] h-[140vh] w-[100%]  flex flex-col md:flex-row">
        <div className='md:w-[80%] w-[100%]'><div
          className="rounded-lg flex p-8 mr-2 h-[65%] justify-between items-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          
        >
            <div className='flex flex-col gap-4 w-[40%]'>
                <div className='flex flex-col md:gap-4 gap-2 ' >
                    <div className='text-orange-300 md:text-5xl text-2xl '>eVolve</div>
                    <div className='text-white md:text-5xl text-2xl md:mb-8 mb-4 '>Quality Foods For Your pet</div>
                </div>
                <div className='md:w-[150px] w-[100px] md:text-base text-xs text h-[30px] md:h-[40px] bg-orange-400 text-white rounded-lg flex justify-center items-center '><button>DISCOVER NOW</button></div>
            </div>
            <div className='w-[60%]'>
                <img src={Banner}
                className='lg:h-[290px] h-[200px] w-[400px]'/>
            </div>
          
        </div> <div className="w-[99%] h-[30%] p-4 bg-gray-300 mt-2 flex justify-between items-center rounded-lg">
            <div className='flex flex-col md:flex-row justify-around items-center w-[100%]'>
              <div className='flex md:flex-col flex-row mb-4 md:mb-0'>
              <div className='text-[#362526] text-xl font-bold'>Humble</div>
              <div className='font-sans'>Brand Sponsor</div>  </div>
              <div className='flex justify-between md:w-[90%] w-[100%]'>
            <div><img src={banner1}/></div>
            <div><img src={banner2}/></div>
            <div><img src={banner3}/></div>
            <div><img src={banner4}/></div>
            <div><img src={banner5}/></div></div></div>
        </div></div>
       <div className=' md:w-[30%] w-[100%] h-[100%] '>
        <div className='w-[100%] h-[100%] flex flex-col gap-2'>
        <div className='flex flex-col md:flex-row p-2  w-[100%] md:h-[50%] h-[60%] border-[1px] border-black  rounded-lg' >
            <div className='flex flex-col md:gap-4 gap-8 mt-4' >
              <div className='text-gray-500 text-xs'>STOSI</div>
              <div className='md:text-2xl text-4xl'>Packet Top Resistence Food...</div>
              <div className='w-[80px] h-[30px] bg-orange-400 text-white rounded-md flex justify-center items-center text-sm '><button>Shop Now</button></div>
            </div>
            <div className='mt-4'><img src={banner6} className='md:w-[330px] w-[300px]  md:h-[200px] h-[300px] pb-4 '/></div>
          </div>
          <div className='md:w-[96%] w-[100%] md:h-[60%] h-[100%]'><img src={banner7} className='' /></div>
        </div>
      </div>
</div>
<div className='md:h-[50vh] h-[100vh] w-[95%] md:w-[100%]  rounded-lg border-[1px] border-gray-200 flex flex-col justify-between'>
  <div className='flex justify-between p-8' >
    <div className='text-lg font-serif text-[#362526] font-bold'>Pets Food Categories</div>
    <div className='flex items-center gap-2 group hover:text-lg hover:underline '>View All <span className='text-2xl group-hover:text-4xl hover-underline'><IoIosArrowRoundForward /></span></div>
  </div>
  <div className='flex justify-between flex-wrap gap-8 md:gap-0 px-8'>
  <div className='flex flex-col items-center justify-between size-28'>
    <div className='rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center '><img src={cat1} className='w-8 h-10'/></div>
    <div className='text-xs font-serif text-[#362526]'>CAT</div>
  </div>
    <div className='flex flex-col items-center justify-between size-28'>
    <div className='rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center'><img src={cat2} className='w-8 h-10'/></div>
    <div className='text-xs font-serif text-[#362526]'>DOG</div>
  </div>
    <div className='flex flex-col items-center justify-between size-28'>
    <div className='rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center'><img src={cat3} className='w-10 '/></div>
    <div className='text-xs font-serif text-[#362526]'>PARROT</div>
  </div>
   <div className='flex flex-col items-center justify-between size-28'>
    <div className='rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center'><img src={cat4} className='w-8 h-10'/></div>
    <div className='text-xs font-serif text-[#362526]'>FISH</div>
  </div>
  <div className='flex flex-col items-center justify-between size-28'>
    <div className='rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center'><img src={cat5} className='w-8 h-10'/></div>
    <div className='text-xs font-serif text-[#362526]'>HORSE</div>
  </div>
    <div className='flex flex-col items-center justify-between size-28'>
    <div className='rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center'><img src={cat6} className='w-8 h-10'/></div>
    <div className='text-xs font-serif text-[#362526]'>RABBIT</div>
  </div>
    <div className='flex flex-col items-center justify-between size-28'>
    <div className='rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center'><img src={cat7} className='w-8 h-10'/></div>
    <div className='text-xs font-serif text-[#362526]'>HEN</div>
  </div>
   <div className='flex flex-col items-center justify-between size-28'>
    <div className='rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center'><img src={cat8} className='w-8 h-10'/></div>
    <div className='text-xs font-serif text-[#362526]'>TORTOISE</div>
  </div>
  </div>
  <div className='bg-orange-300 w-[100%] lg:h-[25%] h-[10%] flex justify-center items-center font-serif'>12k+ User Active Everyday </div>
  </div>
<div className='h-[100vh] rounded-lg border-[1px] border-gray-300  my-8'>

   <div className='flex justify-between p-8' >
    <div className='text-xl font-serif text-[#362526] font-bold'>Hand-Picked Food</div>
    <div className='flex items-center gap-2 group hover:text-lg hover:underline '>View All <span className='text-2xl group-hover:text-4xl hover-underline'><IoIosArrowRoundForward /></span></div>
  </div>
  <div></div>
</div>
    </div>
  );
};

export default Home;
