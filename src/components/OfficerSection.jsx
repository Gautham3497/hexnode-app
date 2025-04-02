import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";

const accordionData = [
  {
    id: 1,
    title: "Effortless kiosk deployment & management",
    content:
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    img: image1,
  },
  {
    id: 2,
    title: "Customized interface for brand visibility",
    content:
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    img: image2,
  },
  {
    id: 3,
    title: "What more can you do with Hexnode kiosk?",
    content:
      "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    img: image3,
  },
  {
    id: 4,
    title: "Secure and update your app ecosystem",
    content:
      "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    img: image4,
  },
  {
    id: 5,
    title: "Provide an easy-to-use interface for end-users",
    content:
      "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    img: image5,
  },
];

export default function OfficerSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(accordionData[0].img);

  const toggleAccordion = (index, img) => {
    setActiveIndex(activeIndex === index ? null : index);
    setCurrentImage(img);
  };

  return (
    <div className="py-10 px-4 md:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-5">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
            What additional possibilities does the
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Kiosk mode offer?
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-10 p-4">
          {/* Left Image Section */}
          <div className="md:w-1/2 flex justify-center bg-white shadow-lg p-4 rounded-lg bg-cover">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt="Dynamic"
              className="w-full h-auto rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Right Accordion Section */}
          <div className="md:w-1/2 w-full">
            {accordionData.map(({ id, title, content, img }) => (
              <div key={id} className="mb-2 cursor-pointer">
                <button
                  onClick={() => toggleAccordion(id, img)}
                  className="w-full flex justify-between items-center gap-4 text-black px-4 py-4 md:py-6 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition duration-200"
                >
                  {title}
                  <FaChevronDown
                    className={`transition-transform ${
                      activeIndex === id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeIndex === id && (
                  <motion.div
                    className="p-4 bg-white shadow-md rounded-lg mt-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {content}
                    <br />
                    <br />
                    <Link to="/freeTrail" className="text-red-600">
                      {`TRY FOR FREE >`}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
