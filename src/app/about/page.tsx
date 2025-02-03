import AboutBanner from "@/components/About/banner/banner";
import BuildingFuture from "@/components/About/buildingFuture/BuildingFuture";
import FutureCard from "@/components/About/buildingFuture/futureCard";
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
    </div>
  );
};

export default AboutPage;
