import React from "react";
import Hero from "../Components/Hero";
import Content from "../Components/Content"

function About(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Hello, my name is Alicia Vega. I'm currently attending the University of
          Arizona's Coding Bootcamp. I'm passionate about learning about code
          and want to continue enhancing my skills.
        </p>
        <p>
          I hope to one day combine my design skills and front-end knowledge to
          make cool-looking websites.
        </p>

        <p>
          Connect with me{" "}
          <a
            href="https://github.com/aliciavega731"
            target="_blank"
            rel="noopener noreferrer"
          >
            on Github.
          </a>
        </p>
      </Content>
    </div>
  );
}

export default About;