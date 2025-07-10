"use client";

import React from "react";
import { FaBullseye } from "react-icons/fa";

export default function MissionSection() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start bg-gray-800/40 backdrop-blur-md shadow-lg  p-8 rounded-lg space-y-6 md:space-y-0 md:space-x-8">
      <FaBullseye className="text-orange-400 text-4xl md:text-5xl flex-shrink-0" />
      <div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 font-montserrat text-gray-200 text-center md:text-left">
          <strong className="text-orange-300 font-semibold">Наша Місія</strong>{" "}
          — Втілення Ваших Мрії в Рух
        </h3>
        <p className="text-base md:text-lg lg:text-lg font-light leading-relaxed font-kelly-slab">
          Ми не просто продаємо транспорт — ми даруємо{" "}
          <strong className="font-semibold">впевненість</strong>. Кожен
          автомобіль, мотоцикл, катер чи одиниця спецтехніки проходить ретельну
          перевірку, адже ми прагнемо, щоб ви насолоджувалися{" "}
          <strong className="font-semibold">безпекою та комфортом</strong> з
          першого ж кілометра. Будь то асфальт, водні простори чи робоче поле —{" "}
          <strong className="text-orange-300">
            ваша подорож починається з якості, яку ми гарантуємо!
          </strong>
        </p>
      </div>
    </div>
  );
}
