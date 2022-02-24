// Import Swiper styles
import "swiper/css";

import Progressbar from "../../components/Progressbar";

export default function Update() {
  return (
    <div className="project-update-section text-center text-md-start bg-brand">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-6 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div className="project-update-section-wrap">
              <div className="section-title">
                <h5> About Company</h5>
                <h3>Don,t miss our update</h3>
              </div>
              <p className="pr-140p pera">
                Let us help you to build up your business the way you always
                envisioned. Get in touch with our specialists and let us build
                the strategy for your business. Start your journey with Opedia,
                take your business to digital excellence.
              </p>

              <div className="subscribe-section">
                <form action="#">
                  <input type="text" placeholder=" Enter email address" />
                  <button type="submit" className="btn-brand">
                    Subscribed
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Progressbar />
          </div>
        </div>
      </div>
    </div>
  );
}
