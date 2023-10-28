import React from "react";
import "./homepage.scss";

import HeroSection from "../../components/HeroSection/HeroSection";

import background from "/assets/northman.jpg";

const HomePage = () => {
  return (
    <div className="homepage__main-wrapper">
      <HeroSection />
    </div>
  );
};

export default HomePage;
