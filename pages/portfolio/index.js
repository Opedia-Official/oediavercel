import { Card } from "react-bootstrap";

import Link from "next/link";
import { useEffect } from "react";
import WhatsappChat from "../../components/whatsappChat";

import { server } from "../../config";
import Meta from "../../components/Meta";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
export default function Portfolio({ categories }) {
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>
      <Meta seo_title="Our Portfolio" />
      <WhatsappChat />
      <div className="portfolio-area ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title text-center mt-50 mb-50">
                <h5>Best Efforts from us </h5>
                <h3>Our Portfolios</h3>
              </div>
            </div>
          </div>
          <div
            className="row   wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            {categories?.map((category) => {
              return (
                <div key={category.id} className="col-lg-4 col-sm-6">
                  <div className="portfolio-items mb-100">
                    <Card>
                      <Image
                        src={`${server}/${category.img}`}
                        alt={category.title}
                        width={370}
                        height={367}
                      />
                    </Card>
                    <div className="portfolio-info">
                      <span>{category.title}</span>
                      <h2>{category.category_name}</h2>
                      <div>
                        <Link
                          href={`/portfolio/category/${category.category_slug}`}
                        >
                          <a>
                            View Projects <FaAngleRight />
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
  const res = await fetch(`${server}/api/portfolio/category`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const categories = await res.json();

  return {
    props: {
      categories,
    },
    revalidate: 10,
  };
}


