"use client";

import React from "react";
import { values } from "../../constants/values";

export default function ValuesGrid() {
  return (
    <div className="w-full">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center font-montserrat text-gray-200">
        Наші Непорушні Цінності
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-800 bg-opacity-70 shadow-lg border border-gray-700 service-card-gradient"
          >
            <value.icon className="text-orange-400 text-5xl mb-4" />
            <h4 className="text-xl font-semibold mb-2 font-montserrat">
              {value.title}
            </h4>
            <p className="text-gray-300 text-base font-kelly-slab">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
