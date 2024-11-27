'use client'

import { useState } from "react"
import { BurgerMenu } from "./burger-menu"
import { Container } from "./container"
import { Icon } from "./icons"
import { MobileMenu } from "./mobile-menu"
import { store } from "@/store"
import { SelectLang } from "./select-lang"
import Link from "next/link"

export function Header() {
    const [isOpen, showMenu] = useState(false)
    const isFooterOpened = store((state) => state.isFooterOpened)
    return <header>
        <Container>
            <div className="flex justify-between items-center">
                {
                    isOpen ? <div className="z-20"><SelectLang /></div> : <Link href={"/"}><Icon name="Logo" /></Link>
                }
                {!isFooterOpened && <BurgerMenu isOpen={isOpen} showMenu={showMenu} />}
            </div>
            <MobileMenu isOpen={isOpen} showMenu={showMenu} />
        </Container>
    </header>
}