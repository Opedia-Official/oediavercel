// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GoLocation } from "react-icons/Go";

// Import Swiper styles
import "swiper/css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-top-wrap">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    breakpoints={{
                      992: {
                        slidesPerView: 5,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      425: {
                        slidesPerView: 3,
                      },
                      0: {
                        slidesPerView: 2,
                      },
                    }}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide>
                      {" "}
                      <img src="./footer/item_01.png" alt="" />{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img src="./footer/item_02.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img src="./footer/item_03.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img src="./footer/item_01.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img src="./footer/item_01.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img src="./footer/item_01.png" alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle black-bg ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="footer-wrapper">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="footer-widget">
                        <h4 className="footer-title">About Us.</h4>
                        <p className="pr-20 pera">
                          Opedia Technologies Ltd is a growing software and IT
                          solutions company. We create value for your business
                          by providing professional IT services through
                          interaction and integration.{" "}
                        </p>
                        <div className="social">
                          <ul className="f-social">
                            <li>
                              <a href="#">
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <FaInstagram />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <FaLinkedin />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-6 mt-md-0 mt-5">
                      <div className="footer-widget">
                        <h4 className="footer-title">Useful Links</h4>
                        <ul className="link-items">
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">News</a>
                          </li>
                          <li>
                            <a href="#">Partners</a>
                          </li>
                          <li>
                            <a href="#">Room Details</a>
                          </li>
                          <li>
                            <a href="#">Gallery</a>
                          </li>
                          <li>
                            <a href="#">Contacts</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-2 col-6 mt-5 mt-md-0">
                      <div className="footer-widget">
                        <h4 className="footer-title">Help?</h4>
                        <ul className="link-items">
                          <li>
                            <a href="#">FAQ</a>
                          </li>
                          <li>
                            <a href="#">Term & conditions</a>
                          </li>
                          <li>
                            <a href="#">Reporting</a>
                          </li>
                          <li>
                            <a href="#">Documentation</a>
                          </li>
                          <li>
                            <a href="#">Support Policy</a>
                          </li>
                          <li>
                            <a href="#">Privacy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mt-5 mt-md-0">
                      <div className="footer-widget">
                        <div className="footer-logo">
                          <a href="#">
                            <img
                              width="170px"
                              src="./logo/website-logo-final-white.png"
                              alt=""
                            />
                          </a>
                          <br />
                          <br />
                          <br />
                          <p className="pera">
                            We are a team of designers and developers create
                            high quality Magento, Prestashop,{" "}
                          </p>
                          <ul className="link-items">
                            <li>
                              {" "}
                              <GoLocation />
                              <span>254 Lillian Blvd, Holbrook</span>
                            </li>
                          </ul>
                          <div className="subscribe-section f-subs">
                            <form action="#">
                              <input
                                type="text"
                                placeholder=" Enter email address"
                              />
                              <button type="submit" className="btn-brand">
                                {" "}
                                Subscribed
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-bottom-wrap d-flex align-items-center justify-content-between">
                  <p className="copyright">
                    © Opedia Technologies 2022 All rights reserved.
                  </p>
                  <div className="terms-and-condition">
                    <a href="#"> Terms of Use</a>
                    <a href="#"> Privacy Policy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
