import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Meta from "./Meta";

// logos

// import reactJS from "../public/webLogo/django.png";

const reactJS = "./webLogo/ReactJS_logo.png";
const nextJS = "./webLogo/Nextjs.png";
const nodeJS = "./webLogo/nodejs.png";
const djaongo = "./webLogo/django.png";
const expreeejs = "./webLogo/Express.png";
const mongodb = "./webLogo/MongoDB.png";
const larabel = "./webLogo/Laravel.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function LogoSlider() {
  return (
    <div style={{ marginTop: "5vh" }} className="container">
      <Meta title="" />
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transition={1500}
        loop={true}
        customTransition="1300ms ease-in-out"
        // duration={300}
      >
        {[reactJS, nextJS, djaongo, nodeJS, expreeejs, mongodb, larabel].map(
          (item, index) => (
            <div key={index} className="logoLiderDiv">
              {/* {item} */}
              <div
                style={{
                  height: "100%",
                  objectFit: "cover",
                  backgroundImage: `url(${item})`,
                  width: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="img"
              >
                {/* <img src={item} alt="" /> */}
              </div>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}

export default LogoSlider;
