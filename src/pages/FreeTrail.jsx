import { useState } from "react";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import { Link } from "react-router";

export default function FreeTrialSection() {
  const [email, setEmail] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const languages = {
    "North America": ["English", "French"],
    Europe: ["English", "Spanish", "French", "German"],
    "Latin America": ["Spanish", "Portuguese"],
    "Asia Pacific": ["Chinese", "Japanese", "Korean", "Hindi"],
  };

  const testimonials = [
    {
      text: "It seemed to be in-line with everything we were looking at so wasn't a bargain, I was the most impressed with what Hexnode had offered compared to the others.",
      name: "Chris Robinson",
      designation: "Executive Account Manager, NCS",
      image: person1,
    },
    {
      text: "Hexnode made it incredibly easy to manage our devices and maintain security. The support team is also amazing!",
      name: "Sarah Johnson",
      designation: "IT Manager, TechCorp",
      image: person2,
    },
    {
      text: "We've tried other solutions, but none come close to the ease of use and flexibility that Hexnode provides.",
      name: "Michael Lee",
      designation: "Operations Director, Global Inc.",
      image: person3,
    },
    {
      text: "We've tried other solutions, but none come close to the ease of use and flexibility that Hexnode provides.",
      name: "Michael Lee",
      designation: "Operations Director, Global Inc.",
      image: person4,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen w-full">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 px-6 sm:px-12 lg:px-28 py-10 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
              hexnode
            </Link>

            <div className="relative">
              <button
                className="border p-2 rounded"
                onClick={() => setShowLanguages(!showLanguages)}
              >
                {selectedLanguage} ▼
              </button>
              {showLanguages && (
                <div className="absolute bg-white border mt-2 p-2 w-48 shadow-lg">
                  {Object.entries(languages).map(([region, langs]) => (
                    <div key={region}>
                      <p className="font-semibold mt-2">{region}</p>
                      {langs.map((lang) => (
                        <button
                          key={lang}
                          className="block w-full text-left p-1 hover:bg-gray-200"
                          onClick={() => {
                            setSelectedLanguage(lang);
                            setShowLanguages(false);
                          }}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-16 lg:mt-56 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Try Hexnode free for 14 days
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <input
                className="bg-white border pl-3 pr-6 py-3 sm:py-4 w-full sm:w-auto flex-grow outline-none rounded-sm"
                type="email"
                name="signup"
                id="signup-freeTrail"
                placeholder="Your Work Email"
                required
              />
              <button
                onClick={() => alert("Email submitted")}
                className="text-white bg-red-600 py-3 sm:py-4 px-6 sm:px-12 rounded-sm cursor-pointer w-full sm:w-auto"
                type="button"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
          <p>🇺🇸 +1-833-HEXNODE (439-6633) (Toll Free)</p>
          <p>🇬🇧 +44-800-3689920 (Toll Free)</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-8 sm:p-12 flex flex-col items-center justify-center text-center">
        <p className="italic text-sm sm:text-base">
          {testimonials[currentTestimonial].text}
        </p>
        <img
          src={testimonials[currentTestimonial].image}
          alt={testimonials[currentTestimonial].name}
          className="size-20 sm:size-28 rounded-full mt-4"
        />
        <h3 className="font-semibold mt-2 text-sm sm:text-base">
          {testimonials[currentTestimonial].name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          {testimonials[currentTestimonial].designation}
        </p>
        {/* Dots indicator */}
        <div className="flex mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-4 sm:w-6 rounded-full cursor-pointer ${
                currentTestimonial === index ? "bg-gray-700" : "bg-gray-400"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
