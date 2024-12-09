"use client";

import { store } from "@/store";
import Link from "next/link";
import { useState } from "react";
import { BurgerMenu } from "./burger-menu";
import { Container } from "./container";
import { Icon } from "./icons";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [isOpen, showMenu] = useState(false);
  const isFooterOpened = store((state) => state.isFooterOpened);
  const goHome = store((state) => state.goHome);

  return (
    <header className="!z-[999] lg:fixed lg:top-[21px] lg:right-[50%] lg:left-0">
      <Container>
        <div
          className={`flex justify-between items-center right-[10px] left-[10px] z-50 ${isOpen ? "absolute" : "static"}`}
        >
          <Link href={"/"} onClick={goHome}>
            <Icon
              name="Logo"
              className={`md:w-[113px] md:h-[30px] ${isFooterOpened || isOpen ? "text-[#F0F0F0]" : ""}`}
            />
          </Link>
          <BurgerMenu isOpen={isOpen} showMenu={showMenu} />
        </div>
        <MobileMenu isOpen={isOpen} showMenu={showMenu} />
      </Container>
    </header>
  );
}
