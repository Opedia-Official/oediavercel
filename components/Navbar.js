import Link from "next/link";
import { useState, useRef, useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaAngleDoubleDown, FaAngleDown, FaAngleUp } from "react-icons/fa";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import logo from "../public/logo/logo-blue.png";
import {
  FaRegEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMale,
  FaAngleRight,
} from "react-icons/fa";

import { useRouter } from "next/router";

import Modal from "react-modal";

import { server } from "../config/index";
import { Alert } from "react-bootstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 22342434234234,
    padding: "50px 0",
    border: "1px solid rgb(244, 151, 53)",
    height: "70vh",
  },
};
Modal.setAppElement("body");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveNav, setActiveNav] = useState("Home");
  const [isSearch, setIsSearch] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [navChange, setNavChange] = useState(true);
  const textInput = useRef(null);

  // validation
  const [alerts, setAlert] = useState(false);
  const [msg, setMsg] = useState("");

  // all states
  const [fistName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [service, setService] = useState("");

  // services state
  const [allCategory, setAllCategory] = useState([]);

  const contactData = {
    fname: fistName,
    lname: lastName,
    email: email,
    phone: phone,
    message: text,
    service: service,
  };
  alerts
    ? setInterval(() => {
        setAlert(false);
      }, 5000)
    : "";
  const Contacthandler = async (e) => {
    e.preventDefault();
    // validation
    let regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (fistName == "") {
      setAlert(true);
      setMsg("Put your first Name");
      return false;
    } else if (lastName == "") {
      setAlert(true);
      setMsg("Put your Last Name");
      return false;
    } else if (email == "") {
      setAlert(true);
      setMsg("Put your email");
      return false;
    } else if (regex.test(String(email).toLowerCase()) == false) {
      setAlert(true);
      setMsg("Email is not valid");
      return false;
    } else if (phone == "") {
      setAlert(true);
      setMsg("Put your Phone Number");
      return false;
    } else if (text == "") {
      setAlert(true);
      setMsg("Put your Text");
      return false;
    } else if (service == "") {
      setAlert(true);
      setMsg("Put your service name");
      return false;
    } else {
      setAlert(true);
      setMsg("Thanks for your Message");
    }

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
    if (posted.status === 200) {
      alert("Message Sent");
    } else {
      alert("Message Not Sent");
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setText("");
    closeModal();
  };

  // api post

  const openMenu = (e) => {
    setIsOpen(!isOpen);
  };

  // modal

  const [modalIsOpen, setIsOpenModal] = useState(false);
  const [trainings, setTrainings] = useState([]);

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  const [isLink, setLink] = useState(false);

  const navChageRef = useRef();
  const router = useRouter();

  useEffect(() => {
    router.pathname == "/" ? setLink(true) : setLink(false);

    // training
    navChageRef.current.className = "header";

    const allData = axios
      .get(`${server}/api/course`)
      .then((res) => setTrainings(res.data));
    // training

    let previousPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener("scroll", (e) => {
      let scrolTop = e.target.documentElement.scrollTop;

      // Scroll top navbar hide open
      let currentPosition = e.target.documentElement.scrollTop;

      if (scrolTop > 156) {
        if (previousPosition > currentPosition) {
          navChageRef.current.className = "header activeNav";
          setNavChange(true);
        } else {
          navChageRef.current.className = "header";
          setNavChange(false);
        }
        previousPosition = currentPosition;
      } else {
        navChageRef.current.className = "header";
      }
    });

    // allcategory called
    const allCategory = axios
      .get(`${server}/api/serviceAllCategory`)
      .then((res) => {
        setAllCategory(res.data);
        // console.log("allCategory", res.data);
      });
  }, [router.pathname]);

  // console.log(allCategory, "allCategory");

  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="social-info text-center text-md-start">
                <li>
                  <a
                    className={styles.socialIconItem}
                    href="mailto: opedia.technologies@gmail.com"
                  >
                    <span className="s-icon">
                      <FaRegEnvelope />
                    </span>
                    opedia.technologies@gmail.com
                  </a>
                </li>
                <li style={{ marginLeft: "15px" }}>
                  <a
                    href="tel:+8801978159172"
                    className={styles.socialIconItem}
                  >
                    <span className="s-icon">
                      <FaPhoneAlt />
                    </span>
                    +8801978159172
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="social text-center text-md-end">
                <li>
                  <a className="social-item" href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a className="social-item" href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a className="social-item" href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a className="social-item" href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header ref={navChageRef}>
        <div className="container">
          <nav className={styles.navbar}>
            <Link href="/">
              <a className={styles.navlogo}>
                <Image
                  src={logo.src}
                  alt="Opediatech"
                  width={163}
                  height={51}
                />
                {/* <img src={logo.src} alt="" /> */}
              </a>
            </Link>
            <ul
              className={
                isOpen === false
                  ? styles.navmenu
                  : styles.navmenu + " " + styles.active
              }
            >
              <li className={styles.navitem}>
                <Link href="/">
                  <a
                    className={
                      (isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                      isActiveNav === "Home"
                        ? styles.activenav
                        : styles.navlink)
                    }
                    onClick={() => {
                      openMenu();
                      setActiveNav("Home");
                    }}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className={styles.navitem}>
                <Link href="/about">
                  <a
                    id=""
                    className={
                      (isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                      isActiveNav === "About"
                        ? styles.activenav
                        : styles.navlink)
                    }
                    onClick={() => {
                      openMenu();
                      setActiveNav("About");
                    }}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className={styles.navitem}>
                <Link href="/service">
                  <a
                    id=""
                    className={
                      (isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                      isActiveNav === "Service"
                        ? styles.activenav
                        : styles.navlink)
                    }
                    onClick={() => {
                      openMenu();
                      setActiveNav("Service");
                    }}
                  >
                    Service
                  </a>
                </Link>

                <div className={styles.dropdown}>
                  <div className="containerr">
                    <div className="row justify-content-center">
                      {allCategory.map((singleCategory) => (
                        <div
                          key={singleCategory.id}
                          className="col-12 col-xl text-center text-xl-start   borderLeft  mb-4 mb-xl-0"
                        >
                          <div className={styles.dropdown__inner}>
                            <Link
                              href={`/service/category/${singleCategory.category_slug}`}
                            >
                              <h2 className={styles.dropdown__title}>
                                {singleCategory.category_name}
                              </h2>
                            </Link>
                            <SingleServiceCompo
                              isMore={isMore}
                              singleCategory={singleCategory}
                            />
                          </div>
                        </div>
                      ))}
                      <p
                        style={{
                          color: "#f49735",
                          fontSize: "28px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                        onClick={() => setIsMore(!isMore)}
                      >
                        {isMore ? <FaAngleUp /> : <FaAngleDown />}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "#f49735",
                      fontSize: "18px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => setIsMore(!isMore)}
                  ></p>
                </div>
              </li>
              <li className={styles.navitem}>
                <Link href="/training">
                  <a
                    id=""
                    className={
                      (isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                      isActiveNav === "Team"
                        ? styles.activenav
                        : styles.navlink)
                    }
                    onClick={() => {
                      openMenu;
                      setActiveNav("Team");
                    }}
                  >
                    Training
                  </a>
                </Link>
                <div className={styles.dropdown1}>
                  <div className="containerr trainingNav">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div className={styles.dropdown__inner2}>
                          <ul className={styles.dropdown__list}>
                            {trainings.map((training) => (
                              <li
                                key={training.id}
                                className={styles.dropdown__item}
                              >
                                <Link href={`/training/${training.slug}`}>
                                  <a className={styles.dropdown__link}>
                                    {training.title}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.navitem}>
                <Link href="/contact">
                  <a
                    id=""
                    className={
                      (isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                      isActiveNav === "Blog"
                        ? styles.activenav
                        : styles.navlink)
                    }
                    onClick={() => {
                      openMenu();
                      setActiveNav("Blog");
                    }}
                  >
                    Contact
                  </a>
                </Link>
              </li>
              {isLink && (
                <li className={styles.navitem}>
                  {/* <Link href="/portfolio"> */}
                  <a
                    // id="#portfolio"
                    href="#portfolio"
                    className={
                      (isOpen === false
                        ? styles.navlink
                        : styles.navlink + " " + styles.active,
                      isActiveNav === "Portfolio"
                        ? styles.activenav
                        : styles.navlink)
                    }
                    onClick={() => {
                      openMenu();
                      setActiveNav("Portfolio");
                    }}
                  >
                    Portfolio
                  </a>
                  {/* </Link> */}
                </li>
              )}

              <li className={styles.navitem}>
                <Link href="#">
                  <a
                    id=""
                    className={
                      isSearch ? "btn-brand isSearchClicked" : "btn-brand "
                    }
                    onClick={() => {
                      openMenu();
                      openModal();
                    }}
                  >
                    Get a Quote{" "}
                  </a>
                </Link>

                {/* modal items */}

                <Modal
                  isOpen={modalIsOpen}
                  // onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <div className=" offset-2 col-8">
                    <div className="contact-right-form mt-5 mt-lg-0 ">
                      <h3 className="contact-modal">Get A free Quote</h3>
                      {alerts ? <Alert variant="danger">{msg}</Alert> : ""}
                      {/* This is a alert—check it out! */}
                      {/* <Alert variant="danger">A free Q</Alert> */}

                      <form action="#">
                        <div className="row">
                          <div className="col-lg-6 mb-5">
                            <div className="c-input-wrap">
                              <input
                                type="text"
                                placeholder="First Name *"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={fistName}
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
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
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
                                value={email}
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
                                value={phone}
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
                                <option value="" disabled selected hidden>
                                  Select Your Services
                                </option>
                                <option value="Web and Software">
                                  Web & Software
                                </option>
                                <option value="Product Design">
                                  Product Design
                                </option>
                                <option value="Ecommerce Solution">
                                  Ecommerce Solution
                                </option>
                                <option value="Digital marketing">
                                  Digital marketing
                                </option>
                                <option value="Multimedia and Printing">
                                  Multimedia & printing
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
                                value={text}
                              ></textarea>

                              <span>
                                <FaEnvelope />
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={closeModal}
                          className="btn-two mr-10 mt-4"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="btn-brand mt-4"
                          onClick={Contacthandler}
                        >
                          Submit Request <FaAngleRight />
                        </button>
                      </form>
                    </div>
                  </div>
                </Modal>
                {/* modal items */}
              </li>
            </ul>

            {navChange ? (
              <button
                className={
                  isOpen === false
                    ? styles.hamburger
                    : styles.hamburger + " " + styles.active
                }
                onClick={openMenu}
              >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
              </button>
            ) : (
              <button
                className={
                  isOpen === true && styles.hamburger + " " + styles.active
                }
                onClick={openMenu}
              >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
              </button>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

function SingleServiceCompo({ singleCategory, isMore }) {
  const [marketing, setMarketing] = useState([]);

  useEffect(() => {
    axios
      .get(`${server}/api/service-category/${singleCategory.category_slug}`)
      .then((res) => {
        setMarketing(res.data.data);
      });
  }, []);

  return (
    <ul className={styles.dropdown__list}>
      {isMore
        ? marketing.map((item) => (
            <li key={item.id} className={styles.dropdown__item}>
              <Link href={`/service/${item.service_slug}`}>
                <a className={styles.dropdown__link}>{item.service_title}</a>
              </Link>
            </li>
          ))
        : marketing.slice(0, 5).map((item) => (
            <li key={item.id} className={styles.dropdown__item}>
              <Link href={`/service/${item.service_slug}`}>
                <a className={styles.dropdown__link}>{item.service_title}</a>
              </Link>
            </li>
          ))}
    </ul>
  );
}
