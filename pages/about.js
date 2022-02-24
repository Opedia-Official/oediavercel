import { Card } from "react-bootstrap";
import { FaPlay } from "react-icons/Fa";
import InnerHead from "../components/innerHead";
import Meta from "../components/Meta";
import { useState, useEffect } from "react";
import MyVerticallyCentredModal from "../components/MyVerticallyCentredModal";

import { FaStar } from "react-icons/Fa";
import { BsPlayFill } from "react-icons/Bs";
import dynamic from "next/dynamic";
import {server} from '../config/index'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ExpertWorker from "../components/ExpertWorker";
import { expertWorker } from "../Utils/fakeData";
import TeamExpert from "../components/TeamExpert";
import WhatsappChat from "../components/whatsappChat";



let AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Abouta({ services }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();
  }, []);
  return (
    <>
      <Meta title="About" />
      <WhatsappChat />
      <InnerHead title="About Us" />
      {/* Youtube section */}
       <div className="about-us-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  wow slideInLeft" data-wow-duration="1s">
              <div className=" about great-experience-left-wrap mb-5 mb-lg-0">
                <div className="great-experinec-img">
                  <img src="./aboutUs/pic-1.png" alt="" />
                </div>
                <img
                  className="ge-dots"
                  src="./aboutUs/dot_shapes.png"
                  alt=""
                />
                <img
                  className="ge-reactangle"
                  src="./aboutUs/reactangle.png"
                  alt=""
                />
                <span
                  onClick={() => setModalShow(true)}
                  className="youtube-play "
                >
                  <FaPlay />
                </span>

                <div className="ge-info">
                  <h2>
                    26 <span>+ Years</span>
                  </h2>
                  <h3>Experience</h3>
                </div>
              </div>
            </div>
            <MyVerticallyCentredModal
              url="https://youtu.be/iO40U7nP6mY"
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <div className="col-lg-6 wow slideInRight" data-wow-duration="1s">
              <div className="about great-exp-right ">
                <p className="a-title-top">Great Experience In Building</p>
                <div className="section-title">
                  <h5> About Company</h5>
                  <h3>
                    We team of experience <br />
                    It Specialties.
                  </h3>
                  <p>
                    Construction is a general term meaning the art and science
                    to form objects systems organizations, and comes from Latin
                  </p>
                </div>
                <p>
                  Construction is a general term meaning the art and science to
                  form objects systems organizations, and comes from Latin
                  construction and Old French construction. To construct is the
                  verb: the act of building, and the noun
                </p>
                <a href="#" className="btn-two mt-5">
                  {" "}
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* Youtube section */}
      {/* VIEW SERVICE AREA */}
      <div className="view-service-page mb-100 mt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                <h5>Our Tech Services</h5>
                <h3>Our Expert Worker.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className={"view-service-right-wrapper service"}>
                <div className="row">
                  {expertWorker.map((item) => (
                    <ExpertWorker key={item} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* VIEW SERVICE AREA */}

       <div className="about-youtube-section-area about-bg">
        <div className="about-youtube-wrap">
          <MyVerticallyCentredModal
            url="https://youtu.be/iO40U7nP6mY"
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <div className="ptflo-button">
            <span onClick={() => setModalShow(true)}>
              <BsPlayFill />
            </span>
          </div>
        </div>
      </div> 

      {/* CLIENTS FEEDBACK */}
      <div
        style={{ display: "none" }}
        className="about-client-feedback-area mb-120"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                <h5>Our Tech Services</h5>
                <h3>Client,S Feedback</h3>
              </div>
            </div>
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              992: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },

              0: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className="client-feedback-wrap">
                <Card>
                  <Card.Body>
                    <div className="client-info-wrap">
                      <div className="client-info">
                        <img src="./blog/pic-3.png" alt="" />
                        <div className="client-info-text">
                          <h2>Hanson Deck</h2>
                          <p>UI/UX designer</p>
                        </div>
                      </div>
                      <div className="client-review">
                        <div className="product-review-stars">
                          <ul className="review">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Show off show off pick your nose and blow off up the duff
                      chimney pot Why chap lost the plot, buggered wellies
                      blatant bender well blimey, what a load of rubbish bodge
                      Richard tosser gutted mate chinwag.
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-feedback-wrap">
                <Card>
                  <Card.Body>
                    <div className="client-info-wrap">
                      <div className="client-info">
                        <img src="./blog/pic-3.png" alt="" />
                        <div className="client-info-text">
                          <h2>Hanson Deck</h2>
                          <p>UI/UX designer</p>
                        </div>
                      </div>
                      <div className="client-review">
                        <div className="product-review-stars">
                          <ul className="review">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Show off show off pick your nose and blow off up the duff
                      chimney pot Why chap lost the plot, buggered wellies
                      blatant bender well blimey, what a load of rubbish bodge
                      Richard tosser gutted mate chinwag.
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-feedback-wrap">
                <Card>
                  <Card.Body>
                    <div className="client-info-wrap">
                      <div className="client-info">
                        <img src="./blog/pic-3.png" alt="" />
                        <div className="client-info-text">
                          <h2>Hanson Deck</h2>
                          <p>UI/UX designer</p>
                        </div>
                      </div>
                      <div className="client-review">
                        <div className="product-review-stars">
                          <ul className="review">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Show off show off pick your nose and blow off up the duff
                      chimney pot Why chap lost the plot, buggered wellies
                      blatant bender well blimey, what a load of rubbish bodge
                      Richard tosser gutted mate chinwag.
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> 

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="251, 129, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      /> 

   <TeamExpert services={services} /> 
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/team`);


  const services = await res.json();

  return {
    props: {
      services,
    },
    revalidate: 10,
  };
}
