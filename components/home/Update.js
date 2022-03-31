// Import Swiper styles
import { useState } from "react";
import "swiper/css";

import Progressbar from "../../components/Progressbar";

export default function Update() {
  const [emailTitle, setEmailTitle] = useState("");
  // subscription
  const Contacthandler = async (e) => {
    e.preventDefault();

    const posted = await fetch("https://admin.opediatech.com/api/subscribe", {
      method: "post",
      body: JSON.stringify({
        email: emailTitle,
      }),
      headers: { "Content-Type": "application/json" },
    });
    setEmailTitle("");

  };

  return (
    <div className="project-update-section text-center text-md-start bg-brand">
      <div className="container">
        <div className="row align-items-center">
          <h5 className="newslatter">Get Newsletter</h5>
          <div
            className="col-md-6 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div className="project-update-section-wrap">
              <div className="section-title">
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
                  <input
                    type="text"
                    placeholder=" Enter email address"
                    value={emailTitle}
                    onChange={(e) => setEmailTitle(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn-brand"
                    onClick={Contacthandler}
                  >
                    Subscribe
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
