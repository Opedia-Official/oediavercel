import { FaYoutube } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import Image from 'next/image';

import MyVerticallyCentredModal from "../components/MyVerticallyCentredModal";

export default function ExpTeam({ expertTeams }) {
  const [modalShow, setModalShow] = useState(false);



  return (
    <>
      <div className="expTeam-section ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 wow fadeIn" data-wow-duration="2s">
              <div className="expTeam-left ">
                
                <img className="parent-pic" src="/experienceTeam/pic-1.png" alt="" />
              
                
                <div className="child d-none d-xl-block">
                    
                  <img src="./experienceTeam/pic-2.png" alt="" />
                </div>
                <img
                  className="exp-dots"
                  src="./experienceTeam/dot_shapes.png"
                  alt=""
                />

                <div className="exp-left-text ">
                  <div className="exp-left-wrap d-flex align-items-center">
                    <h3>
                      {" "}
                      25 <span>+</span>
                    </h3>
                    <h4>Years of experience we just achived </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  wow fadeIn" data-wow-duration="2s">
              <div className="expTeam-right">
                <SectionTitle
                  section=" About Company"
                  title="We team of experience It Specialties."
                  description="2 years+ serving as a leading software company. A unique workflow and high-quality services are what sets us apart from competitors. 
                  We are the professionals you can turn to when you need help. By utilizing our expertise, we will find the right solution for you as soon as possible. The way we operate 
                  "
                />
                <div className="expTeam-youtube-section">
                  <div className="row justify-content-center">
                    <div className="col-6">
                      <ul>
                        <li>
                          <div>
                            <input
                              className="styled-checkbox"
                              id="styled-checkbox-1"
                              checked
                              type="checkbox"
                              value="value2"
                            />
                            <label htmlFor="styled-checkbox-1">Identify</label>
                          </div>

                          {/* <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                    
                                    <MyVerticallyCentredModal
                                            url= "https://youtu.be/iO40U7nP6mY"
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        /> */}
                        </li>
                        <li>
                          <div>
                            {" "}
                            <input
                              className="styled-checkbox"
                              id="styled-checkbox-2"
                              checked
                              type="checkbox"
                              value="value2"
                            />
                            <label htmlFor="styled-checkbox-2">Analyze</label>
                          </div>

                          {/* <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                        
                                        <MyVerticallyCentredModal
                                            url= "https://youtu.be/iO40U7nP6mY"
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        /> */}
                        </li>
                        <li>
                          <div>
                            {" "}
                            <input
                              className="styled-checkbox"
                              id="styled-checkbox-3"
                              checked
                              type="checkbox"
                              value="value2"
                            />
                            <label htmlFor="styled-checkbox-3">Design </label>
                          </div>

                          {/* <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                            
                                            <MyVerticallyCentredModal
                                                url= "https://youtu.be/iO40U7nP6mY"
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            /> */}
                        </li>
                        {/* <li> 
                                        <div> <input onChange={isChecked} className="styled-checkbox" id="styled-checkbox-3"  type="checkbox" value="value2"  />
                                    <label htmlFor="styled-checkbox-3">Monitor progress </label></div>
                                                                        
                                        
                                            <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                            
                                            <MyVerticallyCentredModal
                                                url= "https://youtu.be/iO40U7nP6mY"
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                    </li> */}
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul>
                        <li>
                          <div>
                            <input
                              className="styled-checkbox"
                              id="styled-checkbox-1"
                              checked
                              type="checkbox"
                              value="value2"
                            />
                            <label htmlFor="styled-checkbox-1">Develop</label>
                          </div>

                          {/* <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                    
                                    <MyVerticallyCentredModal
                                            url= "https://youtu.be/iO40U7nP6mY"
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        /> */}
                        </li>
                        <li>
                          <div>
                            {" "}
                            <input
                              className="styled-checkbox"
                              id="styled-checkbox-2"
                              checked
                              type="checkbox"
                              value="value2"
                            />
                            <label htmlFor="styled-checkbox-2">Implement</label>
                          </div>

                          {/* <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                        
                                        <MyVerticallyCentredModal
                                            url= "https://youtu.be/iO40U7nP6mY"
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        /> */}
                        </li>
                        <li>
                          <div>
                            {" "}
                            <input
                              className="styled-checkbox"
                              id="styled-checkbox-3"
                              checked
                              type="checkbox"
                              value="value2"
                            />
                            <label htmlFor="styled-checkbox-3">Measure</label>
                          </div>

                          {/* <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                            
                                            <MyVerticallyCentredModal
                                                url= "https://youtu.be/iO40U7nP6mY"
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            /> */}
                        </li>
                        {/* <li> 
                                        <div> <input onChange={isChecked} className="styled-checkbox" id="styled-checkbox-3"  type="checkbox" value="value2"  />
                                    <label htmlFor="styled-checkbox-3">Monitor progress </label></div>
                                                                        
                                        
                                            <a onClick={() => setModalShow(true)}  > <FaYoutube/></a>
                                            
                                            <MyVerticallyCentredModal
                                                url= "https://youtu.be/iO40U7nP6mY"
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                    </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
