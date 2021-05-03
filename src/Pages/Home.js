import React from "react";

// My files
import Hero from "../Components/Hero";

function Home(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />
    </div>
  );
}

export default Home;
