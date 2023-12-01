import React, { useState, useEffect } from "react";
import image from '../assets/ai.png'

const Header = () => {
  const [email, setEmail] = useState("");
  const handleChange = () => {
    setEmail(email);
  };
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentNumber < 1600) {
        setCurrentNumber(currentNumber + 1);
      }
    }, 0.0001);

    return () => clearInterval(intervalId);
  }, [currentNumber]);
  return (
    <div
      className="grid lg:grid-cols-2 bg-transparent"
      style={{ fontFamily: "manrope" }}
    >
      <div className="flex flex-col mx-8 w-2/3">
        <h1 className="text-[50px] font-extrabold leading-[75px] bg-gradient-to-r from-purple-500 via-transparent to-orange-500 bg-clip-text text-transparent">
          Be prepared for the Mountains and Beyond
        </h1>
        <p className="text-[#81AFDD] text-lg lg:text-xl">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <form className="top-4 relative">
          <input
            type="email"
            value={email}
            placeholder="Your Email Address"
            onChange={handleChange}
            className="h-9 w-1/2 lg:w-68 outline-none rounded-tl-[5px] rounded-bl-[5px] border-white text-[#81AFDD] bg-[#052D56] px-4 py-6"
          />
          <input
            type="Submit"
            value="Get Started"
            className="border-0 relative bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 w-32 rounded-tr-[5px] rounded-br-[5px] text-[#fff] top-0 rounded-0 h-12"
          />
        </form>

        <p className="top-6 lg:w-[200%] relative text-white text-md"><span className="text-2xl top-1 relative text-[#81AFDD]">+{currentNumber}</span> people requested access a visit in last 24 hours</p>
      </div>
      <img src={image} alt="/" className="xl:-top-16 relative" />
    </div>
  );
};

export default Header;
