"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Overlay } from "@/components/overlay";
import { Manrope } from "next/font/google";
import "../i18n";
import "./globals.css";

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
  return (
    <html lang="en">
      <head>
        <title>Monetize your taste</title>
        <meta
          content="Explore new ones and subscribe to your favorite influencers, follow their selection and learn more about their taste"
          name="description"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body
        className={`${manrope.className} antialiased flex flex-col pt-4 md:pt-5 lg:pt-0`}
      >
        <Header />
        {children}
        <Overlay />
        <Footer />
      </body>
    </html>
  );
}
