import { p } from "framer-motion/client";
import React from "react";

const SupportPlatform = () => {
  const platform = [
    "Andriod",
    "Windows",
    "IOS",
    "andriodtv",
    "APPLE tv",
    "Fire",
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10 md:p-20">
      <p className="text-3xl text-center font-bold mb-10">
        Platforms supported
      </p>
      <div className="flex flex-wrap justify-between gap-4">
        {platform.map((item, index) => (
          <p
            key={index}
            className="px-5 py-3 border rounded-sm bg-gray-100 transition-transform hover:-translate-y-2"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SupportPlatform;
