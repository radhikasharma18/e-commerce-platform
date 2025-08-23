import React from "react";
import LOGO from "../assets/logo.png.png";
import { IoSearch } from "react-icons/io5";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaGripLines } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState(false);

  const navigate = useNavigate();
  const handleViewCart = () => {
    navigate("/cart");
  };
  const handleViewAll = () => {
    navigate("/");
  };
  const handleViewWish = () => {
    navigate("/wishlist");
  };
  const handleViewLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className=" ">
        <div className="bg-gray-100 flex items-center justify-between w-[100%] md:h-[50px] h-[80px] ">
          <div className="flex md:items-center lg:w-[50%] w-[100%] justify-start md:gap-16 gap-1 h-[100%] md:px-8 px-2">
            <div className="bg-white flex justify-center items-center md:w-[200px] md:h-[100%] border-[1px] border-gray-200 ">
              <img src={LOGO} className="" />
            </div>
            <div className="md:flex relative w-[250px] hidden">
              <div className="md:block ">
                <input
                  placeholder="Search anything..."
                  className="rounded-full w-[250px] p-2 text-xs"
                />
              </div>
              <div
                className="absolute right-0 bg-[#362526]
          text-orange-400 size-8 md:flex justify-center items-center rounded-full hidden"
              >
                {" "}
                <IoSearch />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 md:px-0 px-2">
            <div className="text-2xl">
              <FaPhone />
            </div>
            <div>
              <div className="text-xs text-gray-700">help line (24/7)</div>
              <div className="md:font-bold font-semibold text-sm">
                +918619818765
              </div>
            </div>
          </div>
          <div className="lg:flex text-[#362526] justify-between gap-6 text-xl hidden">
            <button onClick={handleViewAll} className="hover:scale-125">
              <MdOutlineCurrencyExchange />
            </button>
            <button onClick={handleViewWish} className="hover:scale-125">
              <IoMdHeart />
            </button>
            <button onClick={handleViewLogin} className="hover:scale-125">
              <IoPerson />
            </button>
            <button onClick={handleViewCart} className="hover:scale-125">
              <FaShoppingBag />
            </button>
          </div>
        </div>
        <div className="md:px-8 px-2 flex justify-between w-[100%] h-[50px] bg-[#e9e7e8] ">
          <div className="flex  justify-between gap-2">
            <div className="flex items-center bg-gray-100 justify-center w-[200px] h-[100%] border-[1px] border-gray-200 hover:scale-105 ">
              <div>
                <button onClick={() => setCategories(!categories)}>
                  CATEGORIES
                </button>
              </div>{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </div>
            <div className="lg:flex gap-6 hidden">
              <NavLink to="/" className="flex items-center hover:scale-105">
                <div>HOME</div>{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </NavLink>
              <div className="flex items-center hover:scale-105">
                <div>PAGES</div>{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
              <NavLink
                to="/product"
                className="flex items-center hover:scale-105"
              >
                <div>PRODUCTS</div>{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </NavLink>
              <NavLink
                to="/contact"
                className="flex items-center hover:scale-105"
              >
                <div>CONTACT</div>{" "}
              </NavLink>
            </div>
          </div>
          <div className="text-orange-400 bg-[#362526] w-[50px] text-2xl flex justify-center items-center">
            {" "}
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaGripLines />
            </button>
          </div>
        </div>
      </div>
      <div className={`${categories ? "flex" : "hidden"}`}>
        <div className=" absolute h-[30vh] w-[16vw]  bg-white mx-8 shadow-2xl p-4 ">
          <div>
            <NavLink
              to="/petfood"
              className="border-b-[1px] border-gray-400 font-serif hover:text-lg cursor-pointer"
              onClick={() => setCategories(false)}
            >
              Pet Food
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/eletronic"
              className="border-b-[1px] border-gray-400 font-serif hover:text-lg cursor-pointer"
              onClick={() => setCategories(false)}
            >
              Electronic itmes
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/furniture"
              className="border-b-[1px] border-gray-400 font-serif hover:text-lg cursor-pointer"
              onClick={() => setCategories(false)}
            >
              Furniture
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/household"
              className="border-b-[1px] border-gray-400 font-serif hover:text-lg cursor-pointer"
              onClick={() => setCategories(false)}
            >
              Household Items
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/food"
              className="border-b-[1px] border-gray-400 font-serif hover:text-lg cursor-pointer"
              onClick={() => setCategories(false)}
            >
              Food
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/toy"
              className=" font-serif hover:text-lg cursor-pointer"
              onClick={() => setCategories(false)}
            >
              Toy
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`${menuOpen ? "flex flex-col" : "hidden"}
       "flex gap-3 lg:hidden  bg-gray-100 "`}
      >
        <NavLink
          to="/"
          className="flex  items-center border-b-[1px] border-gray-400 px-16"
        >
          <div>HOME</div>{" "}
          <span>
            <IoIosArrowDown />
          </span>
        </NavLink>
        <NavLink
          to="/pages"
          className="flex items-center border-b-[1px] border-gray-400 px-16"
        >
          <div>PAGES</div>{" "}
          <span>
            <IoIosArrowDown />
          </span>
        </NavLink>
        <NavLink
          to="/product"
          className="flex items-center border-b-[1px] border-gray-400 px-16"
        >
          <div>PRODUCTS</div>{" "}
          <span>
            <IoIosArrowDown />
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className="flex items-center border-b-[1px] border-gray-400 px-16"
        >
          <div>CONTACT</div>{" "}
        </NavLink>
        <NavLink
          to="/exchange"
          className="flex items-center border-b-[1px] border-gray-400 px-16"
        >
          <div>EXCHANGE</div>{" "}
        </NavLink>
        <NavLink
          to="/cart"
          className="flex items-center border-b-[1px] border-gray-400 px-16"
        >
          <div>CART</div>{" "}
        </NavLink>
        <NavLink
          to="/wishlist"
          className="flex items-center border-b-[1px] border-gray-400 px-16"
        >
          <div>WISHLIST</div>{" "}
        </NavLink>
        <NavLink
          to="/login"
          className="flex items-center border-b-[1px] border-gray-400 px-16"
        >
          <div>LOGIN</div>{" "}
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
