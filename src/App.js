import React from "react";
import CovidState from "./context/CovidState";
import Navbar from "./components/layout/Navbar";
import TopCards from "./components/TopCards/TopCards";
import MidCards from "./components/MidCards/MidCards";

function App() {
  return (
    <CovidState>
      <Navbar />
      <TopCards />
      <MidCards />
    </CovidState>
  );
}

export default App;
