import InnerHead from "../../components/innerHead";

import WhatsappChat from "../../components/whatsappChat";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ServiceItem from "./serviceItem";
import Meta from "../../components/Meta";
import axios from "axios";
import { server } from "../../config/index";

import { Card } from "react-bootstrap";
import Link from "next/link";
import serviceImage from "/public/page-image/service.jpg";

import { FaCloud, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import SectionTitle from '../../components/SectionTitle'
import ThreeDCard from 'react-animated-3d-card'
import { Spinner } from "react-bootstrap";

export default function Services({ categories }) {
  // const [allServices, setAllServices] = useState(services);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();
  }, []);
  console.log(categories)

  return (
    <>
      {/* <InnerHead title="Service" img={serviceImage} isDynamic={false} /> */}
      <Meta title="Service" />
      <WhatsappChat />

      <div className="service-all-area mt-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="section-title text-center mb-40">
                <h3>Services We Provide</h3>
                <p style={{ textAlign: 'center' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non commodi magnam aliquam nisi fugiat quasi eveniet quas rem neque soluta minima delectus dignissimos illo, qui, eius velit. Temporibus, cupiditate?</p>
              </div>
            </div>

            <div className="col-md-12">
              {
                categories?.map(category => (
                  <div key={category.id} className="service-all-wrap mb-40">
                    <div className="row align-items-center">
                      <div className="col-md-5">
                        <div className="service-all-left">
                          <ThreeDCard style={{
                            width: '400px',
                            height: '435px',
                            cursor: 'pointer',
                            backgroundImage: `url(${server}/${category.image})`,

                          }} />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="service-all-right">
                          <div className="section-title">
                            <h3 style={{ color: '#Fff' }}>{category.category_name}</h3>
                          </div>
                          <SingleService singleCategory={category} />


                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>





      {/* VIEW SERVICE AREA */}
    </>
  );
}


function SingleService({ singleCategory }) {
  const [serviceItems, setServiceItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${server}/api/service-category/${singleCategory.category_slug}`)
      .then((res) => {
        setServiceItems(res.data.data);
      });
  }, []);


  return (
    <>
      {
        serviceItems.length > 0 ?
          <div>
            <div className="serviceItems-featured">
              <ul>
                <div className="row">
                  {
                    serviceItems?.map((item, index) => (
                      item.isFeatured == 1 && (
                        index % 2 == 0 ? <div key={item.id} className="col-md-6">
                          <li>
                            <Link href={`service/${item.service_slug}`}>
                              <a >{item.service_title}</a>
                            </Link>

                          </li>
                        </div> : <div key={item.id} className="col-md-6">
                          <li >
                            <Link href={`service/${item.service_slug}`}>
                              <a >{item.service_title}</a>
                            </Link>
                          </li>
                        </div>


                      )
                    ))
                  }
                </div>
              </ul>
            </div>


            <div className="serviceItems-nonfeatured">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <div className="row">
                      {
                        serviceItems?.map((item, index) => (
                          item.isFeatured == 0 && (
                            index % 2 == 0 ? <div key={item.id} className="col-md-6">
                              <li>
                                <Link href={`service/${item.service_slug}`}>
                                  <a >{item.service_title}</a>
                                </Link>

                              </li>
                            </div> : <div key={item.id} className="col-md-6">
                              <li >
                                <Link href={`service/${item.service_slug}`}>
                                  <a >{item.service_title}</a>
                                </Link>
                              </li>
                            </div>


                          )
                        ))
                      }
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div> : <div className="  d-flex justify-content-center align-items-center pt-50">
            <Spinner animation="border" role="status">
              <span className="visually-hidden text-center">Loading...</span>
            </Spinner>
          </div>
      }
    </>
  );
}



export async function getStaticProps() {
  const res = await fetch(`${server}/api/serviceAllCategory`);
  const categories = await res.json();

  return {
    props: {
      categories,
    },
    revalidate: 10,
  };
}
