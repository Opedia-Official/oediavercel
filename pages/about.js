import { Card } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import InnerHead from "../components/innerHead";
import Meta from "../components/Meta";
import { useState, useEffect } from "react";
import MyVerticallyCentredModal from "../components/MyVerticallyCentredModal";
import aboutImage from "/public/page-image/about.jpg";
import { FaStar } from "react-icons/fa";
// import { BsPlayFill } from "react-icons/Bs";
import dynamic from "next/dynamic";
import { server } from "../config/index";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ExpertWorker from "../components/ExpertWorker";
import { expertWorker } from "../Utils/fakeData";
import TeamExpert from "../components/TeamExpert";
import WhatsappChat from "../components/whatsappChat";
import Link from "next/link";
import Image from "next/image";
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
      {/* <InnerHead title="About Us" img={aboutImage} isDynamic={false} /> */}
      {/* Youtube section */}

      {/* Youtube section */}

      <div className="about-youtube-section-area about-bg">
        <div className="about-youtube-wrap">
          <MyVerticallyCentredModal
            url="https://youtu.be/iO40U7nP6mY"
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <div className="ptflo-button">
            <span onClick={() => setModalShow(true)}>
              <FaPlay />
            </span>
          </div>
        </div>
      </div>
      <div className="about-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6  wow slideInLeft" data-wow-duration="1s">
              <div className=" about great-experience-left-wrap mb-5 mb-lg-0">
                <div className="great-experinec-img">
                  <Image
                    src="/aboutUs/about.png"
                    alt="Opediatech"
                    width={456}
                    height={565}
                  />
                  {/* <img src="./aboutUs/pic-1.png" alt="" /> */}
                </div>
                <img
                  className="ge-dots d-none d-lg-block"
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
                    3 <span>+ Years</span>
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
                    IT Specialties.
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
                <Link href="/contact">
                  <a className="btn-two mt-5"> Contuct Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CLIENTS FEEDBACK */}
      <div className="about-client-feedback-area mt-140 mb-120">
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
            loop="true"
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
                        <Image
                          src="/blog/pic-3.png"
                          alt="Opediatech"
                          width={60}
                          height={60}
                        />
                        {/* <img src="./blog/pic-3.png" alt="" /> */}
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
                        <Image
                          src="/blog/pic-3.png"
                          alt="Opediatech"
                          width={60}
                          height={60}
                        />
                        {/* <img src="./blog/pic-3.png" alt="" /> */}
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
                        {/* <img src="./blog/pic-3.png" alt="" /> */}
                        <Image
                          src="/blog/pic-3.png"
                          alt="Opediatech"
                          className="client-fdback-img"
                          width={60}
                          height={60}
                        />
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
