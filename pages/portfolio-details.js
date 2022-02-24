import { Card } from "react-bootstrap";
import { BsPlayFill} from "react-icons/Bs";
import InnerHead from '../components/innerHead'
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import MyVerticallyCentredModal from '../components/MyVerticallyCentredModal'
import { useState } from "react";
import WhatsappChat from "../components/whatsappChat";
import dynamic from 'next/dynamic'


let AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });


export default function PortfolioDDetails() {
    const [modalShow, setModalShow] = useState(false);
  return <>
        <InnerHead title="Portfolio Details"/>
        <WhatsappChat/>
        <div className="portfolio-details mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="portfolio-details-left">
                        <MyVerticallyCentredModal
                            url= "https://youtu.be/iO40U7nP6mY"
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                            <div className="portfolio-details-lft-img">
                                <img src="../portfolio/pic-2.png" alt="" />
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
                                        <h4>PROJECT NAME :</h4>
                                        <p>Vegetables Growing Farm</p>
                                    </li>
                                    <li>
                                        <h4>Client :</h4>
                                        <p>Vegetables Lover</p>
                                    </li>
                                    <li>
                                        <h4>Category :</h4>
                                        <p>Fruits & vegetables</p>
                                    </li>
                                    <li>
                                        <h4>Delivery Mode :</h4>
                                        <p>Stipulated Price</p>
                                    </li>
                                    <li>
                                        <h4>Client :</h4>
                                        <p>Vegetables Lover</p>
                                    </li>
                                    <li>
                                        <h4>Location :</h4>
                                        <p>USA</p>
                                    </li>
                                    <li>
                                        <h4>Share :</h4>
                                        <ul className="share text-center text-md-end">
                                    <li><a className='share-item' href="#"> <FaFacebookF/> </a></li>
                                    <li><a className='share-item' href="#"> <FaTwitter/> </a></li>
                                    <li><a className='share-item' href="#"> <FaLinkedinIn/> </a></li>
                                    <li><a className='share-item' href="#"> <FaInstagram/>  </a></li>
                                </ul>
                                    </li>
                                 
                                </ul>
                               
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="portfolio-details-info">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus e voluptatem 
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
</p>
                                        <p>vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui r voluptatemt 
sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
labore et dolore magnam aliquam quaerat voluptatemvitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,  quia 
consequuntur magni dolores eos qui r voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum </p>
                                </div>
                    </div>
                </div>
            </div>
        </div>

        <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='251, 129, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />

  
  </>
}
