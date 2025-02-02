import ServiceBanner from "@/components/Services/banner/ServiceBanner";
import Consult from "@/components/Services/Consult/Consult";
import DataCard from "@/components/Services/dataCard/dataCard";
import Implement from "@/components/Services/Implement/Implement";
import ImplementCard from "@/components/Services/Implement/ImplementCard";
import InfoCard from "@/components/Services/infoCard/InfoCard";
import WhatWeDo from "@/components/Services/whatWeDo/WhatWeDo";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <ServiceBanner />
      <WhatWeDo />
      <DataCard />
      <Consult />
      <InfoCard />
      <Implement />
      <ImplementCard />
    </div>
  );
};

export default ServicePage;
