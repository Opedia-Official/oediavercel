import HomeStyle from "../styles/Home.module.css";
import { Breadcrumb } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { server } from "../config/index";
export default function InnerHead({ title, img }) {
  return (
    <>
      <div className="hero-section-area innerHeadArea">
        <div className={" Hero-top-section" + " " + " " + "InnerHead"}>
          <Image
            src={img ? server + "/" + img : "/hero/banner.png"}
            alt="Picture of the author"
            layout="fill"
            className="inner-img"
          />
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
