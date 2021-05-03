import React from "react";
import Carousel from "../Components/Carousel/Carousel"

// My files
import Hero from "../Components/Hero";

function Home(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />
      <Carousel />
    </div>
  );
}

export default Home;
