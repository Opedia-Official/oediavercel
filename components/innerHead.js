
import Image from "next/image";
import { server } from "../config/index";

export default function InnerHead({ title, img, isDynamic }) {
  return (
    <>
      <div className="hero-section-area innerHeadArea">
        <div className={" Hero-top-section" + " " + " " + "InnerHead"}>
          <Image
            src={isDynamic == false ? img : `${server}/${img}`}
            alt="Picture of the blah"
            layout="fill"
            className="inner-img"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-area">
                  <h2>{title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
