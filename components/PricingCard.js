import React from "react";

import { Card } from "react-bootstrap";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";

function PricingCard({ item, index}) {


  return (
    <div className="borderE col-md-4 col-sm-6 wow zoomIn p-3">
      <div
        className={`our-pricing-wrap text-center mb-30 , + ${
          index === 1 && "scalY"
        } `}
      >
        <Card>
          <div className="pricing-level">
            <p>{item.type}</p>
          </div>
          <Card.Body>
            <span style={{ width: index === 1 && "136px" }}>{item.icons}</span>
            <Card.Title>
              <h4
                style={{
                  marginTop: index === 1 && "32px",
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
