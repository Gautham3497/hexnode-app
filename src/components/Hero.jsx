import React from "react";
import heroImage from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <>
      <div className="bg-[#020a1a] pt-20 pb-12 lg:pt-60 lg:pb-24">
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-screen-xl mx-auto px-4">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-white text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight">
              Turn your device into
              <br /> kiosk in a few minutes
              <br /> with Hexnode UEM
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6 items-center justify-center md:justify-start lg:items-start">
              <input
                className="bg-white px-4 md:pr-44 py-4 outline-none rounded-sm w-full sm:w-auto"
                type="email"
                name="signup"
                id="signup-freeTrail"
                placeholder="Your Work Email"
                required
              />
              <button
                onClick={() => alert("Email submitted")}
                className="text-white bg-red-600 py-4 px-6 rounded-sm cursor-pointer w-full sm:w-auto"
                type="button"
              >
                GET STARTED NOW
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src={heroImage}
              alt="hero-img"
              className="w-full max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#1a1c2b] py-8 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-10 text-center md:text-left">
          <div className="flex-1">
            <p className="text-white text-2xl font-semibold">IDC</p>
            <p className="text-gray-200 opacity-50 text-sm sm:text-base">
              Hexnode is listed as a leader and a major
              <br className="hidden sm:block" /> player in IDC MarketScape UEM
              Vendors
              <br className="hidden sm:block" /> Assessment reports 2024.
            </p>
          </div>
          <div className="hidden md:block border-l-2 border-gray-400 opacity-40 h-20"></div>
          <div className="flex-1">
            <p className="text-white text-2xl font-semibold">Gartner</p>
            <p className="text-gray-200 opacity-50 text-sm sm:text-base">
              Hexnode was recognized in the 2025
              <br className="hidden sm:block" /> Gartner Market Guide for
              Unified Endpoint
              <br className="hidden sm:block" /> Management Tools.
            </p>
          </div>
          <div className="hidden md:block border-l-2 border-gray-400 opacity-40 h-20"></div>
          <div className="flex-1">
            <p className="text-white text-2xl font-semibold">FORRESTER</p>
            <p className="text-gray-200 opacity-50 text-sm sm:text-base">
              Forrester includes Hexnode as a Notable
              <br className="hidden sm:block" /> vendor in The Unified Endpoint
              <br className="hidden sm:block" /> Management Landscape, Q3 2023.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
