"use client";

import React from "react";

export default function AboutIntro() {
  return (
    <div className="bg-gray-800/40 backdrop-blur-md shadow-lg rounded-xl w-full text-center p-8">
      <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed font-kelly-slab text-white">
        <strong className="text-orange-300 font-semibold lg:text-3xl md:text-2xl text-xl">
          CarLux
        </strong>{" "}
        – ваш надійний навігатор у світі транспорту. Ми підберемо ідеальні{" "}
        <strong className="text-orange-300">
          автомобілі, мотоцикли, водний транспорт або сільськогосподарську
          техніку
        </strong>{" "}
        як з наявності, так і під замовлення зі США, Канади чи Європи.
        Гарантуємо прозорість та сервіс найвищого рівня!
      </p>
    </div>
  );
}
