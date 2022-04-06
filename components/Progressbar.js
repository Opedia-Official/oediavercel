import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "./changingProgressProvider";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";

export default function Progressbar() {
  return (
    <>
      <div className="progressbar-area">
        <div className="row">
          <div
            className="offset-lg-2 col-lg-5 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            <div className="progressbar-wrap">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={88}
                duration={2}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      text={`${roundedValue}%`}
                      styles={buildStyles({ pathTransition: "none" })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <div className="progress-info">
                <h4>Satisfied clients</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5 wow fadeIn" data-wow-duration="1.5s">
            <div className="progressbar-wrap mt-5 mt-lg-0">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={90}
                duration={2}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      text={`${roundedValue}%`}
                      styles={buildStyles({ pathTransition: "none" })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <div className="progress-info">
                <h4>Successful Projects</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
