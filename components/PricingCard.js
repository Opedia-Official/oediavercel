import React from "react";

import { Card } from "react-bootstrap";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";

import { useEffect } from "react";

function PricingCard({ item, index }) {
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
    <div className="borderE col-md-4 col-sm-6 wow zoomIn p-3">
      <div
        className={`our-pricing-wrap text-center mb-30 , + ${
          index === 1 && "scalY"
        } `}
      >
        {/* index === 1 && "scalY" */}
        {/* <p>{index}</p> */}
        <Card>
          <div className="pricing-level">
            <p>{item.type}</p>
          </div>
          <Card.Body>
            <span style={{ width: index === 1 && "136px" }}>{item.icons}</span>

            <Card.Title>
              <h4
                style={{
                  marginTop: index === 1 && "27px",
                  padding: index === 1 && "16px 0px 6px",
                }}
              >
                ${item.pricing}
              </h4>{" "}
              <span></span>
            </Card.Title>
            <ul className="pricing-items">
              {item.feature.map((liItem) => (
                <li key={liItem}>{liItem}</li>
              ))}
            </ul>

            <Link href="/contact">
              <a className="btn-two mt-20">Start Today</a>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default PricingCard;
