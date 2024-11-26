'use client'
import Link from "next/link";
import { Icon } from "./icons";
import { Dispatch, SetStateAction } from "react";
import { store } from "@/store";

export function MobileMenu({ isOpen, showMenu }: { isOpen: boolean, showMenu: Dispatch<SetStateAction<boolean>> }) {
    const goHome = store(state => state.goHome)
    return (
        <div className="p-[16px] flex flex-col justify-between pt-[42px] bg-primary z-10 transition-all fixed top-0 left-0 bottom-0 right-0" style={{ transform: isOpen ? "translateY(0)" : "translateY(-100vh)" }}>
            <Icon name="Filter" className="mt-[32px]" />

            <div className="flex  flex-col justify-between flex-1 mt-[32px]">
                <div className="text-white text-[24px] leading-[26px] font-medium gap-[16px] flex flex-col">
                    <Link onClick={() => {
                        showMenu(false)
                        goHome()
                    }} href="/">Home</Link>
                    <Link href="#">Get App</Link>
                    <Link onClick={() => goHome()} href="/faq">FAQ</Link>
                </div>

                <div className="text-[#929292] text-[14px] leading-[18px] flex justify-between items-end">
                    <div className="flex flex-col mt-auto">
                        <Link className=" hover:text-white" href="/form">Help Center</Link>
                        <Link className=" hover:text-white" href="/terms">Terms of use</Link>
                        <Link className=" hover:text-white" href="/policy">Privacy Policy</Link>
                    </div>
                    <div>
                        <Link className=" hover:text-white" href={"#"}>Instagram</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}