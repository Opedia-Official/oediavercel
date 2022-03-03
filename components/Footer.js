// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import client1 from "../public/footer/client- (1).png";
import client2 from "../public/footer/client- (2).png";
import client3 from "../public/footer/client- (3).png";
import client4 from "../public/footer/client- (4).png";
import client5 from "../public/footer/client- (6).png";
import client6 from "../public/footer/client- (5).png";
import client7 from "../public/footer/client- (7).png";
import client8 from "../public/footer/client- (8).png";
import client9 from "../public/footer/client- (9).png";
import client10 from "../public/footer/client- (10).png";
import client11 from "../public/footer/client- (11).png";

import { FaPhoneAlt } from "react-icons/fa";

SwiperCore.use([Autoplay]);

import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
// import { GoLocation } from "react-icons/Go";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  // https://admin.opediatech.com/api/subscribe

  const [emailTitle, setEmailTitle] = useState("");

  // subscription
  const Contacthandler = async (e) => {
    e.preventDefault();

    const posted = await fetch("https://admin.opediatech.com/api/subscribe", {
      method: "post",
      body: JSON.stringify({
        email: emailTitle,
      }),
      headers: { "Content-Type": "application/json" },
    });
    setEmailTitle("");

    // console.log("posted email", posted);
  };

  const logos = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
  ];

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
                    {logos.map((item, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={item}
                          alt="sfsdfsd"
                          width={105}
                          height={62}
                          
                        />
                      </SwiperSlide>
                    ))}
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
                              <a href="https://www.facebook.com/Opediatech/">
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/opedia_tech/">
                                <FaInstagram />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/company/opedia-technologies-limited">
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
                            <Link href="/about">
                              <a>About</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a>Blog</a>
                            </Link>
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
                            <Link href="/contact">
                              <a>Contact</a>
                            </Link>
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
                            <Link href="/termsCondition">
                              <a>Term & conditions</a>
                            </Link>
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
                            <Link href="/privacy">
                              <a>Privacy</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mt-5 mt-md-0">
                      <div className="footer-widget">
                        <div className="footer-logo">
                          <a href="#">
                            {/* <img
                              width="170px"
                              src="./logo/website-logo-final-white.png"
                              alt=""
                            /> */}
                            <Image
                              src="/logo/website-logo-final-white.png"
                              alt="opediatech"
                              width={163}
                              height={51}
                            />
                          </a>
                          <br />
                          <br />
                          <br />
                          <p className="pera">
                            <a
                              // href="tel:+8801978159172"
                              // className={styles.socialIconItem}
                              style={{ color: "white" }}
                            >
                              <span
                                style={{ marginRight: "15px" }}
                                className="s-icon"
                              >
                                {/* <FaPhoneAlt /> */}Contact Us:
                              </span>
                              +8801978159172
                            </a>
                          </p>
                          <ul className="link-items">
                            <li>
                              {" "}
                              {/* <GoLocation /> */}
                              <span>
                                Shyamoli Square Complex Southern-Building,
                                Level-4, Dhaka 1207
                              </span>
                            </li>
                          </ul>
                          <div className="subscribe-section f-subs">
                            <form action="#">
                              <input
                                type="text"
                                placeholder=" Enter email address"
                                value={emailTitle}
                                onChange={(e) => setEmailTitle(e.target.value)}
                              />
                              <button
                                type="submit"
                                className="btn-brand"
                                onClick={Contacthandler}
                              >
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
                    <Link href="/termsCondition">
                      <a> Terms of Use</a>
                    </Link>
                    <Link href="/privacy">
                      <a> Privacy Policy</a>
                    </Link>
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
