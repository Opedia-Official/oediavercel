import React from "react";

import { Card } from "react-bootstrap";
import { FaRegPaperPlane } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

import { useEffect } from "react";

function PricingCard({ item }) {
  // useEffect(()=>{
  //   document.addEventListener("mousemove",function(e){
  //     this.querySelectorAll('.our-pricing-wrap').forEach(layer=>{
  //       const speed = layer.getAttribute('data-speed')
  //       const x = (window.innerWidth - e.pageX*speed)/100;
  //       const y = (window.innerHeight - e.pageY*speed)/100
  //       layer.getElementsByClassName.transform = `translateX(${x}px) translateY(${y}px)`
  //     })
  //   })
  // })

  return (
    <div className="col-md-4 col-sm-6 wow zoomIn">
      <div className="our-pricing-wrap text-center mb-30">
        <Card>
          <div className="pricing-level">
            <p>{item.type}</p>
          </div>
          <Card.Body>
            <span>{item.icons}</span>
            <Card.Title>
              <h4>${item.pricing}</h4> <span>/{item.duratin}</span>
            </Card.Title>
            <ul className="pricing-items">
              {item.feature.map((liItem) => (
                <li key={liItem}>{liItem}</li>
              ))}
            </ul>

            <a href="#" className="btn-two mt-20">
              Start Today
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default PricingCard;
