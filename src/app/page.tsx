import Banner from "@/components/banner/Banner";
import Company from "@/components/company/Company";
import Experience from "@/components/experience/Experience";
import FinanceCarousel from "@/components/finance/Finance";
import HumanCentred from "@/components/humanCentred/HumanCentred";
import Uncovering from "@/components/Uncovering/Uncovering";
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <Uncovering />
      <HumanCentred />
      <FinanceCarousel />
      <Experience />
      <Company />
    </div>
  );
};

export default HomePage;
