import React from 'react';
import background from '../assets/background.jpg'; 
import Banner from '../assets/slider_img1.png.png';
import banner1 from '../assets/brand1.png.png';
import banner2 from '../assets/brand2.png.png';
import banner3 from '../assets/brand3.png.png';
import banner4 from '../assets/brand4.png.png';
import banner5 from '../assets/brand5.png.png';
import banner6 from '../assets/banner1.png.png';
const Home = () => {
  return (
    <div className="p-8 ">
      <div className="h-[100vh] w-[100%]  flex">
        <div><div
          className="rounded-lg flex p-8 mr-2"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          
        >
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4' >
                    <div className='text-orange-300 text-5xl'>eVolve</div>
                    <div className='text-white text-5xl mb-8'>Quality Foods For Your pet</div>
                </div>
                <div className='w-[150px] h-[40px] bg-orange-400 text-white rounded-lg flex justify-center items-center '><button>DISCOVER NOW</button></div>
            </div>
            <div>
                <img src={Banner}
                className='h-[270px] w-[400px]'/>
            </div>
          
        </div> <div className="w-[99%] h-[20%] p-4 bg-gray-300 mt-2 flex justify-between items-center rounded-lg">
            <div>
              <div className='text-[#362526] text-xl font-bold'>Humble</div>
              <div>Brand Sponsor</div>  </div>
            <div><img src={banner1}/></div>
            <div><img src={banner2}/></div>
            <div><img src={banner3}/></div>
            <div><img src={banner4}/></div>
            <div><img src={banner5}/></div>
        </div></div>
       
        <div className=' w-[30%] h-[40%] border-[1px] border-black  rounded-lg'>
          <div className='flex p-2' >
            <div className='flex flex-col gap-4' >
              <div className='text-gray-500 text-xs'>STOSI</div>
              <div className='text-2xl'>Packet Top Resistence Food...</div>
              <div className='w-[80px] h-[30px] bg-orange-400 text-white rounded-md flex justify-center items-center text-sm '><button>Shop Now</button></div>
            </div>
            <div><img src={banner6} className='w-[200px] '/></div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default Home;
