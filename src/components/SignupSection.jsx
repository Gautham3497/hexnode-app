import React from "react";
import { Link } from "react-router";

const SignupSection = () => {
  return (
    <div className="bg-black p-10 md:p-20">
      <div className="max-w-screen-xl flex flex-col items-center gap-6 md:gap-8 text-center">
        <p className="text-2xl md:text-4xl text-white font-semibold">
          Sign up and try Hexnode free for 14 days!
        </p>
        <div className="flex flex-col justify-center md:flex-row gap-3 w-full max-w-md md:max-w-none">
          <input
            className="bg-white pl-3 pr-40 py-3 md:py-4 outline-none rounded-sm w-full md:w-auto"
            type="email"
            name="signup"
            id="signup-freeTrail"
            placeholder="Your Work Email"
            required
          />
          <button
            onClick={() => alert("Email submitted")}
            className="text-white bg-red-600 py-3 md:py-4 px-6 md:px-8 rounded-sm cursor-pointer w-full md:w-auto"
            type="button"
          >
            GET STARTED
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-1 text-white text-sm md:text-base">
          <p>No credit cards required.</p>
          <Link to="/scheduleDemo" className="text-red-700 md:ml-1">
            {`Request a demo >`}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
