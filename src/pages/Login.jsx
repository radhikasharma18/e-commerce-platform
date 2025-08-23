import React from "react";
import side from "../assets/side.png";
import side1 from "../assets/side1.jpg";
import side2 from "../assets/side2.jpg";
import paws from "../assets/paws.png";

const Login = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row h-[90vh] object-fit bg-[#d4cec0] p-8"
        style={{ backgroundImage: `url(${paws})` }}
      >
        <div className="flex lg:w-[50%] w-[100%] justify-end items-center p-8">
          <div className=" h-full flex flex-col justify-center items-end">
            <div className="bg-black size-20 rounded-full flex justify-center items-center">
              <img src={side1} className=" rounded-full w-full size-20 " />
            </div>
            <div className=" flex justify-end items-end ">
              <img
                src={side2}
                className=" lg:w-[200px] h-[150px] lg:h-[200px] rounded-full  inset-x-3"
              />
            </div>
          </div>
          <div className=" flex flex-col h-full">
            <div className="flex lg:justify-center justify-end items-end w-full h-full ">
              <img
                src={side}
                className="lg:w-[300px] w-[200px] lg:h-[300px] h-[150px] rounded-full ml-8"
              />
            </div>
            <div>
              <img src={side1} className="size-32 rounded-full " />
            </div>{" "}
          </div>
        </div>
        <div className="lg:w-[50%] w-[100%] flex flex-col items-center gap-6 ">
          <div className="flex flex-col items-center ">
            <div className="text-[#362526] font- font-semibold text-2xl">
              Welcome Back
            </div>
            <div className="text-[#463132] text-sm">Login To Continue</div>
          </div>
          <div className="flex flex-col items-center  gap-4">
            <div>
              <div>Email Address</div>
              <div className="border-[1px] border-gray-500 rounded-lg w-[300px]">
                <input
                  placeholder="enter your email id"
                  type="email"
                  className="w-[100%] px-2 py-1   rounded-lg"
                />
              </div>
            </div>
            <div>
              <div>Password</div>
              <div className="border-[1px] border-gray-500 rounded-lg  w-[300px] ">
                <input
                  placeholder="enter your Password"
                  type="email"
                  className="w-[100%] px-2 py-1 rounded-lg"
                />
              </div>
            </div>
            <div className="underline"> Forget Password ?</div>
          </div>
          <div className="flex justify-center w-[50%]">
            <button className="bg-[#362526] text-[#f6ab4a] w-full p-2 rounded-lg">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
