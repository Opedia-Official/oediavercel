// import React from "react";
import Style from "../../styles/singleService.module.css";

import dynamic from "next/dynamic";
import WhatsappChat from "../../components/whatsappChat";
import Image from "next/image";
import InnerHead from "../../components/innerHead";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { server } from "../../config";
import axios from "axios";
import { useState } from "react";
import Meta from "../../components/Meta";
import Link from "next/link";
import { Spinner } from "react-bootstrap";


function SinglePage({ singleService, training }) {
  const router = useRouter();
  const { id } = router.query;

  const [leftCategory, setLeftCategory] = useState([]);
  const [featureImage, setFeatureImage] = useState(null);
  const [servicesSingle, setServicesSingle] = useState(training);

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
    setServicesSingle(training);
  }, [id]);

  console.log("Params ID", id);

  return (
    <div className="container my-5 py-5">
      <WhatsappChat />
      <Meta title={id} />
      <div className={"row"}>
        <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
          <div className="">
            {featureImage && (
              <Image
                src={`${server}/${featureImage}`}
                alt="footer"
                width={750}
                height={450}
                priority
              />
            )}

            <ServiceDetails
              setFeatureImage={setFeatureImage}
              training={servicesSingle}
              slug={id}
            />
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
              </ul>
            </div>
          </div>
          {/* <div className={Style.opningHour}>
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
          <Link href="/service">
            <a>Service Details </a>
            <a >Service Details <BsArrowRightCircleFill />{" "}</a>
          </Link>
        </div>
      </div> */}
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
    </div>
  );
}

export default SinglePage;

function ServiceDetails({ slug, setFeatureImage, training }) {
  // const [content, setContent] = useState("");
  const [content, setContent] = useState(training);

  // useEffect(() => {
  //   const marketingData = axios
  //     .get(`${server}/api/service/${slug}`)
  //     .then((res) => {
  //       console.log("allData setContent ", res.data.featured_img);

  //       setContent(res.data);
  //       setFeatureImage(res.data.featured_img);
  //     });
  // }, [slug]);

  useEffect(() => {
    setFeatureImage(content.featured_img);
    setContent(training);
  }, [slug, training]);

  return (
    <>
      {/* <Meta title={content?.service_title} /> */}
      {content ? <h2 className={Style.title}>{content?.service_title}</h2> : ""}
      {content ? (
        <div
          dangerouslySetInnerHTML={{
            __html: `${content?.service_desc}`,
          }}
          className={Style?.pera}
        ></div>
      ) : (
        // <Spinner animation="border" />
        ""
      )}
      <h2 className={Style.title}>{content?.service_title}</h2>

      <div
        dangerouslySetInnerHTML={{
          __html: `${content?.service_desc}`,
        }}
        className={Style?.pera}
      ></div>
    </>
  );
}

export async function getStaticPaths() {
  const resp = await fetch(`${server}/api/service`);
  const trainings = await resp.json();

  const paths = trainings.map((training) => {
    return {
      params: {
        id: `${training?.service_slug}`,
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
  const res = await fetch(`${server}/api/service/${params.id}`);
  const training = await res.json();
  return {
    props: {
      training,
    },
    revalidate: 10,
  };
}
