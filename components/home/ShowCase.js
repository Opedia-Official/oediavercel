// import { FiShare2 } from "react-icons/Fi";

import SectionTitle from "../SectionTitle";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import { server } from "../../config";
import Image from "next/image";

export default function ShowCase({ portCats }) {
  return (
    <>
      {/* SHOWCASE GALLARY AREA */}
      <div id="portfolio" className="showCase-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
            <SectionTitle
                section="Check Our Portfolio"
                // title="Our Recent '<br/>' Projects "
              />
              <div className="section-title">
                  <h3> Our Recent <br/> Projects</h3>
                </div>
            
            </div>
            <div className="col-md-6">
              <SectionTitle description="230+ clients are already growing their businesses. With our quality service, they are able to stand out from the crowd. Let us put your vision into practice." />
            </div>
          </div>
          <div
            className="row mt-30 justify-content-center wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            {portCats?.map((cat) => {
              return (
                cat?.isFeatured == 1 && (
                  <div key={cat.id} className="col-md-5 col-sm-8">
                    <div className="showCase-wrap mb-4 mb-md-0">
                      <div className="show-case-features s-img-wrap"  >
                        <Image
                          src={`${server}/${cat.img}`}
                          alt={cat?.category_name}
                          width={500}
                          height={635}
                        />
                      </div>
                      <div className="show-case-info">
                        <div className="s-action">
                        </div>
                        <div className="show-case-text">
                          <h4>
                            <Link
                              href={`/portfolio/category/${cat?.category_slug}`}
                            >
                              <a> {cat?.category_name}</a>
                            </Link>
                          </h4>
                          <p>{cat?.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
            <div className="col-md-7">
              <div className="row justify-content-center">
                {portCats?.map((port) => {
                  return (
                    port?.isFeatured == null && (
                      <div
                        className="col-md-6 col-sm-6 wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0.5s"
                        key={port?.id}
                      >
                        <div className="showCase-wrap mb-3 ">
                          <div className="show-case-child s-img-wrap">
                            <Image
                              src={`${server}/${port?.img}`}
                              alt="category_name"
                              width={400}
                              height={357 }
                            />
                          </div>
                          <div className="show-case-info">
                            <div className="s-action">
                            </div>
                            <div className="show-case-text">
                              <h4>
                                <Link
                                  href={`/portfolio/category/${port?.category_slug}`}
                                >
                                  <a> {port?.category_name}</a>
                                </Link>
                              </h4>
                              <p>{port?.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  );
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
