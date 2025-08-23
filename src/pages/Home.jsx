import React from "react";
import background from "../assets/background.jpg";
import Banner from "../assets/slider_img1.png.png";
import banner1 from "../assets/brand1.png.png";
import banner2 from "../assets/brand2.png.png";
import banner3 from "../assets/brand3.png.png";
import banner4 from "../assets/brand4.png.png";
import banner5 from "../assets/brand5.png.png";
import banner6 from "../assets/banner.png.png";
import banner7 from "../assets/div.banner_img.png";
import cat1 from "../assets/cat1.png.png";
import cat2 from "../assets/cat2.png.png";
import cat3 from "../assets/cat3.png.png";
import cat4 from "../assets/cat4.png.png";
import cat5 from "../assets/cat5.png.png";
import cat6 from "../assets/cat6.png.png";
import cat7 from "../assets/cat7.png.png";
import cat8 from "../assets/cat8.png.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import product1 from "../assets/prod1.png";
import product2 from "../assets/prod2.png";
import product3 from "../assets/prod3.png";
import product4 from "../assets/prod4.png";
import product5 from "../assets/prod5.png";
import Vectore from "../assets/Vector.png";
import Productcard from "./Productcard";
import { IoMdHeart } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiVanillaFlower } from "react-icons/gi";
import { IoHeadsetSharp } from "react-icons/io5";
import dog from "../assets/sale_dog.png.png";
import { IoMdMail } from "react-icons/io";
import cat from "../assets/sale_cat.png.png";
import logo from "../assets/banner_img.png.png";
import logo1 from "../assets/banner_logo.png.png";
import Animalcard from "./Animalcard";
import dog1 from "../assets/div1.img.png";
import dog2 from "../assets/div.img.png";
import blog from "../assets/blog2.jpg.png";
import blog2 from "../assets/blog3.jpg.png";

