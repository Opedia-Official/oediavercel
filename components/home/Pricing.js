
import "swiper/css";
import { dataPricing } from "../../Utils/fakeData";
import PricingCard from "../PricingCard";

export default function Pricing() {
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
              <PricingCard key={item.id} index={index} item={item} />
            ))
          ) : (
            <p>Loading </p>
          )}
        </div>
      </div>
    </div>
  );
}
