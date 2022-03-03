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
  // const {projects} = projectsAll;

  return (
    <>
      <div className="project-counter-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="pCounterWrap">
              <div className="counter-up-wrap mb-5 mb-md-0">
                <span>
                  <FaJsfiddle />
                </span>
                <h3>
                  {" "}
                  <CountUp end={133} />{" "}
                </h3>
                <p> Web & Soft </p>
              </div>
              <div className="counter-up-wrap mb-5 mb-md-0">
                <span>
                  <FaSearchLocation />
                </span>
                <h3>
                  {" "}
                  <CountUp end={118} />{" "}
                </h3>
                <p>SEO </p>
              </div>
              <div className="counter-up-wrap mb-5 mb-md-0">
                <span>
                  <FaVideo />
                </span>
                <h3>
                  {" "}
                  <CountUp end={221} />{" "}
                </h3>
                <p>Motion Graphics </p>
              </div>
              <div className="counter-up-wrap">
                <span>
                  <FaBandcamp />
                </span>
                <h3>
                  {" "}
                  <CountUp end={53} />{" "}
                </h3>
                <p>Brand Design </p>
              </div>
            </div>
            {/* {
              projects.map(project=>{
                return (
                <div className="col-md-3 col-sm-6" key={project.id}>
                    <div className="counter-up-wrap">
                          <span><FaCloud/></span>
                          <h3> <CountUp end={project.count}/> </h3>
                          <p>{project.title}</p>
                    </div>
                </div>
                )
              })
            } */}
          </div>
        </div>
      </div>
    </>
  );
}
