import HomeStyle from "../styles/Home.module.css";
import { Breadcrumb } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function InnerHead({ title }) {
  return (
    <>
      <div className="hero-section-area">
        <div
          className={
            " Hero-top-section" +
            " " +
            HomeStyle.heroBackground +
            " " +
            "InnerHead"
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-area">
                  <h2>{title}</h2>
                  {/* <Breadcrumb >
                     
                      <Breadcrumb.Item > <FaHome/>  <Link  href="/">  Home     </Link> </Breadcrumb.Item>
                  
                      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                      <Link  href="/">  Home     </Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
