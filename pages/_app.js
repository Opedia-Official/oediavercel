import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/default.css";
import "../styles/globals.css";

import "../styles/responsive.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Loader from "../components/home/Loader";

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     setLoading(false);
  //   });
  // }, []);

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
    }
    console.log(element);
  };

  return (
    <div onScroll={() => handleScroll()}>
       <Layout>
          <Component {...pageProps} />
        </Layout>
    </div>
  );
}

export default MyApp;
