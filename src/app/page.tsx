import HomeSection from "@/components/Home/HomeSection";
import SecondPage from "@/components/Second/SecondPage";
import ServicePage from "@/components/ServicePage/ServicePage";
import WorkFlow from "@/components/WorkFlow/WorkFlow";
import Image from "next/image";
import News from "./News/page";
import CTA from "@/components/CTA/CTA";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className=" container">
      <HomeSection/>
      <SecondPage/>
      <ServicePage/>
      <WorkFlow/>
      <News/>
      <CTA/>
      <Contact/>
    </div>
  );
}
