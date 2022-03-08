import { Card } from "react-bootstrap";
// import { BsPlayFill} from "react-icons/Bs";
import InnerHead from "../../components/innerHead";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPlay,
} from "react-icons/fa";
import Image from "next/image";
import MyVerticallyCentredModal from "../../components/MyVerticallyCentredModal";
import { useState } from "react";
import WhatsappChat from "../../components/whatsappChat";
import { server } from "../../config/index";
import Meta from "../../components/Meta";

export default function PortfolioDetails({ portfolios }) {
  const portfolio = portfolios?.length ? portfolios[0] : [];

  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Meta title={portfolio?.portfolio_title} />
      <WhatsappChat />
      <div className="portfolio-details mt-50 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="portfolio-details-left ">
                <MyVerticallyCentredModal
                  url="https://youtu.be/iO40U7nP6mY"
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <div className="portfolio-details-lft-img">
                  <Image
                    src={`${server}/${portfolio?.thambnail_image}`}
                    alt="portfolio"
                    width={570}
                    height={495}
                    priority
                  />
                </div>

                <div className="ptflo-button">
                  <span onClick={() => setModalShow(true)}>
                    <FaPlay />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="portfolio-details-right-wrap">
                <h3 className="ptf-details-title">{portfolio?.portfolio_title}</h3>

                <ul className="portfolio-details-info">
                  <li>
                    <h4>PROJECT NAME :</h4>
                    <p>{portfolio?.project_name}</p>
                  </li>
                  <li>
                    <h4>Client :</h4>
                    <p>{portfolio?.project_client}</p>
                  </li>
                  <li>
                    <h4>Category :</h4>
                    <p>{portfolio?.project_name}</p>
                  </li>
                  <li>
                    <h4>Delivery Mode :</h4>
                    <p>{portfolio?.project_mode}</p>
                  </li>

                  <li>
                    <h4>Location :</h4>
                    <p>{portfolio?.location}</p>
                  </li>
                  <li>
                    <h4>Share :</h4>
                    <ul className="share text-center text-md-end">
                      <li>
                        <a className="share-item" href={portfolio?.fbLink}>
                          {" "}
                          <FaFacebookF />{" "}
                        </a>
                      </li>
                      <li>
                        <a className="share-item" href={portfolio?.twLink}>
                          {" "}
                          <FaTwitter />{" "}
                        </a>
                      </li>
                      <li>
                        <a className="share-item" href={portfolio?.inLink}>
                          {" "}
                          <FaLinkedinIn />{" "}
                        </a>
                      </li>
                      <li>
                        <a className="share-item" href={portfolio?.insLink}>
                          {" "}
                          <FaInstagram />{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-details-info">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${portfolio?.portfolio_desc}`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${server}/api/portfolio`);
  const ports = await res.json();

  const paths = ports.map((port) => {
    return {
      params: {
        slug: `${port?.portfolio_slug}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(`${server}/api/portfolio/${params.slug}`);
  const portfolios = await res.json();

  return {
    props: {
      portfolios,
    },
    revalidate: 10,
  };
}
