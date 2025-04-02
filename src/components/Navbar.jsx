import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-10 top-0 left-0 w-full py-4 px-5 md:px-10 flex items-center justify-between hover:bg-white hover:text-black transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-[#020a1a] text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <Link to="/" className="text-xl md:text-2xl font-bold">
          hexnode
        </Link>

        <Link
          to="/freeTrail"
          className={`text-sm md:text-base rounded-md px-4 md:px-5 py-2 md:py-4 ${
            isScrolled ? "bg-red-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          14 DAY FREE TRIAL
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
