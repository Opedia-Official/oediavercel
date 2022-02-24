
import { BsPlayFill} from "react-icons/Bs";
import InnerHead from '../../components/innerHead'
import MyVerticallyCentredModal from '../../components/MyVerticallyCentredModal'
import { useState } from "react";
import WhatsappChat from "../../components/whatsappChat";
import dynamic from 'next/dynamic'


import {server} from "../../config/index"

let AnimatedCursors = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });

import Meta from '../../components/Meta';

export default function TrainingDetails({training}) {

    const [modalShow, setModalShow] = useState(false);
  return <>
        <Meta title={training.title} />
        <InnerHead title={training.title}/>
        <WhatsappChat/>
        <div className="portfolio-details mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="portfolio-details-left">
                        <MyVerticallyCentredModal
                            url= {training.youtube_link}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                            <div className="portfolio-details-lft-img">
                                <img src={`${server}/${training.Featured_img}`} alt="" />
                            </div>
                            
                            <div className="ptflo-button">
                            <span onClick={() => setModalShow(true)}>
                                <BsPlayFill/></span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="portfolio-details-right-wrap">
                                <h3 className="ptf-details-title">Information</h3>

                                <ul className="portfolio-details-info">
                                    <li>
                                        <h4>Course Name :</h4>
                                        <p>{training.course_name}</p>
                                    </li>
                                    <li>
                                        <h4>Duration :</h4>
                                        <p>{training.duration}</p>
                                    </li>
                                    <li>
                                        <h4>Classes :</h4>
                                        <p>{training.classes}</p>
                                    </li>
                                    <li>
                                        <h4>Pre-Requirement :</h4>
                                        <p>{training.pre_requirement}</p>
                                    </li>
                                    <li>
                                        <h4>System Config :</h4>
                                        <p>{training.system_config}</p>
                                    </li>
                                    <li>
                                        <h4>Course Fee Online :</h4>
                                        <p>{training.course_fee_online}</p>
                                    </li>
                                    <li>
                                        <h4>Course Fee Offline :</h4>
                                        <p>{training.course_fee_offline}</p>
                                    </li>
                                  
                                 
                                </ul>
                               
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="portfolio-details-info mt-5" >
                      <p  
                        dangerouslySetInnerHTML = {{
                            __html: `${training.description}`
                        }}
                       >
                      </p>
                          </div>
                    </div>
                </div>
            </div>
        </div>

        <AnimatedCursors
      innerSize={8}
      outerSize={8}
      color='251, 129, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    /> 

  
  </>
}


export async function getStaticPaths() {
    const resp = await fetch(`${server}/api/course`);
    const trainings = await resp.json();

  const paths = trainings.map(training=>{
      return {
          params:{
              slug: `${training.slug}`
          }
      }
  })
  return {
      paths,
      fallback:false
  }
  }

export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch( `${server}/api/course/${params.slug}`);
    const training = await res.json();
    return {
      props:{
        training
      },
      revalidate: 10,
    }
  }
