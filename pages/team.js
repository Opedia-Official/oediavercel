import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import InnerHead from "../components/innerHead";
import TeamExpert from "../components/TeamExpert";
import WhatsappChat from "../components/whatsappChat";
import dynamic from "next/dynamic";

let AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <InnerHead title="Team" />
      <WhatsappChat />

      {/* EXPERTS WORKERS */}
      {/* <TeamExpert/> */}
      {/* EXPERTS WORKERS */}

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="251, 129, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </>
  );
}
