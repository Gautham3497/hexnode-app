import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";

const tabs = [
  { id: "single", label: "Single App Kiosk" },
  { id: "multi", label: "Multi-App Kiosk" },
  { id: "web", label: "Web-based Kiosk" },
  { id: "digital", label: "Digital Signages" },
  { id: "asam", label: "ASAM Kiosk" },
];

const content = {
  single: {
    title: "Powerful Single-App Kiosk solutions for enhanced control",
    points: [
      "Provision the devices to run one specialized application, with limited functionalities.",
      "Customize the device settings to cater to a specific use-case each time",
      "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
      "Empower your administrators with full control over the kiosk devices.",
    ],
    img: image1,
  },
  multi: {
    title: "Elevate efficiency with Multi-App Kiosk",
    points: [
      "Limit device access to approved apps, ensuring focus and productivity.",
      "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
      "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
      "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
    ],
    img: image2,
  },
  web: {
    title: "Explore the new way to manage web apps and websites",
    points: [
      "Let users access essential and approved web apps, website and files only.",
      "Make the best use of website kiosk with Hexnode's advanced settings.",
      "Tailor your experience to match your unique use case.",
      "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
    ],
    img: image3,
  },
  digital: {
    title: "Capture attention with Digital Signage Kiosks",
    points: [
      "Transform your devices into captivating digital signage kiosks that grab attention.",
      "Engage your audience with vibrant images and seamless video streaming.",
      "Customize media files with trimming, muting, and background music.",
      "Advertise and show off your brand aesthetics to attract customers in different ways.",
      "Take control with Hexnode to reestablish your brand's presence.",
    ],
    img: image4,
  },
  asam: {
    title: "Unlock the power of Autonomous Single App Mode (ASAM)",
    points: [
      "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
      "Create focused, efficient and secure digital environments to match your requirements.",
      "Configure ASAM effortlessly and elevate your user experience like never before.",
    ],
    img: image5,
  },
};

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("single");
  const [isPending, startTransition] = useTransition();

  return (
    <div className="w-full max-w-screen-xl mx-auto py-16 px-4 md:py-32">
      <p className="text-2xl md:text-3xl text-center mb-6 md:mb-10">
        Specific kiosk modes for unique use cases
      </p>
      <div>
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center md:justify-between border-gray-400 border-[0.5px] rounded-md overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => startTransition(() => setActiveTab(tab.id))}
              className={`px-4 py-3 md:px-7 md:py-5 text-sm md:text-xl font-medium transition-all duration-300 ease-in-out cursor-pointer 
                ${
                  activeTab === tab.id
                    ? "bg-black text-white border rounded-md"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section with Smooth Transition */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row px-4 md:px-6 py-10 md:py-16 rounded-md bg-gray-100 mt-5"
        >
          {/* Left Side Content */}
          <div className="w-full md:w-3/4 mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              {content[activeTab]?.title}
            </h2>
            <ul className="space-y-3 md:space-y-5 *:text-base md:*:text-lg *:font-normal">
              {content[activeTab]?.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Image with Smooth Transition */}
          <motion.div
            key={content[activeTab]?.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/4"
          >
            <img
              src={content[activeTab]?.img}
              alt="Tab Image"
              className="w-full rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
