import { useState } from "react";
import axios from "axios";

import { Card } from "react-bootstrap";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarker,
  FaMale,
  FaAngleRight,
} from "react-icons/fa";

import InnerHead from "../components/innerHead";
import Meta from "../components/Meta";
import WhatsappChat from "../components/whatsappChat";
import dynamic from "next/dynamic";
import { server } from "../config/index";

export default function Contact({ posts }) {
  // all states
  const [fistName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [service, setService] = useState("");

  const contactData = {
    fname: fistName,
    lname: lastName,
    email: email,
    phone: phone,
    message: text,
    service: service,
  };

  const Contacthandler = async (e) => {
    console.log(lastName, "name");
    console.log(email, "email");
    console.log(phone, "phone");
    console.log(text, "text");
    console.log(service, "service");

    e.preventDefault();

    const posted = await fetch("https://admin.opediatech.com/api/message", {
      method: "post",
      body: JSON.stringify({
        fname: fistName,
        lname: lastName,
        email: email,
        phone: phone,
        message: text,
        service: service,
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log("posted", posted);
    console.log("contactData", contactData);
    // if (posted.status === 200) {
    //   alert("ok");
    //   toast("Wow so easy!");
    // } else {
    //   alert("error");
    //   toast("Wow so easy!");
    // }
  };

  return (
    <>
      <Meta title="Contact" />
      <WhatsappChat />
      <InnerHead title="Contact Us" />
      <div className="contact-us-area pt-80 pb-120">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="contact-wrap">
                <Card>
                  <Card.Body>
                    <div className="row ">
                      <div className="col-lg-6">
                        <div className="contact-left-info mb-5 mb-lg-0">
                          <h2>Feel free to contact us for any query.</h2>
                          <ul className="contact-info-text">
                            <li>
                              <div className="contact-icon">
                                <span>
                                  <FaPhoneAlt />
                                </span>
                              </div>
                              <div className="contact-info-text">
                                <h4>Phone Number:</h4>
                                <p>+880 01978159172</p>
                              </div>
                            </li>
                            <li>
                              <div className="contact-icon">
                                <span>
                                  {" "}
                                  <FaEnvelope />
                                </span>
                              </div>
                              <div className="contact-info-text">
                                <h4>Mail Address:</h4>
                                <p>opedia.technologies@gmail.com</p>
                              </div>
                            </li>
                            <li>
                              <div className="contact-icon">
                                <span>
                                  {" "}
                                  <FaMapMarker />
                                </span>
                              </div>
                              <div className="contact-info-text">
                                <h4>Office Address:</h4>
                                <p>Shyamoli Square Complex Dhaka 1207</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-right-form mt-5 mt-lg-0 ">
                          <form action="#">
                            <div className="row">
                              <div className="col-lg-6 mb-5">
                                <div className="c-input-wrap">
                                  <input
                                    type="text"
                                    placeholder="First Name *"
                                    onChange={(e) =>
                                      setFirstName(e.target.value)
                                    }
                                  />
                                  <span>
                                    <FaMale />
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-6 mb-5">
                                <div className="c-input-wrap">
                                  <input
                                    type="text"
                                    placeholder="Last Name *"
                                    onChange={(e) =>
                                      setLastName(e.target.value)
                                    }
                                  />
                                  <span>
                                    <FaMale />
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-6 mb-5">
                                <div className="c-input-wrap">
                                  <input
                                    type="email"
                                    placeholder="Mail Address *"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <span>
                                    <FaEnvelope />
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-6 mb-5">
                                <div className="c-input-wrap">
                                  <input
                                    type="tell"
                                    placeholder="Phone Number "
                                    onChange={(e) => setPhone(e.target.value)}
                                  />
                                  <span>
                                    <FaPhoneAlt />
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-12 mb-5">
                                <div className="c-input-wrap">
                                  <select
                                    name="service_type"
                                    id=""
                                    onChange={(e) => setService(e.target.value)}
                                  >
                                    <option value="Web Development">
                                      Web Development
                                    </option>
                                    <option value="Web Design">
                                      Web Design
                                    </option>
                                    <option value="Web Graphics Design">
                                      Web Graphics Design
                                    </option>
                                  </select>
                                  <span></span>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="c-input-wrap c-text-area">
                                  <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Message "
                                    onChange={(e) => setText(e.target.value)}
                                  ></textarea>

                                  <span>
                                    <FaEnvelope />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="btn-brand mt-5"
                              onClick={Contacthandler}
                            >
                              Submit Request <FaAngleRight />{" "}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                {/* <div style={{textAlign: 'center'}}> */}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.234956940982!2d90.3633023149818!3d23.774646184577378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c152946ccfad%3A0xc8edb7d360ab91fe!2sOpedia%20Technologies%20Limited!5e0!3m2!1sen!2sbd!4v1644670675499!5m2!1sen!2sbd"
                  width="100%"
                  height="450"
                  style={{ border: "0", margin: "20px auto 0px" }}
                  loading="lazy"
                ></iframe>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
