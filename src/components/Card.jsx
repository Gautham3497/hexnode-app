import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LogoCarousel from "./Logo";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";

const cards = [
  {
    image: person1,
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    designation: "Technology Coordinator",
  },
  {
    image: person2,
    quote: "Do what you can, with what you have, where you are.",
    name: "Jane Smith",
    designation: "CEO, Kamellya Ltd",
  },
  {
    image: person3,
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    name: "Michael Johnson",
    designation: "CTO, ASD",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-center text-3xl md:text-4xl font-bold mb-8">
          Why should you choose Hexnode?
        </p>
        <div className="flex items-center justify-center space-x-4">
          {/* Left Arrow */}
          <button
            onClick={prevCard}
            className="text-3xl text-gray-600 hover:text-gray-800"
          >
            <FaChevronLeft />
          </button>

          {/* Card */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg max-w-[90%] md:max-w-3xl w-full p-6 md:p-10">
            {/* Profile Image */}
            <img
              src={cards[currentIndex].image}
              alt="Profile"
              className="w-full max-w-[120px] md:max-w-[180px] object-fill rounded-lg border-2 border-gray-300"
            />

            {/* Quote + Name */}
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p className="text-gray-700 text-lg md:text-xl">
                "{cards[currentIndex].quote}"
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                {cards[currentIndex].name}
              </h3>
              <p className="text-sm opacity-60">
                {cards[currentIndex].designation}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextCard}
            className="text-3xl text-gray-600 hover:text-gray-800"
          >
            <FaChevronRight />
          </button>
        </div>
        <LogoCarousel />
      </div>
    </div>
  );
};

export default Carousel;
