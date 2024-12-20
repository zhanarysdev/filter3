"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Overlay } from "@/components/overlay";
import { Manrope } from "next/font/google";
import "../i18n";
import "./globals.css";
import { useEffect } from "react";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Filter: Curated Content</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          content="Explore new ones and subscribe to your favorite influencers, follow their selection and learn more about their taste"
          name="description"
        />
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta> */}
        <meta name="viewport" content="width=device-width, minimal-ui"></meta>
      </head>
      <body
        className={`${manrope.className} antialiased flex flex-col pt-[10px] md:pt-5 lg:pt-0`}
      >
        <Header />
        {children}
        <Overlay />
        <Footer />
      </body>
    </html>
  );
}
