"use client";

import { store } from "@/store";
import { useState, WheelEvent } from "react";
import { Icon } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const isFooterOpened = store((state) => state.isFooterOpened);
  const showFooter = store((state) => state.showFooter);

  const wheel = (e: WheelEvent<HTMLElement>) => {
    if (e.deltaY < 0) {
      showFooter(false);
    }
  };

  const pathname = usePathname();

  const [inix, setinix] = useState<null | number>(null);
  const [iniy, setiniy] = useState<null | number>(null);

  function startTouch(e: any) {
    setinix(e.touches[0].clientX);
    setiniy(e.touches[0].clientY);
  }

  const moveTouch = (e: any) => {
    if (inix === null) {
      return;
    }
    if (iniy === null) {
      return;
    }
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = inix - currentX;
    const diffY = iniy - currentY;

    if (Math.abs(diffX) < Math.abs(diffY)) {
      if (diffY < 0) {
        showFooter(false);
      }
    }
    setinix(null);
    setiniy(null);
  };

  return (
    <footer
      onTouchStart={startTouch}
      onTouchMove={moveTouch}
      onWheel={wheel}
      className="z-[20] bg-primary flex flex-col justify-between  transition-all fixed top-0 left-0 right-0 bottom-0 md:p-[20px] lg:p-[30px]"
      style={{
        transform: isFooterOpened ? "translate(0)" : "translateY(100vh)",
        display: pathname !== "/" ? "none" : "",
      }}
    >
      <Icon
        name="Filter"
        className="w-full text-[#545454] h-auto mt-auto mb-[60px] md:mb-[80px] lg:mb-auto lg:mt-0"
      />
      <div className="text-[#929292] text-[14px] leading-[18px] md:text-[16px] md:leading-[22px] flex justify-between items-end lg:text-[18px] lg:leading-[24px] p-[10px] md:p-0">
        <div className="flex flex-col gap-[10px] md:gap-[5px]">
          <Link
            style={{ color: pathname === "/form" ? "#F0F0F0" : "" }}
            onClick={() => showFooter(false)}
            className=" hover:text-white lg:hidden"
            href="/form"
          >
            Help Center
          </Link>
          <Link
            style={{ color: pathname === "/faq" ? "#F0F0F0" : "" }}
            onClick={() => showFooter(false)}
            className=" hover:text-white hidden lg:flex"
            href="/faq"
          >
            FAQ
          </Link>
          <Link
            style={{ color: pathname === "/terms" ? "#F0F0F0" : "" }}
            onClick={() => showFooter(false)}
            className=" hover:text-white"
            href="/terms"
          >
            Terms of use
          </Link>
          <Link
            style={{ color: pathname === "/policy" ? "#F0F0F0" : "" }}
            onClick={() => showFooter(false)}
            className=" hover:text-white"
            href="/policy"
          >
            Privacy Policy
          </Link>
        </div>
        <div>
          <Link
            className="flex justify-center items-center gap-[5px] hover:text-white [&>svg]:hover:text-white"
            href={"#"}
          >
            <Icon name={"GoLink"} className="mt-[1px]" />
            <span>Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
