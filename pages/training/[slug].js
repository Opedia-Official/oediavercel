import { FaPlay } from "react-icons/fa";
import MyVerticallyCentredModal from "../../components/MyVerticallyCentredModal";

import { useState } from "react";
import WhatsappChat from "../../components/whatsappChat";
import {
  FaRegEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { server } from "../../config/index";
import Meta from "../../components/Meta";
import Image from "next/image";
export default function TrainingDetails({ training }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Meta title={training?.seo_title} description={training?.seo_description} />
      <WhatsappChat />
      <div className="portfolio-details mt-70 mb-100">
        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <div className="portfolio-details-right-wrap training">
                <h3 className="ptf-details-title">{training?.course_name}</h3>

                <ul className="portfolio-details-info">
                  <li>
                    <span className="spanTitle">Course Name :</span>
                    <span className="spanPera">{training?.course_name}</span>
                  </li>
                  <li>
                    <span className="spanTitle">Duration :</span>
                    <span className="spanPera">{training?.duration}</span>
                  </li>
                  <li>
                    <span className="spanTitle">Classes :</span>
                    <span className="spanPera">{training?.classes}</span>
                  </li>
                  <li>
                    <span className="spanTitle">Pre-Requirement :</span>
                    <span className="spanPera">
                      {training?.pre_requirement}
                    </span>
                  </li>
                  <li>
                    <span className="spanTitle">System Config :</span>
                    <span className="spanPera">{training?.system_config}</span>
                  </li>
                  <li>
                    <span className="spanTitle">Course Fee Online :</span>
                    <span className="spanPera">
                      {training?.course_fee_online}
                    </span>
                  </li>
                  <li>
                    <span className="spanTitle">Course Fee Offline :</span>
                    <span className="spanPera">
                      {training?.course_fee_offline}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="portfolio-details-left">

                {
                  training?.youtube_link &&  <MyVerticallyCentredModal
                  url={training?.youtube_link}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                }
                
                <div className="portfolio-details-lft-img mt-5 mt-lg-0">
                  <Image
                    src={`${server}/${training?.Featured_img}`}
                    alt={training?.title}
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
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-details-info mt-5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${training?.description}`,
                  }}
                ></div>

                  <div className="training-contact">
                  <ul className="social-info text-center text-md-start">
                      <li><p style={{fontSize: '20px',
                  color:'#133344',
    lineHeight: '30px',
    fontWeight: "600" }}>Contact Us at:</p></li>
                    <li>
                      <a
                        className=''
                        href="mailto: training@opediatech.com"
                      >
                        <span className="s-icon">
                          <FaRegEnvelope />
                        </span>
                        training@opediatech.com
                      </a>
                    </li>
                    <li style={{ marginLeft     : "15px" }}>
                      <a
                        href="tel:+8801978159172"
                        className=''
                      >
                        <span className="s-icon">
                          <FaPhoneAlt />
                        </span>
                        +8801978159172
                      </a>
                    </li>
                   
                  </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const resp = await fetch(`${server}/api/course`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const trainings = await resp.json();

  const paths = trainings.map((training) => {
    return {
      params: {
        slug: `${training?.slug}`,
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
  const res = await fetch(`${server}/api/course/${params.slug}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const training = await res.json();
  return {
    props: {
      training,
    },
    revalidate: 10,
  };
}
