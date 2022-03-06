import { FaPlay } from "react-icons/fa";
import InnerHead from "../../components/innerHead";
import MyVerticallyCentredModal from "../../components/MyVerticallyCentredModal";
import { useState } from "react";
import WhatsappChat from "../../components/whatsappChat";
import dynamic from "next/dynamic";

import { server } from "../../config/index";

import Meta from "../../components/Meta";
import Image from "next/image";
export default function TrainingDetails({ training }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Meta title={training?.title} description={training?.seo_description} />
      {/* <InnerHead title={training?.title} img={training?.Featured_img} /> */}
      <WhatsappChat />
      <div className="portfolio-details mt-70 mb-100">
        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <div className="portfolio-details-right-wrap training">
                <h3 className="ptf-details-title">{training?.title}</h3>

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
                <MyVerticallyCentredModal
                  url={training?.youtube_link}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <div className="portfolio-details-lft-img">
                  <Image
                    src={`${server}/${training?.Featured_img}`}
                    alt="footer"
                    width={570}
                    height={495}
                    priority
                  />
                  {/* <img src={`${server}/${training?.Featured_img}`} alt="" /> */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const resp = await fetch(`${server}/api/course`);
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
  const res = await fetch(`${server}/api/course/${params.slug}`);
  const training = await res.json();
  return {
    props: {
      training,
    },
    revalidate: 10,
  };
}
