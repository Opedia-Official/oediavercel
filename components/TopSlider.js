import React from 'react';

import { FaRegLightbulb } from "react-icons/fa";

function TopSlider({item}) {

    const {image,
      header,
      subHeader1,
      subHeader2,
      quote,
      learnMore,} = item

  return <div className="row align-items-center">
  <div className="col-md-7">
    <div className="hero-left">
      <h4>{header}</h4>
      <h2>
        {subHeader1} <br />
        {subHeader2}
      </h2>
      <div className="hero-action">
        <a className="btn-brand" href="#">
         {quote}
        </a>
        <a className="btn-two" href="#">
          {learnMore}
        </a>
      </div>
    </div>
  </div>

  <div className="col-md-5">
    <div className="hero-right pb-50 pt-50">
      <img src={image} alt="" />
    </div>
  </div>
</div>;
}

export default TopSlider;


