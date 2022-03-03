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
      <InnerHead title="Service" img={serviceImage} isDynamic={false} />
      <Meta title="Service" />
      <WhatsappChat />
     
      <div className="service-all-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {
                 categories?.map(category=>(
                  <div className="service-all-wrap mb-40">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className="service-all-left">
                        <ThreeDCard  style={{
                          width: '450px',
                          height: '500px',
                          cursor: 'pointer',
                          backgroundImage:`url(${server}/${category.image})`,
                          
                        }}/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="service-all-right">
                              <div className="section-title">
                                  <h3 style={{color:'#Fff'}}>{category.category_name}</h3>
                              </div>
                              <SingleService singleCategory = {category} />
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
    <div className="serviceItems-featured">
    <ul>
      <div className="row">
        {
        serviceItems?.map((item,index)=>(
          item.isFeatured ==1 && (
                index%2 == 0 ? <div className="col-md-6">
                <li><a href="#">{item.service_title}</a></li>
              </div> : <div className="col-md-6">
                <li><a href="#">{item.service_title}</a></li>
              </div>
              
            
            )
            ))
          }
          </div>
        </ul>
      </div>

          {/* Non featured */}
          <div className="serviceItems-nonfeatured">
          <div className="row">
            <div className="col-md-12">
                <ul>
                  {
                  serviceItems?.map(item=>(
                    item.isFeatured ==0 && (<li><a href="#">{item.service_title}</a></li>
                    )
                  ))
                  }
              </ul>
            </div>
          </div>
        </div>    
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
