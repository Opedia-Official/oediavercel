// import React from "react";
import Style from "../../styles/singleService.module.css";
import WhatsappChat from "../../components/whatsappChat";
import Image from "next/image";
import { server } from "../../config";
import Meta from "../../components/Meta";
import Link from "next/link";
import {
  FaRegEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";



function SinglePage({services,relatedServices}) {

  return (
    <div className="container my-5 py-5">
      <WhatsappChat />
      <Meta title={services?.seo_title} description={services?.seo_description} />
      <div className={"row"}>
        <div className="col-lg-8  col-sm-12 col-xs-12">
        {<h2 className={Style.title}>{services?.service_title}</h2>}
          <div className="">
            {services?.featured_img && (
              <Image
                src={`${server}/${services?.featured_img}`}
                alt={services?.service_title}
                width={750}
                height={450}
              />
            )}
              <div className="mt-30">
              <ServiceDetails
               service={services}
            />
              </div>
          </div>
        </div>
        <div className={"col-lg-4  col-sm-12 col-xs-12 px-5 mt-4 mt-lg-0"}>
          <div className="sidebarSingle">
            <h2 className={Style.title}>Related Service </h2>
            <div className={Style.service}>
              <ul>
                { relatedServices && relatedServices?.map((item) => (
                    <li key={item.id}>
                      <Link href={`/service/${item?.service_slug}`}>
                        <a className="Link"> {item?.service_title} </a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

function ServiceDetails({ service }) {
  return (
    <>
      {service ? (
        <div>
            <div  
            dangerouslySetInnerHTML={{
              __html: `${service?.service_desc}`,
            }}
          className={Style.pera}
        ></div>
        <div className="training-contact">
        <ul className="social-info text-center text-md-start">
            <li><p style={{fontSize: '20px',
              color:'#133344',
              lineHeight: '30px',
              fontWeight: "600" }}>Contact Us at:</p></li>
          <li>
            <a
              className=''
              href="mailto: info@opediatech.com"
            >
              <span className="s-icon">
                <FaRegEnvelope />
              </span>
              info@opediatech.com
            </a>
          </li>
          <li style={{ marginLeft: "15px" }}>
            <a
              href="tel:+8801978159172"
              className=''
            >
              <span className="s-icon">
                <FaPhoneAlt />
              </span>
              +8801978159172
            </a>
          </li>
        </ul>
        </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}



// export async function getStaticPaths() {
//   const resp = await fetch(`${server}/api/service`,{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'User-Agent': '*',
//     },
//   });
//   const services = await resp.json();
//   const paths = services?.map((service) => {
//     return {
//       params: {
//         slug: `${service?.service_slug}`,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: true,
//   };
// }


// export async function getStaticProps({params: {slug}}) {
//   const res = await fetch(`${server}/api/service/${slug}`,{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'User-Agent': '*',
//     },
//   });
//   const services = await res.json();

//   const relRes =  await fetch(`${server}/api/related-service/${slug}`,{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'User-Agent': '*',
//     },
//   }); 
//   const relatedServices = await relRes.json();

//   return {
//     props: {
//       services,
//       relatedServices
      
//     },
//     revalidate: 10,
//   };
// }


export async function getServerSideProps({params: {slug}}) {



    const res = await fetch(`${server}/api/service/${slug}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const services = await res.json();

  const relRes =  await fetch(`${server}/api/related-service/${slug}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  }); 
  const relatedServices = await relRes.json();

  // Pass data to the page via props
  return { props: { services,relatedServices } }
}

