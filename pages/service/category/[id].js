import { Card } from "react-bootstrap";
import InnerHead from "../../../components/innerHead";

import WhatsappChat from "../../../components/whatsappChat";
import { useEffect } from "react";

import ServiceItem from "../serviceItem";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

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
  const [imageCat, setImageCat] = useState("");

  useEffect(() => {
    axios.get(`${server}/api/service-category/${id}`).then((res) => {
      console.log("allData Single compornent single data ", res.data.data);
      setService(res.data.data);
      setDescriptionCat(res.data.desc);
      setImageCat(res.data.image);
    });
  }, [id]);

  console.log("services id3..3: ", id);

  const servicesTitle =
    id && id.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, " ");

  return (
    <>
      <InnerHead title={servicesTitle} img={imageCat} />
      <Meta title={servicesTitle} />
      <WhatsappChat />
      {/* VIEW SERVICE AREA */}
      <div className="view-service-page mb-100 ">
        <div className="container">
          <div className="row justify-content-center">
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
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                <h5>Services</h5>
                <h3>Our Services</h3>
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
                        <div
                          key={item.id}
                          className="col-lg-4 col-sm-6 mb-5 wow fadeIn wow fadeIn"
                        >
                          <ServiceItem item={item} />
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
