import HomeSection from "@/components/Home/HomeSection";
import SecondPage from "@/components/Second/SecondPage";
import ServicePage from "@/components/ServicePage/ServicePage";
import WorkFlow from "@/components/WorkFlow/WorkFlow";
import CTA from "@/components/CTA/CTA";
import Contact from "@/components/Contact/Contact";
import NewsHome from "@/components/News/News";

export default function Home() {
  return (
    <div className="container">
      <HomeSection/>
      <SecondPage/>
      <ServicePage/>
      <WorkFlow/>
      <NewsHome/>
      <CTA/>
      <Contact/>
    </div>
  );
}
