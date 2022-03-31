import { Card, Spinner } from "react-bootstrap";
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
                <p style={{ textAlign: 'center' }} >“Skill can shape your career and earning that skill is your responsibility” <br /> Opedia technologies IT training has your back to set a milestone towards that golden journey of enhancing your skill and becoming an expert in your desired track. </p>
              </div>
            </div>
          </div>
          <div
            className="row   wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            {courses.length > 0 ? 
            courses?.map((course) => {
              return (
                <div key={course.id} className="col-lg-6 col-sm-6">
                  <div className="portfolio-items mb-100">
                    <Card>
                      <Image
                        src={`${server}/${course.Featured_img}`}
                        alt={course.title}
                        width={400}
                        height={367}
                        priority
                      />
                    </Card>
                    <div className="portfolio-info">
                     
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
            }):
            <div className="  d-flex justify-content-center align-items-center pt-50">
            <Spinner animation="border" role="status">
              <span className="visually-hidden text-center">Loading...</span>
            </Spinner>
          </div>
            }
            <div className="col-md-12 training-details-sec mt-5">

              <div className="row">
                <div className="col-md-4">
                  <Image
                    src={trainingImage}
                    alt="Service"
                    width={400}
                    height={250}
                    objectFit="cover"
                    className="inner-img "
                  />
                </div>
                <div className="col-md-8">
                  <p> As a sister concern of Opedia technologies, our training venture is already equipped with adequate technical support and intellectual contributors. As an advanced IT training provider, Opedia technologies IT training aims to pioneer the conventional IT training institutes’ culture to improve, by introducing aesthetic training facilities, norms, and effort.
                    We have established our state-of-the-art facility-based training institute with a combination of required training assets and facilities of top-notch quality and support. A training facility with a one-to-one supervision system, friendly mentorship, and career advisor support is available here. </p>
                </div>
              </div>


              <p className="mt-30">  Our ethical view is to facilitate our youth by educating them with proper expertise that can prepare a solid basis for a winning career plan. By focusing on occupational skill base education and learning program, we are planning to contribute to changing a mass group of people who are lagging behind due to proper skills at work or trying to start a career.
                By referring to the youth we suggest the group of young generation that is considered to waste a valuable phase of their life for achieving academic certification only. But due to the lack of applied skill, this bunch of people after graduation are left out with no proper goal or direction.</p>

              <p>    However, demand of skilled manpower in the IT, technical and digital sectors is increasing every year. The job market is no more limited to the regional boundaries anymore. Global recruiters are looking for technical expertise beyond borders, which is proof of the high demand for skilled technical knowledgeable people in the global market.</p>

              <h2>Vision</h2>
              <p> Our vision is to make applied IT education a strong source of skill development that contributes to the development of self-worth and adds value to one’s career growth. In our country, applied education is still considered as an added education system, when people skilled in applied education are very few in numbers.</p>
              <h2> Mission</h2>
              <p> We want to contribute to society by creating opportunity that results in “zero unemployment” in our community and skilled manpower with ample employment opportunities. The more people will be skilled with the right skill set, the more opportunity to get work will be increased.</p>
              <p> In addition, to educate people with the right IT applied education that enhances the right set of skill not just remain as a regular certificate.</p>
              <h2>Offer you professional aid</h2>
              <p>We have designed course modules compatible to develop your professional skill and knowledge on your preferred track. To face the challenging race of perfection with a competitive advantage in the global job marketplace, we offer a comprehensive curriculum with applied technical practice.</p>

              <p> We guide our trainees not only with state-of-the-art training facilities, but also we assist them to make the appropriate career choice. Our industry expert mentors offer a complete package of hard skills, soft skills, and career guidance. We tend to create a visible change in our society about the mindset of education.</p>
              <p>Our understanding of technology has a long history. Being facilitated with our in-house development and production facilities, we are aware of the trending level of technical expertise and technical support needs.</p>


            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/course`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const courses = await res.json();

  return {
    props: {
      courses,
    },
    revalidate: 10,
  };
}
