import React from "react";
import style from "../../styles/Loader.module.css";
import logo from "./main logo_1.gif";
import Image from "next/image";

export default function Loader() {
  return (
    <>
      {/* <div className={style.loader}></div> */}

      {/* <div className="img"> */}

      <Image src={logo} alt="Loading new loader" />
      {/* <iframe
        src="https://giphy.com/embed/w87aseZZkljHi"
        width="436"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/images-awesome-beatles-w87aseZZkljHi">
          via GIPHY
        </a>
      </p> */}
      {/* </div> */}
    </>
  );
}
