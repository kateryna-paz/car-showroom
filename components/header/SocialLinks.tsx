import Link from "next/link";
import Image from "next/image";

export default function SocialLinks({ size = 28 }: { size?: number }) {
  return (
    <div className="flex flex-col space-y-1.5 items-center w-auto lg:w-auto md:w-[80px] ">
      <div className="flex space-x-4">
        <Link
          href="https://t.me/carlux_usa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/telegram.png"
            alt="Telegram"
            width={size}
            height={size}
            className="w-[28px] h-[28px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]"
          />
        </Link>
        <Link
          href="https://www.instagram.com/carlux.ukraine?igsh=bm9ycGJtZzFqdnBl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            width={size - 2}
            height={size - 2}
            className="w-[26px] h-[26px] md:w-[22px] md:h-[22px] lg:w-[26px] lg:h-[26px]"
          />
        </Link>
      </div>
      <Link
        href="tel:carlux_usa@gmail.com"
        className="text-gray-300 hover:text-orange-300 focus:text-orange-400 text-center leading-4 text-sm lg:text-base font-kelly-slab break-all"
      >
        carlux_usa@gmail.com
      </Link>
    </div>
  );
}