const Home = () => {
  const productlist = [
    {
      Image: product1,
      name: "Royal Canin Cat Dry Food Exigent 2kg",
      picture: Vectore,
      salesprice: "$395",
      label: "$100",
      price: "$500",
      likes: "(5)",
      ship: "free shiping",
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
      ship: "Free Shipping",
      stock: "Out of Stock",
    },
  ];
  const product = [
    {
      Image: product1,
      name: "Royal Canin Cat Dry Food Exigent 2kg",
      picture: Vectore,
      salesprice: "$395",
      label: "$100",
      price: "$500",
      likes: "(5)",
      ship: "free shiping",
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
  ];
  return (
    <>
      <div className="md:p-8 p-0 ">
        <div className="md:h-[100vh] h-[160vh] w-[100%]  flex flex-col md:flex-row">
          <div className="md:w-[80%] w-[100%]">
            <div
              className="rounded-lg flex p-8 mr-2 lg:h-[65%] md:h-[45%] h-[65%] justify-between items-center"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col gap-4 w-[40%]">
                <div className="flex flex-col md:gap-4 gap-2 ">
                  <div className="text-orange-300 md:text-5xl text-2xl ">
                    eVolve
                  </div>
                  <div className="text-white lg::text-5xl text-2xl md:mb-8 mb-4  ">
                    Quality Foods For Your pet
                  </div>
                </div>
                <div className="md:w-[150px] w-[100px] md:text-base text-xs text h-[30px] md:h-[40px] bg-orange-400 text-white rounded-lg flex justify-center items-center ">
                  <button>DISCOVER NOW</button>
                </div>
              </div>
              <div className="w-[60%]">
                <img
                  src={Banner}
                  className="lg:h-[290px] h-[200px] w-[400px]"
                />
              </div>
            </div>{" "}
            <div className="w-[99%] h-[30%] p-4 bg-gray-300 mt-2 flex justify-between items-center rounded-lg">
              <div className="flex flex-col md:flex-row justify-around items-center w-[100%]">
                <div className="flex md:flex-col flex-row mb-4 md:mb-0">
                  <div className="text-[#362526] text-xl font-bold">Humble</div>
                  <div className="font-sans">Brand Sponsor</div>{" "}
                </div>
                <div className="flex justify-between md:w-[90%] w-[100%]">
                  <div>
                    <img src={banner1} />
                  </div>
                  <div>
                    <img src={banner2} />
                  </div>
                  <div>
                    <img src={banner3} />
                  </div>
                  <div>
                    <img src={banner4} />
                  </div>
                  <div>
                    <img src={banner5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-[30%] w-[100%] h-[100%] ">
            <div className="w-[100%] h-[100%] flex flex-col gap-2">
              <div className="flex flex-col md:flex-row p-2  w-[100%] md:h-[50%] h-[60%] border-[1px] border-black  rounded-lg">
                <div className="flex flex-col md:gap-4 gap-8 mt-4">
                  <div className="text-gray-500 text-xs">STOSI</div>
                  <div className="md:text-2xl text-4xl">
                    Packet Top Resistence Food...
                  </div>
                  <div className="w-[80px] h-[30px] bg-orange-400 text-white rounded-md flex justify-center items-center text-sm ">
                    <button>Shop Now</button>
                  </div>
                </div>
                <div className="mt-4">
                  <img
                    src={banner6}
                    className="md:w-[330px] w-[300px]  md:h-[200px] h-[300px] pb-4 "
                  />
                </div>
              </div>
              <div className="md:w-[96%] w-[100%] md:h-[60%] h-[100%]">
                <img src={banner7} className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="lg:h-[50vh] h-[80vh] w-[95%] md:w-[100%]  rounded-lg border-[1px] border-gray-200 flex flex-col justify-between">
            <div className="flex justify-between p-8">
              <div className="text-lg font-serif text-[#362526] font-bold">
                Pets Food Categories
              </div>
              <div className="flex items-center gap-2 group hover:underline ">
                View All{" "}
                <span className="text-2xl">
                  <IoIosArrowRoundForward />
                </span>
              </div>
            </div>
            <div className="flex justify-between flex-wrap md:gap-0 gap-8 px-8">
              <div className="flex flex-col items-center justify-between size-28 hover:scale-110">
                <div className="rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center ">
                  <img src={cat1} className="w-8 h-10 " />
                </div>
                <div className="text-xs font-serif text-[#362526] ">CAT</div>
              </div>
              <div className="flex flex-col items-center justify-between size-28 hover:scale-110">
                <div className="rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center">
                  <img src={cat2} className="w-8 h-10" />
                </div>
                <div className="text-xs font-serif text-[#362526]">DOG</div>
              </div>
              <div className="flex flex-col items-center justify-between size-28 hover:scale-110">
                <div className="rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center">
                  <img src={cat3} className="w-10 " />
                </div>
                <div className="text-xs font-serif text-[#362526]">PARROT</div>
              </div>
              <div className="flex flex-col items-center justify-between size-28 hover:scale-110">
                <div className="rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center">
                  <img src={cat4} className="w-8 h-10" />
                </div>
                <div className="text-xs font-serif text-[#362526]">FISH</div>
              </div>
              <div className="flex flex-col items-center justify-between size-28 hover:scale-110">
                <div className="rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center">
                  <img src={cat5} className="w-8 h-10" />
                </div>
                <div className="text-xs font-serif text-[#362526]">HORSE</div>
              </div>
              <div className="flex flex-col items-center justify-between size-28 hover:scale-110">
                <div className="rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center">
                  <img src={cat6} className="w-8 h-10" />
                </div>
                <div className="text-xs font-serif text-[#362526]">RABBIT</div>
              </div>
              <div className="flex flex-col items-center justify-between size-28 hover:scale-110">
                <div className="rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center">
                  <img src={cat7} className="w-8 h-10" />
                </div>
                <div className="text-xs font-serif text-[#362526]">HEN</div>
              </div>
              <div className="flex flex-col items-center justify-between size-28 hover:scale-110">
                <div className="rounded-full border-[1px] border-gray-200 size-20 flex justify-center items-center">
                  <img src={cat8} className="w-8 h-10" />
                </div>
                <div className="text-xs font-serif text-[#362526]">
                  TORTOISE
                </div>
              </div>
            </div>
            <div className="bg-orange-300 w-[100%] lg:h-[25%] h-[10%] flex justify-center items-center font-serif">
              12k+ User Active Everyday{" "}
            </div>
          </div>
        </div>
        <div className="lg:h-[110vh]  h-[230vh] rounded-lg border-[1px] border-gray-300 my-8 ">
          <div className="flex justify-between p-8">
            <div className="text-xl font-serif text-[#362526] font-bold">
              Hand-Picked Food
            </div>
            <div className="flex items-center gap-2 group  hover:underline ">
              View All{" "}
              <span className="text-2xl ">
                <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
          <div className="relative  mx-4 flex flex-row lg:justify-start justify-center">
            <div className="grid col-4 gap-16 md:gap-2 mt-16 md:grid-cols-3 lg:flex  px-8 items-between">
              {productlist.map((Product, index) => (
                <Productcard
                  key={index}
                  sales={Product.label}
                  name={Product.name}
                  price={Product.price}
                  salesprice={Product.salesprice}
                  picture={Product.Image}
                  vector={Product.picture}
                  ship={Product.ship}
                  likes={Product.likes}
                  stock={Product.stock}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:h-[10vh] h-[50vh] bg-[#f6ab4a]  rounded-lg flex flex-col md:flex-row gap-6 justify-between items-center text-sm p-4">
          <div className="flex text-white items-center ">
            <div className="text-xl">
              <FaTruckFast />
            </div>
            <div>Free shipping over $100</div>
          </div>
          <div className="flex text-white items-center">
            <div className="text-xl">
              <GiBackwardTime />
            </div>
            <div>30 DAYS MONEY BACK </div>
          </div>
          <div className="flex text-white items-center">
            <div className="text-xl">
              <RiSecurePaymentFill />
            </div>
            <div>100% SECURE PAYMENT</div>
          </div>
          <div className="flex text-white items-center">
            <div className="text-xl">
              <GiVanillaFlower />
            </div>
            <div>FREE PRODUCT RETURN</div>
          </div>
          <div className="flex text-white items-center">
            <div className="text-xl">
              <IoHeadsetSharp />
            </div>
            <div>24/7 ONLINE & OFFLINE SUPPORT</div>
          </div>
        </div>

        <div className="md:h-[100vh] h-[270vh] flex  md:flex-row flex-col mt-8  ">
          <div className="bg-[#362526] md:h-[79.4vh] h-[82vh] rounded-l-lg  md:w-[25%] w-[100%]">
            <div className="h-[50%]">
              <div className="text-2xl text-white flex items-center justify-center">
                Flash Sale
              </div>
              <div className="text-white flex flex-col justify-between h-[100%] p-8 gap-6">
                <div className="bg-[#523c3e]  rounded-lg flex items-center justify-between h-[20%] p-2">
                  <div>40% OFFER </div>
                  <div>1</div>
                </div>
                <div className="bg-[#523c3e]  rounded-lg flex items-center justify-between h-[20%] p-2">
                  <div>CHRISTMAS OFFER</div>
                  <div>1</div>
                </div>
                <div className="bg-[#523c3e]  rounded-lg flex items-center justify-between h-[20%] p-2">
                  <div>HANDPICKED</div>
                  <div>1</div>
                </div>
                <div className="bg-[#523c3e]  rounded-lg flex items-center justify-between h-[20%] p-2">
                  <div>BEST SELL</div>
                  <div>1</div>
                </div>
                <div className="bg-[#523c3e]  rounded-lg flex items-center justify-between h-[20%] p-2">
                  <div>RECENTLY ADDED</div>
                  <div>1</div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={dog}
                  className=" md:w-[150px] w-[200px] flex justify-center items-center md:mt-20 mt-44  "
                />
              </div>
            </div>
          </div>
          <div className="md:h-full h-[160vh] md:w-[75%] w-[100%] rounded-r-lg border-[1px] md:border-gray-400 border-transparent">
            <div className=" md:h-[79.4vh] h-[160vh] w-[100%] rounded-r-lg border-b-[1px] md:border-gray-400 border-transparent">
              <div className="relative   flex flex-row lg:justify-start justify-center">
                <div className="flex gap-2 mt-16 flex-col md:flex-row text-sm">
                  {product.map((Product, index) => (
                    <Productcard
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
            </div>
            <div className="h-[20.6%] w-[100%] flex flex-col md:flex-row justify-between p-8">
              <div className="flex flex-col justify-center items-center">
                <div className="text-[#362526] text-xl font-bold">
                  Newsletter
                </div>
                <div className="text-[#422f30] text-x">
                  40% offer on the way
                </div>
              </div>
              <div className="flex justify-center items-center h-[35px] border-[1px] border-black rounded-full pl-2 gap-2">
                <div>
                  <IoMdMail />
                </div>
                <input placeholder="Enter Your Email Address" />
                <button className="rounded-full bg-[#362526] text-white w-[100px] h-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[100vh] h-[270vh] flex flex-col md:flex-row mt-8  ">
          <div className="bg-[#f6ab4a] h-[78vh] md:h-[78vh] rounded-l-lg  md:w-[25%] w-[100%]">
            <div className="h-[50%]">
              <div className="text-2xl text-white flex items-center justify-center">
                Flash Sale
              </div>
              <div className="text-white flex flex-col justify-between h-[100%] p-8 gap-6">
                <div className="bg-[#f7b156]   rounded-lg flex items-center justify-between h-[20%] p-2">
                  <div>40% OFFER </div>
                  <div>1</div>
                </div>
                <div className="bg-[#f7b156] rounded-lg flex items-center justify-between h-[20%] p-2">
                  <div>CHRISTMAS OFFER</div>
                  <div>1</div>
                </div>
                <div className="bg-[#f7b156]  rounded-lg flex items-center justify-between h-[20%] p-2">
                  <div>HANDPICKED</div>
                  <div>1</div>
                </div>
                <div className="bg-[#f7b156]  rounded-lg flex items-center justify-between h-[20%] p-2">
                  <div>BEST SELL</div>
                  <div>1</div>
                </div>
                <div className="bg-[#f7b156]  rounded-lg flex items-center justify-between h-[20%] p-2">
                  <div>RECENTLY ADDED</div>
                  <div>1</div>
                </div>
              </div>
              <div className="flex justify-center items-end">
                <img
                  src={cat}
                  className=" w-[150px] mt-44 md:mt-14 flex items-end"
                />
              </div>
            </div>
          </div>
          <div className="h-full md:w-[75%]  w-[100%] rounded-r-lg border-[1px] md:border-gray-400 border-transparent ">
            <div className=" md:h-[78vh] h-[160vh] w-[100%] rounded-r-lg border-b-[1px] md:border-gray-400 border-transparent ">
              <div className="relative   flex flex-row lg:justify-start justify-center">
                <div className="flex gap-2 mt-16 flex-col md:flex-row text-sm">
                  {product.map((Product, index) => (
                    <Productcard
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
            </div>
            <div className="h-[20.6%] w-[100%] flex flex-col md:flex-row justify-between p-8">
              <div className="flex flex-col justify-center items-center">
                <div className="text-[#362526] text-xl font-bold">
                  Newsletter
                </div>
                <div className="text-[#422f30] text-x">
                  40% offer on the way
                </div>
              </div>
              <div className="flex justify-center items-center h-[35px] border-[1px] border-black rounded-full pl-2 gap-2">
                <div>
                  <IoMdMail />
                </div>
                <input placeholder="Enter Your Email Address" />
                <button className="rounded-full bg-[#362526] text-white w-[100px] h-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#e9e7e8] md:h-[20vh] h-[60vh] mt-10 rounded-lg flex flex-col md:flex-row justify-between items-center md:p-4 p-8">
          <div>
            {" "}
            <img src={logo1} />
          </div>
          <div>
            {" "}
            <img src={logo} />
          </div>
          <div>
            <div className="text-[#573e3f]">
              Pay with 4 installment,0% interest
            </div>
            <div className="text-4xl text-[#422f30]">
              <span className="font-bold">Buy Now,</span>Pay Letter
            </div>
          </div>
          <div>
            <button className="bg-white rounded-lg p-2 hover:scale-105 ">
              Discover Now
            </button>
          </div>
        </div>
        <div className="mt-10 p-4 md:h-[90vh] h-[260vh]  border-[1px] border-gray-500 rounded-lg">
          <div className="flex  flex-col md:flex-row justify-between ">
            <div className="text-4xl font-serif">Best selling Product</div>
            <div className="flex  flex-col md:flex-row gap-2 text-xs md:mt-0 mt-10">
              <div className="border-[1px] border-gray-300 rounded-lg p-2 hover:bg-[#573e3f] hover:text-white">
                Featured
              </div>
              <div className="border-[1px] border-gray-300 rounded-lg p-2 hover:bg-[#573e3f] hover:text-white">
                Pregnancy & Postpartum
              </div>
              <div className="border-[1px] border-gray-300 rounded-lg p-2 hover:bg-[#573e3f] hover:text-white">
                Milk & Food
              </div>
              <div className="border-[1px] border-gray-300 rounded-lg p-2 hover:bg-[#573e3f] hover:text-white">
                Diapers & wipes
              </div>
              <div className="border-[1px] border-gray-300 rounded-lg p-2 hover:bg-[#573e3f] hover:text-white">
                infant
              </div>
              <div className="border-[1px] border-gray-300 rounded-lg p-2 hover:bg-[#573e3f] hover:text-white">
                Strollers
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-16 flex-col md:flex-row text-sm md:justify-between items-center">
            {productlist.map((Product, index) => (
              <Animalcard
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
        <div className="mt-10 p-4 md:h-[70vh] h-[120vh]  border-[1px] border-gray-500 rounded-lg">
          <div className="flex justify-between p-8">
            <div className="text-xl font-serif text-[#362526] font-bold">
              Our Blog
            </div>
            <div className="flex items-center gap-2 hover:underline ">
              VIEW All{" "}
              <span className="text-2xl ">
                <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between items-center">
            <div
              className="w-[350px] md:h-[230px] h-[330px] bg-cover bg-center  rounded-2xl  group relative"
              style={{ backgroundImage: `url(${dog2})` }}
            >
              <div className="absolute inset-0 hover:bg-black/50 rounded-2xl flex flex-col justify-end p-4">
                <div className="text-white text-lg font-semibold group-hover:text-xl ">
                  Babies in Winter: How to protect your newborn in cold weather
                </div>
                <div className="text-white text-sm font-extralight ">
                  45 Minutes ago in Experience
                </div>
              </div>
            </div>

            <div className="w-[350px] h-[230px] flex flex-col justify-between items-center">
              <div className="flex border-b-[1px] border-gray-400 pb-4 gap-4">
                <img src={blog} className="w-[120px] h-[100px] rounded-lg" />
                <div className="flex flex-col justify-between">
                  <div className="font-bold">
                    Omicron in kids: Here's what parents Should Know
                  </div>
                  <div className="text-gray-500">
                    45 minutes ago in Pet,food
                  </div>
                </div>
              </div>
              <div className="flex gap-4 ">
                <img src={blog2} className="w-[120px] h-[100px]  rounded-lg" />
                <div className="flex flex-col justify-between">
                  <div className="font-bold">
                    Fun Facts about January Babies
                  </div>
                  <div className="text-gray-500">10 days ago in pets ,food</div>
                </div>
              </div>
            </div>
            <div
              className="w-[350px] md:h-[230px] h-[330px] bg-cover bg-center  rounded-2xl  group relative"
              style={{ backgroundImage: `url(${dog1})` }}
            >
              <div className="absolute inset-0 hover:bg-black/50 rounded-2xl flex flex-col justify-end p-4">
                <div className="text-white text-lg font-semibold group-hover:text-xl ">
                  Babies in Winter: How to protect your newborn in cold weather
                </div>
                <div className="text-white text-sm font-extralight ">
                  45 Minutes ago in Experience
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
