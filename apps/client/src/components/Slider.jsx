import React from "react"; // react
import Carousel from "react-bootstrap/Carousel"; // slider for home page

const Slider = () => {
  // rendering ui
  return (
    <Carousel>
      {/* slider images */}
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 sliderimage"
          src="https://images.unsplash.com/photo-1489110804417-276c3f517515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="First slide"
          style={{objectFit: 'cover'}}
        />
        <Carousel.Caption>
          <h3>Tech Bar</h3>
          <p>Best Tech Stuff For Your Budget</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 sliderimage"
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Second slide"
          style={{objectFit: 'cover'}}
        />
        <Carousel.Caption>
          <h3>Tech Bar</h3>
          <p>Best Tech Stuff For Your Budget</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderimage"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
          alt="Third slide"
          style={{objectFit: 'cover'}}
        />
        <Carousel.Caption>
          <h3>Tech Bar</h3>
          <p>Best Tech Stuff For Your Budget</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
