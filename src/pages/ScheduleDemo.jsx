import { useState } from "react";
import { Link } from "react-router";
import system from "../assets/img2.jpg";

export default function ScheduleDemo() {
  const [step, setStep] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showLanguages, setShowLanguages] = useState(false);

  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const timeSlots = ["05:30 AM", "06:30 AM", "07:30 AM", "08:30 AM"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    devices: "",
  });
  const [error, setError] = useState("");
  const languages = {
    "North America": ["English", "French"],
    Europe: ["English", "Spanish", "French", "German"],
    "Latin America": ["Spanish", "Portuguese"],
    "Asia Pacific": ["Chinese", "Japanese", "Korean", "Hindi"],
  };

  const handleNext = () => {
    if (!selectedTime || !selectedDate) return;
    setStep(2);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      setError("Please enter your work email!");
      return;
    }
    setError("");
    alert("Demo Scheduled!");
  };

  return (
    <div className="max-w-screen-xl mx-auto p-10">
      {/* Logo and Language section */}
      <div className="flex justify-between items-center ">
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

      {/* Demo Scheduling section */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 bg-white mt-44">
        <div className="bg-white shadow-lg rounded-lg p-12 flex flex-col md:flex-row w-full lg:w-2/3">
          {/* Left Section */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Schedule demo</h2>
            <p className="text-gray-600 text-sm mb-4">
              Pick a time to talk to one of our experts about your
              organization’s unique needs and understand Hexnode.
            </p>
            <h3 className="text-sm font-semibold">Date</h3>
            <p className="font-bold text-md">
              {selectedDate || "Select a date"}
            </p>
            <h3 className="text-sm font-semibold mt-4">Time Zone</h3>
            <p className="font-bold">(UTC+05:30) Mumbai, Kolkata, New Delhi</p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 p-6">
            {step === 1 ? (
              <>
                <h3 className="text-sm font-semibold">
                  Select a date and time
                </h3>
                <input
                  type="date"
                  className="p-2 border rounded-md w-full mb-4"
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <div className="grid grid-cols-2 gap-2 my-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-full p-2 border rounded-md text-sm ${
                        selectedTime === time
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className={`w-full p-3 mt-4 text-white rounded-md ${
                    selectedTime && selectedDate
                      ? "bg-blue-600"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!selectedTime || !selectedDate}
                >
                  Next
                </button>
              </>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Enter Your Details</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 border rounded-md"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Company email"
                  className={`p-2 border rounded-md ${
                    error ? "border-red-500" : ""
                  }`}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-3 rounded-md cursor-pointer"
                >
                  Schedule Meeting
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-center ">
          <p className="text-xl font-semibold mb-4">
            What does our demo cover?
          </p>
          <ul className="space-y-5 *:text-lg">
            <li>
              A customized tour of Hexnode UEM, specific to your use case.
            </li>
            <li>An opportunity to get specific questions answered.</li>
            <li>Insight into the help and support you will receive.</li>
          </ul>
          <img
            className="size-60 object-cover mt-4"
            src={system}
            alt="system"
          />
        </div>
      </div>
    </div>
  );
}
