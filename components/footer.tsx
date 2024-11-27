'use client'

import { store } from "@/store"
import { useState, WheelEvent } from "react";
import { Icon } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
    const isFooterOpened = store((state) => state.isFooterOpened)
    const showFooter = store((state) => state.showFooter)

    const wheel = (e: WheelEvent<HTMLElement>) => {
        if (e.deltaY < 0) {
            showFooter(false)
        }
    }

    const pathname = usePathname()

    const [inix, setinix] = useState<null | number>(null)
    const [iniy, setiniy] = useState<null | number>(null)

    function startTouch(e: any) {
        setinix(e.touches[0].clientX)
        setiniy(e.touches[0].clientY)
    };

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
                showFooter(false)
            }
        }
        setinix(null)
        setiniy(null)
    };

    return (
        <footer onTouchStart={startTouch} onTouchMove={moveTouch} onWheel={wheel} className="z-[20] bg-primary flex flex-col justify-between  transition-all fixed top-0 left-0 right-0 bottom-0 p-[16px] md:p-[20px]" style={{ transform: isFooterOpened ? "translate(0)" : "translateY(100vh)", display: pathname !== "/" ? "none" : "" }}>
            <Icon name="Filter" className="w-full h-auto md:mt-auto md:mb-[40px] xl:mb-auto" />
            <div className="text-[#929292] text-[14px] leading-[18px] md:leading-[20px] flex justify-between items-end xl:text-[18px] xl:leading-[24px]">
                <div className="flex flex-col gap-[8px]">
                    <Link style={{ color: pathname === "/form" ? "#F0F0F0" : "" }} onClick={() => showFooter(false)} className=" hover:text-white xl:hidden" href="/form">Help Center</Link>
                    <Link style={{ color: pathname === "/faq" ? "#F0F0F0" : "" }} onClick={() => showFooter(false)} className=" hover:text-white hidden xl:flex" href="/faq">FAQ</Link>
                    <Link style={{ color: pathname === "/terms" ? "#F0F0F0" : "" }} onClick={() => showFooter(false)} className=" hover:text-white" href="/terms">Terms of use</Link>
                    <Link style={{ color: pathname === "/policy" ? "#F0F0F0" : "" }} onClick={() => showFooter(false)} className=" hover:text-white" href="/policy">Privacy Policy</Link>
                </div>
                <div>
                    <Link className=" hover:text-white" href={"#"}>Instagram</Link>
                </div>
            </div>
        </footer>
    )
}