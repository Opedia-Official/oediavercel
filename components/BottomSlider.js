import React from 'react';

import { FaRegLightbulb } from "react-icons/fa";

function BottomSlider({item}) {

    const {icons, header, title} = item

  return <div className="hero-bottom-items d-flex align-items-center justify-content-center">
  <div className="icons">
    {icons}
    {/* <FaRegLightbulb /> */}
  </div>
  <div className="hero-bottom-info">
    <h4>{header}</h4>
    <p>{title}</p>
  </div>
</div>;
}

export default BottomSlider;

