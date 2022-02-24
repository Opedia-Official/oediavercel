import React from "react";

function TestimonialSlider({ itam }) {
  const { icons, description, header, type } = itam;

  return (
    <div className="testimonial-wrapper text-center">
      <div className="testimonial-img">
        <img src="./testimonial/pic-1.png" alt="" />
        {/* <IoIosArrowRoundDown/> */}
        {icons}
      </div>
      <p>{description}</p>
      <div className="testimonial-author-info text-center">
        <h5>{header}</h5>
        <p className="pera">{type}</p>
      </div>
    </div>
  );
}

export default TestimonialSlider;
