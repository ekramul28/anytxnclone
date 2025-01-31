import Banner from "@/components/banner/Banner";
import Company from "@/components/company/Company";
import ContactUs from "@/components/contactus/contactUs";
import FinanceCarousel from "@/components/finance/Finance";
import HumanCentred from "@/components/humanCentred/HumanCentred";
import Footer from "@/components/shared/Footer";
import Uncovering from "@/components/Uncovering/Uncovering";
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <Uncovering />
      <FinanceCarousel />
      <HumanCentred />
      <Company />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
