import { Card, Spinner } from "react-bootstrap";
import WhatsappChat from "../../../components/whatsappChat";
import { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";

import { server } from "../../../config";
import Meta from "../../../components/Meta";
import Link from "next/link";
import Image from "next/image";

export default function CateWiseServices({ service }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();
  }, []);

  return (
    <>
      <Meta title={service?.seo_title} description={service?.seo_desc} />
      <WhatsappChat />
      {/* VIEW SERVICE AREA */}
      <div className="view-service-page mb-100 ">
        <div className="container">
          <div className="row justify-content-center mt-50">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                <h3>{service?.category_name}</h3>
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
                  {service?.data?.length > 0 ? (
                    service.data ? (
                      service?.data?.map((item) => (
                        <div key={item?.id} className="col-lg-6 col-sm-6">
                          <div>
                            <div className="portfolio-items mb-100">
                              <Card>
                                <Image
                                  src={`${server}/${item?.featured_img}`}
                                  alt={item?.service_title}
                                  width={400}
                                  height={367}
                                />
                              </Card>
                              <div className="portfolio-info">
                                <h2>{item?.service_title}</h2>
                                <div>
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
                      <div className="  d-flex justify-content-center align-items-center pt-50">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden text-center">Loading...</span>
                      </Spinner>
                    </div>
                    )
                  ) : (
                    <div>
                      <br />
                      <br />
                      <p style={{ textAlign: "center" }}>
                      <div className="  d-flex justify-content-center align-items-center pt-50">
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden text-center">Loading...</span>
                        </Spinner>
                      </div>
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
                  {service?.desc?.length > 0 && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${service?.desc}`,
                      }}
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


export async function getStaticPaths() {
  const resp = await fetch(`${server}/api/serviceAllCategory`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const services = await resp.json();

  const paths = services.map((service) => {
    return {
      params: {
        slug: `${service?.category_slug}`,
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
  const res = await fetch(`${server}/api/service-category/${params.slug}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const service = await res.json();
  
  return {
    props: {
      service
    },
    revalidate: 10,
  };
}
