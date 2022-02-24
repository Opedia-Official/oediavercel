import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function TeamExpert({ services }) {
  console.log("services getStaticProps now: ", services);
  return (
    <div className="expert-workers-section-area text-center text-md-start">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="section-title text-center mb-50">
              <h5> Expert Worker</h5>
              <h3>Our Expert Worker.</h3>
            </div>
          </div>
        </div>
        <div className="row ">
          {/* single-items */}
          {services.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6  wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="exp-workers-item-wrapper mb-4">
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
                  <h5>{item.name}</h5>
                  <p>{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamExpert;
