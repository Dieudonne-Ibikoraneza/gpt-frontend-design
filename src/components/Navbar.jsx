import React from "react";
import gpt3 from "../assets/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5"

const Navbar = () => {
  return (
    <div
      style={{ fontFamily: "manrope" }}
      className="max-w-full h-12 bg-transparent flex flex-row text-white py-1 mx-8 my-7 "
    >
      <img src={gpt3} className="w-[62.557px] h-[16.016px] top-1 relative" alt="/" />
      <ul className="hidden flex-row px-20 relative -top-1 w-[500%] lg:flex ">
        <li className="px-9 text-md">Home</li>
        <li className="px-5 text-md">What is GPT?</li>
        <li className="px-9 text-md">Open AI</li>
        <li className="px-4 text-md">Case Studies</li>
        <li className="px-9 text-md">Library</li>
      </ul>
      <CiMenuBurger
        className="lg:invisible float-right right-8 top-7 absolute"
        size={25}
      />
      <IoSunnyOutline className="lg:w-[130px] lg:h-[130px] lg:-top-[55px] lg:float-right float-right absolute right-24 w-[25px] top-7 h-[25px] lg:right-[100px] lg:relative" />
      <div className="invisible lg:visible">
        <span className="-top-1  float-right right-28 relative">Sign in</span>
        <button
          type="button"
          className="border-0 float-right relative bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 w-20 -top-10 rounded-md h-12"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
