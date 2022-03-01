import { Card } from "react-bootstrap";
// import {
//   FaCloud,
//   FaDatabase,
//   FaRegHeart,
//   FaHeart,
//   FaRegSmileBeam,
//   FaFacebookF,
//   FaRegPaperPlane,
//   FaRegLightbulb,
//   FaPlaneDeparture,
//   FaAngleDoubleRight,
//   FaInstagram,
//   FaTwitter,
//   FaGithub,
//   FaHeadphonesAlt,
// } from "react-icons/fa";
// import { GiHelicopter } from "react-icons/Gi";

// Import Swiper styles
import "swiper/css";
import { dataPricing } from "../../Utils/fakeData";
import PricingCard from "../PricingCard";

export default function Pricing({ pricingData }) {
  return (
    <div className="our-pricing-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="section-title text-center mb-60">
              <h5>Pricing</h5>
              <h3>Our starting Packages</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {dataPricing?.length > 0 ? (
            dataPricing?.map((item, index) => (
              <PricingCard key={item} index={index} item={item} />
            ))
          ) : (
            <p>Loading </p>
          )}
        </div>
      </div>
    </div>
  );
}
