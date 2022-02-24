
import React from 'react';
import { IoIosArrowRoundDown} from "react-icons/Io";
  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";
  // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
// import Swiper core and required modules
import SwiperCore, {
    Navigation,  Pagination
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Navigation,Pagination]);


export default function Testimonial() {
   
  return <>

      <div className="testimonial-area bg-brand">
        <div className="container">
        <Swiper pagination={true}  navigation={true} className="mySwiper wow fadeIn">
          {/* Single Item */}
              <SwiperSlide> 
                  <div className="testimonial-wrapper text-center">
                      <div className="testimonial-img">
                          <img src="./testimonial/pic-1.png" alt="" />
                          <IoIosArrowRoundDown/>
                      </div>
                      <p className="pera">What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly 
                          good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, 
                          haggle young delinquent say so I said bite your arm off easy peasy.</p>
                    <div className="testimonial-author-info text-center">
                        <h5>Lurch Schpellchek</h5>
                          <p>UI/UX designer</p>
                    </div>
                  </div>
              </SwiperSlide>
          {/* Single Item */}
    
          {/* Single Item */}
            <SwiperSlide>
                  <div className="testimonial-wrapper text-center">
                    <div className="testimonial-img">
                        <img src="./testimonial/pic-1.png" alt="" />
                        <IoIosArrowRoundDown/>
                    </div>
                    <p className="pera">What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly 
                      good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, 
                      haggle young delinquent say so I said bite your arm off easy peasy.</p>
                  <div className="testimonial-author-info text-center">
                      <h5>Lurch Schpellchek</h5>
                        <p>UI/UX designer</p>
                  </div>
                </div>
            </SwiperSlide>
          {/* Single Item */}
          {/* Single Item */}
            <SwiperSlide>
                  <div className="testimonial-wrapper text-center">
                    <div className="testimonial-img">
                        <img src="./testimonial/pic-1.png" alt="" />
                        <IoIosArrowRoundDown/>
                    </div>
                    <p className="pera">What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly 
                      good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, 
                      haggle young delinquent say so I said bite your arm off easy peasy.</p>
                  <div className="testimonial-author-info text-center">
                      <h5>Lurch Schpellchek</h5>
                        <p>UI/UX designer</p>
                  </div>
                </div>
            </SwiperSlide>
          {/* Single Item */}
          {/* Single Item */}
            <SwiperSlide>
                  <div className="testimonial-wrapper text-center">
                    <div className="testimonial-img">
                        <img src="./testimonial/pic-1.png" alt="" />
                        <IoIosArrowRoundDown/>
                    </div>
                    <p className="pera">What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly 
                      good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, 
                      haggle young delinquent say so I said bite your arm off easy peasy.</p>
                  <div className="testimonial-author-info text-center">
                      <h5>Lurch Schpellchek</h5>
                        <p>UI/UX designer</p>
                  </div>
                </div>
            </SwiperSlide>
          {/* Single Item */}
          {/* Single Item */}
            <SwiperSlide>
                  <div className="testimonial-wrapper text-center">
                    <div className="testimonial-img">
                        <img src="./testimonial/pic-1.png" alt="" />
                        <IoIosArrowRoundDown/>
                    </div>
                    <p className="pera">What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly 
                      good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, 
                      haggle young delinquent say so I said bite your arm off easy peasy.</p>
                  <div className="testimonial-author-info text-center">
                      <h5>Lurch Schpellchek</h5>
                        <p>UI/UX designer</p>
                  </div>
                </div>
            </SwiperSlide>
          {/* Single Item */}
    
    
 
  </Swiper>
        </div>
      </div>
  
  
  </>;
}
