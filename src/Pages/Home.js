import React from "react";

// My files
import Hero from "../Components/Hero";

function Home(props) {
  return(
    <Hero title={props.title} subTitle={props.subTitle}/>
  );
}

export default Home;