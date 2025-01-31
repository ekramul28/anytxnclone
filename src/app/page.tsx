import Banner from "@/components/banner/Banner";
import ContactUs from "@/components/contactus/contactUs";
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
      <HumanCentred />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
