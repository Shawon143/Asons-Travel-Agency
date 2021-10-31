import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import From from "../Form/From";
import Services from "../Services/Services";
import Whychoose from "../WhyChoose/Whychoose";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Whychoose></Whychoose>
      <From></From>
    </div>
  );
};

export default Homepage;
