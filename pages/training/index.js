import { Card } from "react-bootstrap";

import InnerHead from "../../components/innerHead";
import Link from "next/link";
import { useEffect } from "react";
import WhatsappChat from "../../components/whatsappChat";

import { server } from "../../config";
import Meta from "../../components/Meta";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

import trainingImage from "/public/page-image/training.png";
export default function Training({ courses }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <Meta title="training" />
      <WhatsappChat />
  
      <div className="portfolio-area ">
        <div className="container mt-50">
          <div className="row ">
          <div className="col-md-8 offset-md-2">
                <div className="section-title text-center mb-40">
                      <h3>Courses We Provide</h3>
                      <p style={{textAlign:'center'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non commodi magnam aliquam nisi fugiat quasi eveniet quas rem neque soluta minima delectus dignissimos illo, qui, eius velit. Temporibus, cupiditate?</p>
                </div>
            </div>
          </div>
          <div
            className="row   wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            {courses?.map((course) => {
              return (
                <div key={course.id} className="col-lg-4 col-sm-6">
                  <div className="portfolio-items mb-100">
                    <Card>
                      <Image
                        src={`${server}/${course.Featured_img}`}
                        alt="footer"
                        width={370}
                        height={367}
                      />
                      {/* <Card.Img src={`${server}/${course.Featured_img}`} /> */}
                    </Card>
                    <div className="portfolio-info">
                      <span>{course.title}</span>
                      <h2>{course.course_name}</h2>
                      <div>
                        <Link href={`/training/${course.slug}`}>
                          <a>
                            View details <FaAngleRight />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/course`);
  const courses = await res.json();

  return {
    props: {
      courses,
    },
    revalidate: 10,
  };
}
