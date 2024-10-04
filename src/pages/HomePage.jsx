import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import IndustrySection from "../components/IndustrySection";
import InsightsSection from "../components/InsightsSection";
import LetsWorkSection from "../components/LetsWorkSection";
import OurCaseSection from "../components/OurCaseSection";

function HomePage() {
  return (
    <>
      <div id="Home">
        <Header />
      </div>
      <div id="About">
        <InsightsSection />
      </div>
      <div id="Service">
        <IndustrySection />
      </div>
      <div id="Contact">
        <LetsWorkSection />
      </div>
    </>
  );
}

export default HomePage;
