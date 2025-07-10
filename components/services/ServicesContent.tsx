"use client";

import React from "react";

import WrapSection from "../WrapSection";
import ServiceItem from "./ServiceItem";

import { services } from "../../constants/services";

export default function ServicesContent() {
  return (
    <WrapSection>
      <div className="z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl w-full lg:my-10">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            index={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </WrapSection>
  );
}
