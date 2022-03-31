

import CountUp from "react-countup";

export default function Home({ projectsAll }) {

  return (
    <>
      <div className="project-counter-area">
        <div className="container">
          <div className="row justify-content-center">
          <div className="pCounterWrap justify-content-center justify-content-md-between">
                <div className="counter-up-wrap mb-3">
                  <h3>
                    {" "}
                    <CountUp end={133} />{" "}
                  </h3>
                  <p> Web & Soft </p>
                </div>
                <div className="counter-up-wrap mb-3 ">
                  <h3>
                    {" "}
                    <CountUp end={118} />{" "}
                  </h3>
                  <p>Digital Marketing </p>
                </div>
                <div className="counter-up-wrap mb-3">
                  <h3>
                    {" "}
                    <CountUp end={221} />{" "}
                  </h3>
                  <p>Motion Graphics </p>
                </div>
                <div className="counter-up-wrap">
                  <h3>
                    {" "}
                    <CountUp end={53} />{" "}
                  </h3>
                  <p>Brand Design </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
