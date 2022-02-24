import { Card } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";

import { FaCloud } from "react-icons/fa";

import HomeStyle from "../../styles/Home.module.css";
import SectionTitle from "../SectionTitle";

import Link from "next/link";
import { Services } from "../../Utils/fakeData";
export default function ViewService() {
  // const {Section, Services} = ViewServices
  return (
    <div className="view-service-section">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12  wow fadeIn"
            data-wow-duration="2s"
          >
            <div className="view-service-section-wrapper">
              <SectionTitle
                section="About Company"
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
            className="col-lg-6 mt-5 mt-lg-0  wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div
              className={
                HomeStyle.viewServiceBg + " " + "view-service-right-wrapper"
              }
            >
              <div className="row">
                {Services.map((service, index) => {
                  return (
                    <div
                      className="col-lg-6 col-sm-6 "
                      style={{
                        marginTop:
                          index === 1 ? "4.5%" : index === 2 ? "-4.5%" : "0px",
                      }}
                      data-wow-duration="1s"
                      data-wow-delay="1s"
                      key={service.id}
                    >
                      <Card>
                        <Card.Body>
                          <FaCloud />
                          <Card.Title>{service.title}</Card.Title>
                          <Card.Text>{service.desc}</Card.Text>
                          <Card.Text>
                            <div>
                              <Link href={`/service/category/${service.id}`}>
                                <a>
                                  Service Details <BiRightArrowAlt />
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
