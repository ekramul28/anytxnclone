import ContactBanner from "@/components/contact/banner/ContactBanner";
import ContactForm from "@/components/contact/contactFrom/ContactFrom";
import React from "react";

const ContactPage = () => {
  return (
    <div className="relative  mb-60">
      <ContactBanner />

      <div className="absolute top-60 left-[50%]  ">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
