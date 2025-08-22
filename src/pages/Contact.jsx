import React from "react";
import paws from "../assets/paws.png";
import { GrFacebookOption } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import black from "../assets/black1.jpg";

const Contact = () => {
  return (
    <div
      className=" flex justify-center bg-[#d4cec0]"
      style={{ backgroundImage: `url(${paws})` }}
    >
      <div className="lg:h-[100vh] h-[150vh] w-[80vw] flex flex-col lg:flex-row bg-white  ">
        <div className="bg-white h-full lg:w-[60%] w-[100%] mx-8 px-16 p-8 flex flex-col justify-between">
          <div className="font-serif text-2xl text-[#362526]">
            READY TO WORK WITH US
          </div>
          <div className="text-[#f6ab4a] text-xs">
            Contact us for all your questions and opinions
          </div>
          <div>
            <div className="flex justify-between gap-4 w-full  ">
              <div className="w-1/2">
                <div>
                  First Name<span className="text-red-500 ">*</span>
                </div>
                <div className="">
                  <input
                    className=" rounded-md border-[1px] p-1 border-gray-400 w-full"
                    placeholder="Enter your First Name"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div>
                  Last Name<span className="text-red-500">*</span>
                </div>
                <div className="">
                  <input
                    className=" rounded-md border-[1px]  p-1 border-gray-400 w-full"
                    placeholder="Enter your Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div>
                Email Address<span className="text-red-500">*</span>
              </div>
              <div className="">
                <input
                  className=" rounded-md border-[1px]  p-1 border-gray-400 w-full"
                  placeholder="Enter your Email"
                />
              </div>
            </div>
            <div className="">
              <div>
                Phone No.<span className="text-red-500">*</span>
              </div>
              <div className="">
                <input
                  className=" rounded-md border-[1px]  p-1 border-gray-400 w-full"
                  placeholder="Enter Phone No."
                />
              </div>
            </div>
            <div className="">
              <div>
                Country Region<span className="text-red-500">*</span>
              </div>
              <div className="">
                <input
                  className=" rounded-md border-[1px]  p-1 border-gray-400 w-full"
                  placeholder="Enter Country Region"
                />
              </div>
            </div>
            <div className="">
              <div>
                Subject<span className="text-red-500">*</span>
              </div>
              <div className="">
                <input
                  className=" rounded-md border-[1px]  p-1 border-gray-400  w-full"
                  placeholder="Enter Subject"
                />
              </div>
            </div>
            <div className="">
              <div>
                Message<span className="text-red-500">*</span>
              </div>
              <div className="">
                <textarea
                  className=" rounded-md border-[1px]  p-1 border-gray-400  w-full"
                  placeholder="Enter Message"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-[#f6ab4a] bg-[#362526] w-[80px] flex justify-center items-center rounded-lg mt-10">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full lg:w-[40%] w-[80vw] lg:px-8 px-0 flex lg:flex-col flex-row  gap-4 bg-white">
          <div className="bg-[#d4cec0] lg:w-full w-1/2 h-3/5 rounded-b-lg p-4 flex flex-col gap-4">
            <div>
              <div className="text-xs text-[#6e5355]">
                UNITED STATES(HEAD QUATER)
              </div>
              <div className="text-lg font-serif">
                152 Thatcher Road St, Mahattan, 10463, US(+025) 3886 25 16
              </div>
              <div className="underline text-[#f6ab4a] hover:scale-105">
                hello@swattechmart.com
              </div>
            </div>
            <div>
              <div className="text-xs text-[#6e5355]">
                UNITED STATES(HEAD QUATER)
              </div>
              <div className="text-lg font-serif">
                152 Thatcher Road St, Mahattan, 10463, US(+025) 3886 25 16
              </div>
              <div className="underline text-[#f6ab4a] hover:scale-105">
                hello@swattechmart.com
              </div>
            </div>
            <div className="text-lg flex gap-8">
              <div className="rounded-full size-8 flex justify-center items-center text-[#f6ab4a] bg-[#362526]">
                <GrFacebookOption />
              </div>
              <div className=" rounded-full size-8 flex justify-center items-center text-[#f6ab4a] bg-[#362526]">
                <SiInstagram />
              </div>
              <div className=" rounded-full size-8 flex justify-center items-center text-[#f6ab4a] bg-[#362526]">
                {" "}
                <FaTwitter />
              </div>
              <div className=" rounded-full size-8 flex justify-center items-center text-[#f6ab4a] bg-[#362526]">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="lg:w-full w-1/2 ">
            <img src={black} className="w-[300px] h-[215px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
