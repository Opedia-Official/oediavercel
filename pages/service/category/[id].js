import { Card } from "react-bootstrap";
import InnerHead from "../../../components/innerHead";

import WhatsappChat from "../../../components/whatsappChat";
import { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";

import ServiceItem from "../serviceItem";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { server } from "../../../config";
import Meta from "../../../components/Meta";
import Link from "next/link";
import Image from "next/image";

export default function CateWiseServices({ services }) {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();
  }, []);

  const [service, setService] = useState(null);
  const [descriptionCat, setDescriptionCat] = useState("");
  const [seo, setSeo] = useState("");

  // console.log("service", service);

  useEffect(() => {
    axios.get(`${server}/api/service-category/${id}`).then((res) => {
      // console.log("allData Single compornent single data ", res.data.data);
      setService(res.data.data);
      setDescriptionCat(res.data.desc);
      setSeo(res.data.seo_desc);
    });
  }, [id]);

  // console.log("services id3..3: ", id);


  const servicesTitle =
    id && id.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, " ");


  return (
    <>
      {/* <InnerHead title={servicesTitle} img={imageCat} /> */}
      <Meta title={servicesTitle} description={seo} />
      <WhatsappChat />

      {/* <div key={10} className="col-lg-4 col-sm-6">
        <div className="portfolio-items mb-100">
          <Card>
            <Card.Img src={`${server}/${course.Featured_img}`} />
          </Card>
          <div className="portfolio-info">
            <span>course.title</span>
            <h2>course.course_name</h2>
            <div>
              <Link href={`/training/`}>
                <a>
                  View details <FaAngleRight />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* VIEW SERVICE AREA */}
      <div className="view-service-page mb-100 ">
        <div className="container">

          <div className="row justify-content-center mt-50">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                {/* <h5>Services</h5> */}
                <h3>{servicesTitle}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12  wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <div className={"view-service-right-wrapper service"}>
                <div className="row">
                  {service?.length > 0 ? (
                    service ? (
                      service?.map((item) => (
                        <div key={item.id} className="col-lg-4 col-sm-6">
                          {/* <ServiceItem item={item} /> */}
                          <div key={10}>
                            <div className="portfolio-items mb-100">
                              <Card>
                                <Image
                                  // src="/blog/pic-1.png"
                                  src={`${server}/${item.featured_img}`}
                                  alt="footer"
                                  width={370}
                                  height={367}
                                />
                                {/* <Card.Img src={`${server}/${course.Featured_img}`} /> */}
                              </Card>
                              <div className="portfolio-info">
                                <span>{servicesTitle}</span>
                                <h2>{item?.service_title}</h2>
                                <div>
                                  {/* <Link href={`/training/`}>
                                    <a>
                                      View details <FaAngleRight />
                                    </a>
                                  </Link> */}
                                  <Link href={`/service/${item?.service_slug}`}>
                                    <a>
                                      Service Details <FaAngleRight />
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      " Loading"
                    )
                  ) : (
                    <div>
                      <br />
                      <br />
                      <br />
                      <p style={{ textAlign: "center" }}>
                        No Service available
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>


          <div className="row justify-content-center mt-50">
            <div className="col-md-12">
              <div className="section-titlee text-center mb-50">
                <p style={{ textAlign: "center" }}>
                  {descriptionCat.length && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${descriptionCat}`,
                      }}
                    // className={Style?.pera}
                    ></div>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* VIEW SERVICE AREA */}
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://admin.opediatech.com/api/service");
//   const services = await res.json();

//   return {
//     props: {
//       services,
//     },
//     revalidate: 10,
//   };
// }

// export async function getServerSideProps() {
//   const res = await fetch("http://admin.opediatech.com/api/service");
//   const services = await res.json();

//   return {
//     props: {
//       services,
//     },
//   };
// }
