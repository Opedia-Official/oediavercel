import { Card } from "react-bootstrap";
import InnerHead from "../../../components/innerHead";
import Link from "next/link";

import { BiRightArrowAlt } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";
import { FaCloud, FaDatabase } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import WhatsappChat from "../../../components/whatsappChat";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import ServiceItem from "../serviceItem";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home({ services }) {
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

  useEffect(() => {
    axios.get(`${server}/api/service-category/${id}`).then((res) => {
      console.log("allData Single compornent single data ", res.data.data);
      setService(res.data.data);
      setDescriptionCat(res.data.desc);
    });
  }, [id]);

  console.log("services id: ", id);

  const servicesTitle =
    id && id.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, " ");

  return (
    <>
      <InnerHead title={servicesTitle} />
      <Meta title={id} />
      <WhatsappChat />
      {/* VIEW SERVICE AREA */}
      <div className="view-service-page mb-100 mt-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                <h5>Services</h5>
                <h3>Our Services</h3>
                <br />
                <br />
                <p style={{ textAlign: "center" }}>
                  {descriptionCat.length && descriptionCat}
                </p>
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

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="251, 129, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
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
