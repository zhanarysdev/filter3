"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Overlay } from "@/components/overlay";
import { useEffect } from "react";

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
    <>
      <Header />
      {children}
      <Overlay />
      <Footer />
    </>
  );
}
