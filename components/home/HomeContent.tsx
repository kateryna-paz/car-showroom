"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DetailsButton from "./DetailsButton";

export default function HomeContent() {
  const router = useRouter();
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="relative w-full md:min-h-[100vh] lg:min-h-[100vh] min-h-[100vh] flex items-center justify-center bg-transparent">
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={handleVideoError}
        >
          <source src="/videos/car.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео тег.
        </video>
      )}

      {videoError && (
        <Image
          src="/images/bg-car.jpg"
          alt="Luxury car on display"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      <div
        className="absolute left-0 lg:top-[120px] md:top-[112px] top-[110px] z-20 text-white max-w-[1200px]
        bg-transparent"
      >
        <div className="md:hidden bg-transparent mb-4">
          <h1 className="text-2xl font-semibold leading-tight text-left font-montserrat px-6 ">
            Знайдемо транспорт вашої мрії!
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-left font-kelly-slab bg-transparent bg-opacity-40 backdrop-blur-md py-4 px-6 rounded-xl mb-4">
            Ми пропонуємо лише перевірені{" "}
            <strong className="text-orange-300 lg:text-[21px] md:text-[19px] text-[17px]">
              автомобілі, мотоцикли, водний транспорт та сільгосптехніку{" "}
            </strong>{" "}
            з США, Канади та Європи. Ваш ідеальний транспортний засіб чекає!
          </p>
        </div>

        <div className="hidden md:block bg-transparent bg-opacity-40 backdrop-blur-md pt-2 md:pt-4 pb-4 rounded-r-[40px] px-6 md:px-10 lg:px-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 text-left font-montserrat">
            Знайдемо транспорт вашої мрії!
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-left font-kelly-slab">
            Ваш ідеальний транспортний засіб чекає. Ми пропонуємо широкий вибір
            перевіреної техніки з{" "}
            <strong className="text-medium">США, Канади та Європи</strong> від
            надійних виробників.{" "}
            <strong className="text-orange-300 lg:text-[21px] md:text-[19px] text-[17px]">
              Автомобілі, мотоцикли, водний транспорт або сільськогосподарська
              техніка{" "}
            </strong>{" "}
            – оберіть свій транспорт вже сьогодні, адже ми гарантуємо комфорт,
            якість та надійність!
          </p>
          <div className="mt-8">
            <DetailsButton onClick={() => router.push("/services")} />
          </div>
        </div>
      </div>

      <div className="md:hidden absolute bottom-16 z-20">
        <DetailsButton onClick={() => router.push("/services")} />
      </div>
    </section>
  );
}
