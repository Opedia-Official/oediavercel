import { useState, useEffect } from "react";
import HeroSlide from "../components/HeroSlide";
import ExpTeam from "../components/ExpTeam";

// Import View Service Section
import ViewService from "../components/home/ViewService";
// Import Showcase Service Section
import ShowCase from "../components/home/ShowCase";
// Showcase Counter Section
import ShowCaseCounter from "../components/home/ShowCaseCounter";
// Import Update Section
import Update from "../components/home/Update";
import Specialist from "../components/home/Specialist";
//Import Pricing Section
import Pricing from "../components/home/Pricing";
// Import Testemonial Section
import Testimonial from "../components/home/Testimonial";
// Import Blog Section

import { server } from "../config/index";

import WorkingProcess from "../components/WorkingProcess";
import WhatsappChat from "../components/whatsappChat";
import LogoSlider from "../components/LogoSlider";

export default function Home({ portCats }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <HeroSlide />

      <ExpTeam />
      <LogoSlider />
      <ViewService />
      <ShowCase portCats={portCats} />

      <ShowCaseCounter />
      <Update />

      <WorkingProcess />

      <Specialist />

      <Pricing />

      <Testimonial />

      <WhatsappChat />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/portfolio/category`);
  const portCats = await res.json();

  return {
    props: {
      portCats,
    },
    revalidate: 10,
  };
}
