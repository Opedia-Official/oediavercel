import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { server } from "../config/index";
function TeamExpert({ services }) {
  console.log("services getStaticProps now: ", services);
  return (
    <div className="expert-workers-section-area text-center text-md-start">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="section-title text-center mb-50">
              <h5> Our Team</h5>
              <h3>Meet our Teams</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
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
                  <img src={`${server}/${item.img}`} alt="" />
                </div>
                <ul className="exp-social">
                {item.fb && <li>
                    <a href={item.fb}>
                      <FaFacebookF />
                    </a>
                  </li>}
                  {item.instagram && <li>
                    <a href={item.instagram}>
                      <FaInstagram />
                    </a>
                  </li>}
                  {item.twitter &&  <li>
                    <a href={item.twitter}>
                      <FaTwitter />
                    </a>
                  </li>}
                  {item.linkedin && <li>
                    <a href={item.linkedin}>
                      <FaLinkedinIn />
                    </a>
                  </li>}
                  
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
