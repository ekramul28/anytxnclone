import AboutBanner from "@/components/About/banner/banner";
import BuildingFuture from "@/components/About/buildingFuture/BuildingFuture";
import FutureCard from "@/components/About/buildingFuture/futureCard";
import OurMission from "@/components/About/ourMission/OurMission";
import OurValues from "@/components/About/ourValues/OurValues";
import CompanyMarquee from "@/components/Services/companyMarqu/CompanyMarque";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <BuildingFuture />
      <FutureCard />
      <CompanyMarquee
        speed="animate-marqueeForAbout"
        className="bg-white py-10 border-t-2 "
      />
      <OurMission />
      <OurValues />
    </div>
  );
};

export default AboutPage;
