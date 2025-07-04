"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

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
        className="absolute left-0 lg:top-[260px] md:top-[240px] top-[220px] -translate-y-1/2 z-20 text-white max-w-[1000px]
        bg-transparent"
      >
        <div className="bg-transparent bg-opacity-40 backdrop-blur-md pt-8 pb-4 rounded-r-[40px]  px-6 md:px-10 lg:px-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 text-left font-montserrat">
            Знайдемо авто вашої мрії!
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-left font-kelly-slab">
            Ваш ідеальний автомобіль чекає. Широкий вибір перевірених авто з{" "}
            <strong className="text-orange-400">США, Канади та Європи</strong>{" "}
            від надійних виробників. Комфорт, якість, надійність – оберіть своє
            авто сьогодні!
          </p>
        </div>
        <button
          onClick={() => router.push("/services")}
          className="mx-6 md:mx-10 lg:mx-12 text-sm md:text-base lg:text-lg bg-orange-500 hover:bg-transparent border-2 transition-all duration-600 ease-in-out border-transparent border-b-orange-500 text-white flex gap-2 items-center font-montagu-slab font-semibold py-2 pl-8 pr-6 rounded-xl mt-6 cursor-pointer"
        >
          <span>Детальніше</span>
          <IoIosArrowForward className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
