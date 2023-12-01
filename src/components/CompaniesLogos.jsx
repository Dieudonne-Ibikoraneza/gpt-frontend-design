import React from "react";
import google from "../assets/google.png";
import atlassia from "../assets/atlassian.png";
import slack from "../assets/slack.png";
import shopify from "../assets/shopify.png";
import dropbox from "../assets/dropbox.png";

const CompaniesLogos = () => {
  const goToGoogle = () => {
    window.location.href = 'https://www.google.com';
  }
  return (
    <div className="text-white lg:top-12 xl:-top-12 relative inline-flex gap-[46.483px] lg:translate-x-80 items-start transform sm:translate-x-4 md:translate-x-28 w-auto h-auto bg-transparent">
      <img src={google} alt="/" />
      <img src={slack} alt="/" />
      <img src={atlassia} alt="/" />
      <img src={dropbox} alt="/" />
      <img src={shopify} alt="/" />
    </div>
  );
};

export default CompaniesLogos;
