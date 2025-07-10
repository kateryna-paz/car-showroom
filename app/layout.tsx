import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Kelly_Slab,
  Montagu_Slab,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import SmoothCursor from "@/components/SmoothCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistMontaguSlab = Montagu_Slab({
  variable: "--font-geist-montagu-slab",
  subsets: ["latin"],
});

const geistKellySlab = Kelly_Slab({
  weight: "400",
  variable: "--font-geist-kelly-slab",
  subsets: ["latin"],
});

const geistMontserrat = Montserrat({
  variable: "--font-geist-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarLux Ukraine",
  description: "Car Showroom Ukraine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${geistMontaguSlab.variable}
          ${geistMontserrat.variable}
          ${geistKellySlab.variable}
          antialiased
          bg-gradient-to-r from-gray-900 via-black to-gray-900
          min-h-screen   
          h-full
          flex flex-col  
          md:overflow-auto 
        `}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <SmoothCursor />
      </body>
    </html>
  );
}
