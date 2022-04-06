import { FaPlay } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import Image from "next/image";

import MyVerticallyCentredModal from "../components/MyVerticallyCentredModal";


export default function ExpTeam() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="expTeam-section ">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 col-xl-6 wow fadeIn"
              data-wow-duration="2s"
            >
              <div className="expTeam-left ">
                <Image
                  className="parent-pic"
                  src="/experienceTeam/pic-1.jpg"
                  alt="experienceTeam"
                  width={442}
                  height={506}
                />
                <div className="child d-none d-xl-block">
                  <Image
                    src="/experienceTeam/pic-2.jpg"
                    alt="experienceTeam"
                    width={228}
                    height={194}
                  />
                </div>
                <img
                  className="exp-dots d-none d-lg-block"
                  src="./experienceTeam/dot_shapes.png"
                  alt=""
                />

                <div className="exp-left-text ">
                  <div className="exp-left-wrap d-flex align-items-center">
                    <h3>
                      {" "}
                      03 <span>+</span>
                    </h3>
                    <h4>Years of experience</h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-xl-6  wow fadeIn"
              data-wow-duration="2s"
            >
              <div className="expTeam-right">
                <div className="section-title">
                  <h5> Our Commitment </h5>
                  <h3> <span className="s-t">Your Digital Assets</span> <br /> Our Responsibility</h3>
                </div>
                <SectionTitle
                  description="It’s been 3 years+ of us serving as a leading software company within the IT industry. A unique workflow and high-quality services are what set us apart from competitors. We are the professionals you can turn to when you need help. By utilizing our expertise, we will find the right solution for you as soon as possible. The way we operate:
                  "
                />
                <div className="expTeam-youtube-section">
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <ul>
                        <li>
                          <div>
                            <input
                              className="styled-checkbox"
                              id="styled-checkbox-1"
                              defaultChecked
                              type="checkbox"
                              value="value2"
                            />
                            <label htmlFor="styled-checkbox-1">We Identify Your Problem</label>
                          </div>
                        </li>
                        <li>
                          <div>
                            <input
                              className="styled-checkbox"
                              id="styled-checkbox-2"
                              defaultChecked
                              type="checkbox"
                              value="value2"
                            />
                            <label htmlFor="styled-checkbox-2">We Analyze & Build a Strategy</label>
                          </div>

                          <a onClick={() => setModalShow(true)}>
                            <FaPlay />
                          </a>

                          <MyVerticallyCentredModal
                            url="https://youtu.be/iO40U7nP6mY"
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </li>
                        <li>
                          <div>
                            <input
                              className="styled-checkbox"
                              id="styled-checkbox-3"
                              defaultChecked
                              type="checkbox"
                              value="value2"
                            />
                            <label htmlFor="styled-checkbox-3">We Design & Develop The Strategy</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
