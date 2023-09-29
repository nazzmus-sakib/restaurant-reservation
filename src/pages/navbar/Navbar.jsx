import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { FaInstagram, FaTripadvisor } from "react-icons/fa";
const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const handleMenu = () => {
    setIsOpen(true);
  };
  console.log(isOpen);
  return (
    <div
      className={`${
        isScrolling
          ? " fixed-navbar z-30  opacity-100 fixed text-white w-full pt-2 pb-2"
          : "z-30 opacity-100 fixed   text-white w-full  pt-8"
      } `}
    >
      <div className=" px-8 md:px-0  md:gap-0 flex justify-between items-center w-full md:max-w-6xl mx-auto">
        <div>
          <img
            src={logo}
            alt="logo"
            className="md:h-[70] md:w-[150px] h-[60px] w-[130px]"
          />
        </div>
        <div className="hidden  md:flex justify-center items-center  gap-8 font-semibold text-base">
          <a>Home</a>
          <a>About</a>
          <a>Our Menus</a>
          <a className="text-[#CA9C5E]">Reservation</a>
          <a>Contact</a>
        </div>
        {/* responsive menu for small device */}
        <div
          className={`  ${
            isOpen ? "absolute right-0 top-0 smooth" : " hidden -right-80 top-0"
          } `}
        >
          <div className="md:hidden relative  font-semibold text-base bg-[#0b1517] flex flex-col gap-5 min-h-screen py-20 px-10">
            <p
              className="absolute right-10 top-10 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <RxCross1 size={24}></RxCross1>{" "}
            </p>
            <a className="block">Home</a>
            <a className="block">About</a>
            <a className="block">Our Menus</a>
            <a className="text-[#CA9C5E] block">Reservation</a>
            <a className="block">Contact</a>
            <button className="mt-20 bg-transparent border border-white font-bold px-20 py-4">
              Reservation
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 ">
          <a href="">
            <FaFacebook size={24}></FaFacebook>
          </a>
          <a href="">
            <FaInstagram size={24}></FaInstagram>
          </a>
          <a href="">
            <FaTripadvisor size={24}></FaTripadvisor>
          </a>
          <p className="md:hidden block cursor-pointer" onClick={handleMenu}>
            <HiMenuAlt4 size={24}></HiMenuAlt4>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
