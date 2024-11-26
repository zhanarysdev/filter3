'use client'

import { store } from "@/store"
import { WheelEvent } from "react";
import { Icon } from "./icons";
import Link from "next/link";

export function Footer() {
    const isFooterOpened = store((state) => state.isFooterOpened)
    const showFooter = store((state) => state.showFooter)

    const wheel = (e: WheelEvent<HTMLElement>) => {
        if (e.deltaY < 0) {
            showFooter(false)
        }
    }
    return (
        <footer onWheel={wheel} className="bg-primary flex flex-col justify-between  transition-all fixed top-0 left-0 right-0 bottom-0 p-[16px]" style={{ transform: isFooterOpened ? "translate(0)" : "translateY(100vh)" }}>
            <Icon name="Filter" />
            <div className="text-[#929292] text-[14px] leading-[18px] flex justify-between items-end">
                <div className="flex flex-col">
                    <Link className=" hover:text-white" href="/form">Help Center</Link>
                    <Link className=" hover:text-white" href="/terms">Terms of use</Link>
                    <Link className=" hover:text-white" href="/policy">Privacy Policy</Link>
                </div>
                <div>
                    <Link className=" hover:text-white" href={"#"}>Instagram</Link>
                </div>
            </div>
        </footer>
    )
}