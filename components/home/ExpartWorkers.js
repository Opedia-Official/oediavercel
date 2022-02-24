import {
  FaCloud,
  FaDatabase,
  FaRegHeart,
  FaHeart,
  FaRegSmileBeam,
  FaFacebookF,
  FaRegPaperPlane,
  FaRegLightbulb,
  FaPlaneDeparture,
  FaAngleDoubleRight,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function ExpartWorkers() {
  return (
    <div className="expert-workers-section-area text-center text-md-start">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="section-title text-center mb-50">
              <h5> Expert Worker</h5>
              <h3>Our Expert Worker.</h3>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          autoplay={true}
          breakpoints={{
            992: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            425: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <div className="exp-workers-item-wrapper">
              <div className="section-img">
                <img src="./expert-worker/pic-1.png" alt="" />
              </div>
              <ul className="exp-social">
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
                    <FaGithub />
                  </a>
                </li>
              </ul>

              <div className="worker-info">
                <h5>Tahmina Rumi</h5>
                <p>Web Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="exp-workers-item-wrapper">
              <div className="section-img">
                <img src="./expert-worker/pic-1.png" alt="" />
              </div>
              <ul className="exp-social">
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
                    <FaGithub />
                  </a>
                </li>
              </ul>

              <div className="worker-info">
                <h5>Jorina Begum</h5>
                <p>Ux Designer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="exp-workers-item-wrapper">
              <div className="section-img">
                <img src="./expert-worker/pic-1.png" alt="" />
              </div>
              <ul className="exp-social">
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
                    <FaGithub />
                  </a>
                </li>
              </ul>

              <div className="worker-info">
                <h5>Hannan Bhuiyan</h5>
                <p>Graphic Designer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="exp-workers-item-wrapper">
              <div className="section-img">
                <img src="./expert-worker/pic-1.png" alt="" />
              </div>
              <ul className="exp-social">
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
                    <FaGithub />
                  </a>
                </li>
              </ul>

              <div className="worker-info">
                <h5>Delower Hasan</h5>
                <p>Assistant</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="exp-workers-item-wrapper">
              <div className="section-img">
                <img src="./expert-worker/pic-1.png" alt="" />
              </div>
              <ul className="exp-social">
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
                    <FaGithub />
                  </a>
                </li>
              </ul>

              <div className="worker-info">
                <h5>Abdul Gaffer</h5>
                <p>Motion Designer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
