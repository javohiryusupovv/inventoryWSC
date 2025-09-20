import HomeSection from "@/app/[locale]/(root)/components/Home/HomeSection";
import SecondPage from "@/app/[locale]/(root)/components/Second/SecondPage";
import ServicePage from "@/app/[locale]/(root)/components/ServicePage/ServicePage";
import WorkFlow from "@/app/[locale]/(root)/components/WorkFlow/WorkFlow";
import CTA from "@/app/[locale]/(root)/components/CTA/CTA";
import Contact from "@/app/[locale]/(root)/components/Contact/Contact";
import NewsHome from "@/app/[locale]/(root)/components/News/News";

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
