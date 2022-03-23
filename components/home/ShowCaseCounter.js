import { useState } from "react";

import {
  FaChalkboard,
  FaSearchLocation,
  FaVideo,
  FaBandcamp,
  FaJsfiddle
} from "react-icons/fa";

import CountUp from "react-countup";

export default function Home({ projectsAll }) {


  return (
    <>
      <div className="project-counter-area">
        <div className="container">
          <div className="row justify-content-center">
          <div className="pCounterWrap justify-content-center justify-content-md-between">
                <div className="counter-up-wrap mb-3">
                  {/* <span>
                    <FaJsfiddle />
                  </span> */}
                  <h3>
                    {" "}
                    <CountUp end={133} />{" "}
                  </h3>
                  <p> Web & Soft </p>
                </div>
                <div className="counter-up-wrap mb-3 ">
                  {/* <span>
                    <FaSearchLocation />
                  </span> */}
                  <h3>
                    {" "}
                    <CountUp end={118} />{" "}
                  </h3>
                  <p>Digital Marketing </p>
                </div>
                <div className="counter-up-wrap mb-3">
                  {/* <span>
                    <FaVideo />
                  </span> */}
                  <h3>
                    {" "}
                    <CountUp end={221} />{" "}
                  </h3>
                  <p>Motion Graphics </p>
                </div>
                <div className="counter-up-wrap">
                  {/* <span>
                    <FaBandcamp />
                  </span> */}
                  <h3>
                    {" "}
                    <CountUp end={53} />{" "}
                  </h3>
                  <p>Brand Design </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
