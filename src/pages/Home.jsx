import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import SignupSection from "../components/SignupSection";

import Footer from "../components/Footer";
import SupportPlatform from "../components/SupportPlatform";
import OfficerSection from "../components/OfficerSection";
import Tabs from "../components/Tabs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Tabs />
      <OfficerSection />
      <Card />
      <SupportPlatform />
      <SignupSection />
      <Footer />
    </>
  );
};

export default Home;
