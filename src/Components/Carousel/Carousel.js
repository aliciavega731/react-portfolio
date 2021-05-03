import React from "react";
import { Carousel } from "react-bootstrap";

class carousel extends React.Component() {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ "/The-Quick-Bite.gif" }
            alt="The Quick Bite"
          />
          <Carousel.Caption>
            <h3>The Quick Bite</h3>
            <p>The first group project of the Coding Bootcamp.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Back 2 Work"
          />

          <Carousel.Caption>
            <h3>Back 2 Work</h3>
            <p>The second group project of the Coding Bootcamp</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Password Generator"
          />

          <Carousel.Caption>
            <h3>Password Generator</h3>
            <p>One of the challenges assigned.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default carousel;
