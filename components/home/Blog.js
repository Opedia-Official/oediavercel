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

// Import Swiper styles
import "swiper/css";

export default function Blog () {
  return (
    <div className="blog-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="section-title text-center mb-40">
              <h5>News & Blogs</h5>
              <h3>Leatest News & Blog</h3>
            </div>
          </div>
          <div className="col-md-8">
            <div className="blog-features-wrap">
              <div className="blog-f-image-info">
                <img src="./blog/pic-1.png" alt="" />
                <div className="blog-date">
                  <h4>20</h4>
                  <span>Oct</span>
                </div>
              </div>
              <div className="blog-home-text-wrap mb-4 mb-md-0">
                <div className="blog-home-text">
                  <h3>
                    <a href="#">
                      {" "}
                      It is a long established fact that a reader will be
                      Standard Part
                    </a>
                  </h3>
                  <p className="pera">
                    A wonderful serenity has taken possssion of my entire souing
                    like these sweet morning spring whch enjoy with my whole
                    heart I am alone, and feel the charm of existenceths spot
                    whch was create For the bliss of souls like mineing am so
                    happy my dear frend so absori bed in the exquste sens of
                    mere. A wonderful serenity has taken posseson of my entire
                    soung like these sweet mornngs spring whch enjoy …
                  </p>
                </div>
                <div className="blog-h-author">
                  <div className="blog-a-img-name">
                    <a href="#">
                      <img src="./blog/pic-3.png" alt="" />
                      <p>Mehedii Mohammad</p>
                    </a>
                  </div>
                  <a href="#">
                    {" "}
                    Read More <FaAngleDoubleRight />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="blog-right-wrap">
              {/* SINGLE ITEM */}
              <div className="blog-features-wrap mb-4">
                <div className="blog-f-image-info">
                  <img src="./blog/pic-1.png" alt="" />
                  <div className="blog-date">
                    <h4>20</h4>
                    <span>Oct</span>
                  </div>
                </div>
                <div className="blog-home-text-wrap">
                  <div className="blog-home-text blg-text-right">
                    <h3>
                      <a href="#">
                        {" "}
                        It is a long established fact that a reader will be
                        Standard Part
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              {/* SINGLE ITEM */}
              <div className="blog-features-wrap">
                <div className="blog-f-image-info">
                  <img src="./blog/pic-1.png" alt="" />
                  <div className="blog-date">
                    <h4>20</h4>
                    <span>Oct</span>
                  </div>
                </div>
                <div className="blog-home-text-wrap">
                  <div className="blog-home-text blg-text-right">
                    <h3>
                      <a href="#">
                        {" "}
                        It is a long established fact that a reader will be
                        Standard Part
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
