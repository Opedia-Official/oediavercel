import { useState,useEffect } from "react";
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

import dynamic from "next/dynamic";

import WorkingProcess from "../components/WorkingProcess";
import WhatsappChat from "../components/whatsappChat";
import LogoSlider from "../components/LogoSlider";

let AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home({portCats}) {


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

      {/* <ShowCase posts={posts} /> */}
      <ShowCase portCats= {portCats} />

      <ShowCaseCounter />

      {/*  */}

      {/* <ExpTeam expertTeams = {expertTeams}/>

      <ViewService ViewServices={ViewServices}/>

      <ShowCase Gallaries ={Gallaries} />

      <ShowCaseCounter projectsAll ={projects} /> */}

      <Update />

      {/* <ExpartWorkers /> */}
      <WorkingProcess />

      <Specialist />

      <Pricing />

      <Testimonial />

     

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="251, 129, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
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
