import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto py-9 text-sm opacity-40 flex flex-wrap justify-between items-center max-w-screen-xl text-center px-4">
      <div className="w-full md:w-auto mb-2 md:mb-0">
        <p>{`Terms of Use  -  Privacy  -  Cookies`}</p>
      </div>
      <div className="w-full md:w-auto">
        <p>
          Copyright © {new Date().getFullYear()} Mitsogo Inc. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
