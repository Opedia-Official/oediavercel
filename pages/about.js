import { Card } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import Meta from "../components/Meta";
import { useState, useEffect } from "react";
import MyVerticallyCentredModal from "../components/MyVerticallyCentredModal";

import { FaStar } from "react-icons/fa";


import { server } from "../config/index";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

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
      <Meta seo_title="About" />
      <WhatsappChat />
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


                <div className="ge-info">
                  <h2>
                    3 <span>+ Years</span>
                  </h2>
                  <h3>Experience</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-6 wow slideInRight" data-wow-duration="1s">
              <div className="about great-exp-right ">
                <p className="a-title-top">EXCELLENCE IN SOFTWARE AND DIGITAL TECHNOLOGY </p>
                <div className="section-title">
                  <h5> About Company</h5>
                  <h3 >
                    A Community of Experienced People
                  </h3>
                  <p>
                      Opedia Technologies Ltd. is a growing software and digital service provider. We create value for your business by providing technological and digital solutions through interaction and integration.
                  </p>
                </div>

                <div className="section-title">
                    <h5>Our Goal</h5>
                    <p> We commit to serve within the IT environment and empower the future with a broad prospect of technological solutions. We guide businesses to strengthen their performance technically and work with initiatives to make a positive impact on customers. We thrive to increase brand presence in the marketplace by developing a digital platform tailoring to your specific need for real-time solutions defining a clear roadmap. Again, implementing digital technological solutions in a range of areas including software, business and system analysis, and network infrastructure enables a business to develop using an industry standard.</p>
                  </div>
               
                
                <div className="section-title">
                    <h5> Mission: </h5>
                    <p> Offering cutting-edge IT services and software solutions within a fair package and premium standard, proven beneficial for clients, employees and people connected inside and outside of the company. </p>
                  </div>
                  <div className="section-title">
                    <h5 className="mb-3">Vision:</h5>
                    <span>To contribute and grow as a company within the digitalized and technological advancement.
                       </span>
                       <h5 className="mt-2" >Value statement:</h5>

                      <ul className="bulletBathekeDane">
                        <li>Focus on the commitments we make to our people.  </li>
                        <li>Practice pain point-based problem solving and clarity in all actions we take.  </li>
                        <li>Bold to embrace innovation and social changes toward prosperity. </li>
                        <li> Practice intellectual and knowledge-based growth and initiate innovation.  </li>
                        <li>We value creativity and are optimistic about uniqueness.   </li>
                        <li>	Aim to lead in the path of the IT and digital service industry.  </li>

                      </ul>
                  </div>
                  
 





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
                <h3>Client???s Feedback</h3>
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
                        <div className="client-info-text">
                          <h2>Hanson Deck</h2>
                          <p>RSD Courier</p>
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
                    Your thoughtfulness and support of MPCC is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in MPCC will be justified.  
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
                        <div className="client-info-text">
                          <h2>Hambarn Jack</h2>
                          <p>It Specialist</p>
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
                    The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in the area of web, technology and training.
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
                          className="client-fdback-img"
                          width={60}
                          height={60}
                        />
                        <div className="client-info-text">
                          <h2>John Dev</h2>
                          <p>WePack Company</p>
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
                    We've certainly had a positive experience working with eLab Communications and Will Elkadi. We have engaged him to coordinate a host of our IT/ web needs, and Will has followed through in a timely fashion and hit the requested mark each time.
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      

     
    
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
