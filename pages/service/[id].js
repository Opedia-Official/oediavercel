// import React from "react";
import Style from "../../styles/singleService.module.css";

import { BsArrowRightCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import WhatsappChat from "../../components/whatsappChat";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { server } from "../../config";
import axios from "axios";
import { useState } from "react";
import Meta from "../../components/Meta";
import Link from "next/link";

let AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});




// export const getStaticPaths = async() => {
//   const { id } = router.query;

//   const res = await fetch(`${server}/api/service`);
//   const services = await res.json();


//   const paths = services.map(item => {
//     console.log("logged item", item)
//     return {
//       params: {id: item.id}
//     }
//   })


//   return {
//     paths,
//     fallback: false 

// }
// }





// export async function getStaticProps(context) {

//   const id = context.params.id


//   const res = await fetch(`${server}/api/service-category/${id}`);
//   const singleService = await res.json();

//   return {
//     props: {
//       singleService,
//     },
//     revalidate: 10,
//   };
// }





function SinglePage({singleService}) {
  const router = useRouter();
  const { id } = router.query;

  const [leftCategory, setLeftCategory] = useState([]);
  const [featureImage, setFeatureImage] = useState(null);

  useEffect(() => {
    axios.get(`${server}/api/service-category/${id}`).then((res) => {
      console.log("allData Single compornent single data ", res.data.data);
      setService(res.data.data);
      setDescriptionCat(res.data.desc);
    });

    axios.get(`${server}/api/releted-service/${id}`).then((res) => {
      console.log("all left categories: ", res.data);
      setLeftCategory(res.data);
    });
  }, [id]);

  console.log("leftCategory: singleService", singleService);

  return (
    <div className="container my-5 py-5">
      <WhatsappChat />
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="251, 129, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Meta title={id} />
      {/* <p>Service sategory: {id} </p> */}
      <div className={"row"}>
        <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
          <div className="">
            {featureImage && (
              <img
                className={Style.img}
                src={`${server}/${featureImage}`}
                alt=""
              />
            )}

            <ServiceDetails setFeatureImage={setFeatureImage} slug={id} />
          </div>
        </div>
        <div className={"col-lg-4 col-md-6 col-sm-12 col-xs-12 px-5"}>
          <div className="sidebarSingle">
            <h2 className={Style.title}>All Sections </h2>

            <div className={Style.service}>
              <ul>
                {leftCategory &&
                  leftCategory.map((item) => (
                    <li key={item.id}>
                      <Link href={`/service/${item.service_slug}`}>
                        <a className="Link"> {item.service_title} </a>
                      </Link>
                    </li>
                  ))}
                {/* <li>
                  <Link href={`${ClientURL}/service/category/web-software`}>
                    <a className="Link"> Web Desiginig & Development </a>
                  </Link>
                </li>
                <li>
                  <Link href={`${ClientURL}/service/category/product-design`}>
                    <a className="Link"> Product Desiginig </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${ClientURL}/service/category/digital-marketing`}
                  >
                    <a className="Link"> Digital Marketing </a>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className={Style.opningHour}>
            <h2 className={Style.title}>Opening Hours</h2>

            <div className={Style.option}>
              <p>Monday - Friday</p>
              <p>9.00 - 20.00</p>
            </div>
            <div className={Style.option}>
              <p>Monday - Friday</p>
              <p>9.00 - 20.00</p>
            </div>
            <div className={Style.option}>
              <p>Monday - Friday</p>
              <p>9.00 - 20.00</p>
            </div>
            <div className={Style.serviceBtn}>
                <Link href='/service'>
                   <a >Service Details <BsArrowRightCircleFill />{" "}</a>
                </Link>
            </div>
          </div>
          {/* <div className="mt-5">
            <h2 className={Style.title}>Image Gallery</h2>
            <img
              className={Style.imgGalery}
              src="https://images.unsplash.com/photo-1640622661329-67f406a77d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 className={Style.title}>Services</h2>
            <p className={Style.pera}>
              Lorem ipsum dolor sit amet consect sit amet consect sit amet
              consect
            </p>
          </div> */}
        </div>
      </div>

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="251, 129, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  );
}

export default SinglePage;



function ServiceDetails({ slug, setFeatureImage }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const marketingData = axios
      .get(`${server}/api/service/${slug}`)
      .then((res) => {
        console.log("allData setContent ", res.data.featured_img);

        setFeatureImage(res.data.featured_img);
        setContent(res.data);
      });
  }, [slug]);
  return (
    <>
      <Meta title={content?.service_title} />
      <h2 className={Style.title}>{content?.service_title}</h2>

      <p
        dangerouslySetInnerHTML={{
          __html: `${content?.service_desc}`,
        }}
        className={Style?.pera}
      ></p>
    </>
  );
}

