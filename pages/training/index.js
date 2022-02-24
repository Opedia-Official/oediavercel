import { Card } from "react-bootstrap";
// import { BiRightArrowAlt } from "react-icons/bi";
import InnerHead from "../../components/innerHead";
import Link from "next/link";
import { useEffect } from "react";
import WhatsappChat from "../../components/whatsappChat";
// import AnimatedCursor from "react-animated-cursor";
import { server } from "../../config";
import Meta from "../../components/Meta";

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
      <InnerHead title="Portfolio" />
      <div className="portfolio-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                <h5>Courses</h5>
                <h3>Our Best Courses.</h3>
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
                      <Card.Img src={`${server}/${course.Featured_img}`} />
                    </Card>
                    <div className="portfolio-info">
                      <span>{course.title}</span>
                      <h2>{course.course_name}</h2>
                      <div>
                        <Link href={`/training/${course.slug}`}>
                          <a>
                            View details
                            {/* View details <BiRightArrowAlt /> */}
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

      {/* 
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='251, 129, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    /> */}
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
