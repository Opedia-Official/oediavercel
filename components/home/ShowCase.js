import { useState } from "react";

import {
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";
import { FiShare2 } from "react-icons/Fi";

import SectionTitle from "../SectionTitle";
// Import Swiper styles
import "swiper/css";
import { gallaries, sliderData } from "../../Utils/fakeData";
import Link from "next/link";
import { server } from "../../config";
export default function ShowCase({ portCats }) {
  const [isReact, setIsReact] = useState(false);
  // const {Section,featured,gallaries}= Gallaries
  // const {sectionHead,title, description}  = Section;

  console.log("portfolios posts: ", portCats);

  return (
    <>
      {/* SHOWCASE GALLARY AREA */}

      <div id="portfolio" className="showCase-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <SectionTitle
                section=" About Company"
                title="Our Recent Projects Showcase Gallery.  "
              />
            </div>
            <div className="col-md-6">
              <SectionTitle description="230+ clients are already growing their businesses. With our quality service, they are able to stand out from the crowd. Let us put your vision into practice." />
            </div>
          </div>
          <div
            className="row mt-50 justify-content-center wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
             {
               portCats.map((cat)=>{
                 return (
                  cat.isFeatured == 1 && (
                    <div key={cat.id} className="col-md-5 col-sm-8">
                    <div className="showCase-wrap mb-4 mb-md-0">
                      <div className="show-case-features  s-img-wrap">
                        <img src={`${server}/${cat.img}`} alt={cat.category_name} />
                      </div>
                      <div className="show-case-info">
                        <div className="s-action">
                          {isReact ? (
                            <span onClick={() => setIsReact(!isReact)}>
                              <FaHeart />
                            </span>
                          ) : (
                            <span onClick={() => setIsReact(!isReact)}>
                              <FaRegHeart />
                            </span>
                          )}
                          <span>
                            <FiShare2 />
                          </span>
                        </div>
                        <div className="show-case-text">
                          <h4>
                          <Link href={`/portfolio/category/${cat.category_slug}`}>
                                <a> {cat.category_name}</a>
                              </Link>
                          </h4>
                          <p>{cat.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  )

                 
                 )
               })
             }


            <div className="col-md-7">
              <div className="row justify-content-center">
                {portCats.map((port) => {
                  return (
                    port.isFeatured == null && (
                      <div
                      className="col-md-6 col-sm-6  wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                      key={port.id}
                    >
                      <div className="showCase-wrap mb-4 ">
                        <div className="show-case-child s-img-wrap">
                          <img
                            src={`${server}/${port.img}`}
                            alt={port.category_name}
                          />
                        </div>
                        <div className="show-case-info">
                          <div className="s-action">
                            {isReact ? (
                              <span onClick={() => setIsReact(!isReact)}>
                                <FaHeart />
                              </span>
                            ) : (
                              <span onClick={() => setIsReact(!isReact)}>
                                <FaRegHeart />
                              </span>
                            )}
                            <span>
                              <FiShare2 />
                            </span>
                          </div>
                          <div className="show-case-text">
                            <h4>
                              <Link href={`/portfolio/category/${port.category_slug}`}>
                                <a> {port.category_name}</a>
                              </Link>
                            </h4>
                            <p>{port.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                   
                  )
                })}
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* SHOWCASE GALLARY  AREA */}
    </>
  );
}
