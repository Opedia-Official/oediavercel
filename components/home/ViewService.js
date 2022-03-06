import { Badge, Card } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

import { FaCloud } from "react-icons/fa";

import HomeStyle from "../../styles/Home.module.css";
import SectionTitle from "../SectionTitle";
import axios from "axios";
import Link from "next/link";

import { useEffect } from "react";
import { useState } from "react";
import { server } from "../../config";

export default function ViewService() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get(`${server}/api/featured-service`).then((res) => {
      setServices(res.data);
    });
  }, []);

  return (
    <div className="view-service-section">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 wow fadeIn"
            data-wow-duration="2s"
          >
            <div className="view-service-section-wrapper">
              <SectionTitle
                section="Services at a glance"
                title="Software & IT services for you"
              />
              <p className="pera">
                We help businesses to boost performance technically and work on
                initiatives to enhance brand presence on the market, develop a
                digital platform that fits your exact needs in terms of
                real-time solutions, and define a clear roadmap for improvement.
              </p>
              <SectionTitle description="Our professional services include Web & Software Solutions, E-commerce Development, User Experience (UI/UX) Design, Digital Marketing, Multimedia and Printing. Using our experienced professionals, we help businesses grow and prosper. " />
              <Link href="/service">
                <a className="btn-two mt-35">View Services</a>
              </Link>
            </div>
          </div>
          <div
            className="featureservices col-lg-6 mt-5 mt-lg-0  wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div
              className={
                HomeStyle.viewServiceBg + " " + "view-service-right-wrapper"
              }
            >
              <div className="row">
                {services.map((service, index) => {
                  return (
                    <div
                      className="col-lg-6 col-sm-6 "
                      style={{
                        marginTop:
                          index === 1 ? "7.5%" : index === 2 ? "-7.5%" : "0px",
                        position: "relative",
                      }}
                      data-wow-duration="1s"
                      data-wow-delay="1s"
                      key={service.id}
                    >
                      {/* <p>{}</p> */}
                      <Card>
                        <Card.Body>
                          {index === 0 && <Badge bg="danger">Hot</Badge>}
                          <FaCloud />

                          <Card.Title>{service.service_title}</Card.Title>
                          <Card.Text
                            dangerouslySetInnerHTML={{
                              __html: `${service.service_desc}`,
                            }}
                          ></Card.Text>
                          <Card.Text>
                            <div>
                              <Link
                                href={`/service/category/${service.service_slug}`}
                              >
                                <a>
                                  Service Details <FaAngleRight />
                                </a>
                              </Link>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
