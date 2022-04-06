import React from "react";
import {
  FaPlus,
  FaPeopleArrows,
  FaRegSun,
  FaLightbulb,
  FaHandsHelping,
  FaPaperPlane,
} from "react-icons/fa";

import style from "../styles/workingProcess.module.css";
import CountUp from "react-countup";

export default function WorkingProcess() {
  return (
    <>
      <div className="workingProcessArea text-center text-lg-start mb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-title text-center">
                <h5> Working Process</h5>
                <h3>
                The Way We Work For Clients 
                </h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mt-50">
            <div
              className="col-lg-3 col-sm-6 mb-30 wow fadeIn"
              data-wow-duration="1s"
            >
              <div className={style.workingProgressStepsWrap}>
                <div className={style.workingProgressItems}>
                  <span className={style.wpIcon}>
                    <FaRegSun />
                  </span>
                  <h3>Choose Service</h3>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mb-30  wow fadeIn"
              data-wow-duration="3s"
            >
              <div className={style.workingProgressStepsWrap}>
                <div className={style.workingProgressItems}>
                  <span className={style.wpIcon}>
                    <FaPeopleArrows />
                  </span>
                  <h3>Request Meeting</h3>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mb-30  wow fadeIn"
              data-wow-duration="5s"
            >
              <div className={style.workingProgressStepsWrap}>
                <div className={style.workingProgressItems}>
                  <span className={style.wpIcon}>
                    <FaLightbulb />
                  </span>
                  <h3>Custom Plan</h3>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mb-30  wow fadeIn"
              data-wow-duration="7s"
            >
              <div className={style.workingProgressStepsWrap}>
                <div className={style.workingProgressItems}>
                  <span className={style.wpIcon}>
                    <FaHandsHelping />
                  </span>
                  <h3>Make Final Work</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
