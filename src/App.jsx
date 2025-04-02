import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import FreeTrail from "./pages/FreeTrail";
import ScheduleDemo from "./pages/ScheduleDemo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freeTrail" element={<FreeTrail />} />
        <Route path="/scheduleDemo" element={<ScheduleDemo />} />
      </Routes>
    </>
  );
};

export default App;
