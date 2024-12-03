"use client";

import { useState } from "react";
import { BurgerMenu } from "./burger-menu";
import { Container } from "./container";
import { Icon } from "./icons";
import { MobileMenu } from "./mobile-menu";
import { store } from "@/store";
import { SelectLang } from "./select-lang";
import Link from "next/link";

export function Header() {
  const [isOpen, showMenu] = useState(false);
  const isFooterOpened = store((state) => state.isFooterOpened);
  const goHome = store((state) => state.goHome);

  return (
    <header className="lg:fixed lg:top-[20px] lg:right-[50%]  lg:left-0">
      <Container>
        <div className="flex justify-between items-center">
          {isOpen ? (
            <div className="z-20">{/* <SelectLang /> */}</div>
          ) : (
            <Link href={"/"} onClick={goHome}>
              <Icon name="Logo" className="md:w-[121px] md:h-[40px]" />
            </Link>
          )}
          {!isFooterOpened && (
            <BurgerMenu isOpen={isOpen} showMenu={showMenu} />
          )}

          <div className="hidden lg:flex">{/* <SelectLang /> */}</div>
        </div>
        <MobileMenu isOpen={isOpen} showMenu={showMenu} />
      </Container>
    </header>
  );
}
