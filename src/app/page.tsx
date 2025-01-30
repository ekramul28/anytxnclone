import ContactUs from "@/components/contactus/contactUs";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>
        <Header />
        <ContactUs />
        <Footer />
      </h1>
    </div>
  );
};

export default HomePage;
