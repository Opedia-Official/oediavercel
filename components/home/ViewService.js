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
                title="Software Company At Your Service "
              />
              <p className="pera">
              We As A Software Company Help Businesses To Boost Performance And Work On Initiatives To Enhance Brand Presence On The Market, Develop A Digital Platform That Fits Your Exact Needs In Terms Of Real-Time Solutions, And Define A Clear Roadmap For Improvement.
              </p>
              <SectionTitle description="Our Professional Services Include Web & Software Solutions, E-Commerce Development, User Experience (UI/UX) Design, Digital Marketing, Multimedia & Printing. Using Our Experienced Professionals, We Help Businesses Grow And Prosper." />
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
                      <Card>
                        <Card.Body>
                          {index === 0 && <Badge bg="danger">Hot</Badge>}
                          <FaCloud />

                          <Card.Title>{service.service_title}</Card.Title>
                          {/* <Card.Text
                          
                             dangerouslySetInnerHTML={{
                              __html: `${service.service_desc.split(' ', 20)}`,
                            }}
                          ></Card.Text> */}
                          
                          <Card.Text>
                           
                              <Link
                                href={`/service/${service.service_slug}`}
                              >
                                <a>
                                  Service Details <FaAngleRight />
                                </a>
                              </Link>
                            
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
