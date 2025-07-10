import Link from "next/link";
import Image from "next/image";

export default function SocialLinks({ size = 34 }: { size?: number }) {
  return (
    <div className="flex flex-col space-y-1.5 md:space-y-1 lg:space-y-1.5 items-center w-auto lg:w-auto md:w-[80px] ">
      <div className="flex space-x-4 md:space-x-3 lg:space-x-4">
        <Link
          href="https://t.me/carlux_usa"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-none"
        >
          <Image
            src="/icons/telegram.png"
            alt="Telegram"
            width={size}
            height={size}
            className="
              w-[34px] h-[34px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px]
              transition-all duration-300 ease-in-out
              hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,136,204,0.7)]
            "
          />
        </Link>
        <Link
          href="https://www.instagram.com/carlux.ukraine?igsh=bm9ycGJtZzFqdnBl"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-none"
        >
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            width={size - 2}
            height={size - 2}
            className="
              w-[32px] h-[32px] md:w-[26px] md:h-[26px] lg:w-[32px] lg:h-[32px]
              transition-all duration-300 ease-in-out
              hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,0,132,0.7)]
            "
          />
        </Link>
      </div>
      <Link
        href="tel:carlux_usa@gmail.com"
        className="text-gray-300 cursor-none hover:text-orange-300 focus:text-orange-400 text-center leading-4 text-sm lg:text-base font-kelly-slab break-all"
      >
        carlux_usa@gmail.com
      </Link>
    </div>
  );
}
