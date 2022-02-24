import { Card } from "react-bootstrap";
import {
  FaCloud,
  FaDatabase,
  FaRegHeart,
  FaHeart,
  FaRegSmileBeam,
  FaFacebookF,
  FaRegPaperPlane,
  FaRegLightbulb,
  FaPlaneDeparture,
  FaAngleDoubleRight,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { GiHelicopter } from "react-icons/Gi";

// Import Swiper styles
import "swiper/css";
import { dataPricing } from "../../Utils/fakeData";
import PricingCard from "../PricingCard";

export default function Pricing({ pricingData }) {
  return (
    <div className="our-pricing-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="section-title text-center mb-60">
              <h5>Expert Worker</h5>
              <h3>Our Expert Worker.</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {dataPricing?.length > 0 ? (
            dataPricing?.map((item) => <PricingCard key={item} item={item} />)
          ) : (
            <p>Loading </p>
          )}
        </div>
      </div>
    </div>
  );
}
