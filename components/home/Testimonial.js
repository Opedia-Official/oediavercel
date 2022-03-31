import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function Testimonial() {
  return (
    <>
      <div className="testimonial-area bg-brand">
        <div className="container">
          <Swiper
            pagination={true}
            navigation={true}
            className="mySwiper wow fadeIn"
          >
            {/* Single Item */}
            <SwiperSlide>
              <div className="testimonial-wrapper text-center">
                <div className="testimonial-img">

                  <Image
                    src="/testimonial/pic-1.jpg"
                    alt="category_name"
                    width={77}
                    height={70}
                  />
                  <FaArrowDown />
                </div>
                <p className="pera">
                  What a load of rubbish bits and bobs pear shaped owt to do
                  with me bubble and squeak jolly good morish tinkety tonk old
                  fruit, car boot my good sir buggered plastered cheeky David,
                  haggle young delinquent say so I said bite your arm off easy
                  peasy.
                </p>
                <div className="testimonial-author-info text-center">
                  <p>FullStake Web Developer</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Single Item */}

            {/* Single Item */}
            <SwiperSlide>
              <div className="testimonial-wrapper text-center">
                <div className="testimonial-img">
                  <Image
                    src="/testimonial/pic-3.jpg"
                    alt="category_name"
                    width={77}
                    height={70}
                  />
                  <FaArrowDown />
                </div>
                <p className="pera">
                  What a load of rubbish bits and bobs pear shaped owt to do
                  with me bubble and squeak jolly good morish tinkety tonk old
                  fruit, car boot my good sir buggered plastered cheeky David,
                  haggle young delinquent say so I said bite your arm off easy
                  peasy.
                </p>
                <div className="testimonial-author-info text-center">
                  <p>UI/UX designer</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Single Item */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="testimonial-wrapper text-center">
                <div className="testimonial-img">
                  <Image
                    src="/testimonial/pic-4.jpg"
                    alt="category_name"
                    width={77}
                    height={70}
                  />
                  <FaArrowDown />
                </div>
                <p className="pera">
                  What a load of rubbish bits and bobs pear shaped owt to do
                  with me bubble and squeak jolly good morish tinkety tonk old
                  fruit, car boot my good sir buggered plastered cheeky David,
                  haggle young delinquent say so I said bite your arm off easy
                  peasy.
                </p>
                <div className="testimonial-author-info text-center">
                  {/* <h5>Laila Siddiqa</h5> */}
                  <p>Graphic designer</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Single Item */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="testimonial-wrapper text-center">
                <div className="testimonial-img">
                  <Image
                    src="/testimonial/pic-5.jpg"
                    alt="category_name"
                    width={77}
                    height={70}
                  />
                  <FaArrowDown />
                </div>
                <p className="pera">
                  What a load of rubbish bits and bobs pear shaped owt to do
                  with me bubble and squeak jolly good morish tinkety tonk old
                  fruit, car boot my good sir buggered plastered cheeky David,
                  haggle young delinquent say so I said bite your arm off easy
                  peasy.
                </p>
                <div className="testimonial-author-info text-center">
                  <p>UI/UX designer</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Single Item */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="testimonial-wrapper text-center">
                <div className="testimonial-img">
                  <Image
                    src="/testimonial/pic-6.jpg"
                    alt="category_name"
                    width={77}
                    height={70}
                  />
                  <FaArrowDown />
                </div>
                <p className="pera">
                  What a load of rubbish bits and bobs pear shaped owt to do
                  with me bubble and squeak jolly good morish tinkety tonk old
                  fruit, car boot my good sir buggered plastered cheeky David,
                  haggle young delinquent say so I said bite your arm off easy
                  peasy.
                </p>
                <div className="testimonial-author-info text-center">
                  <p>UI/UX designer</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Single Item */}
          </Swiper>
        </div>
      </div>
    </>
  );
}
