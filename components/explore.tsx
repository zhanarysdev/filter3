'use client'
import { store } from "@/store";
import { Icon } from "./icons";
import { motion } from 'motion/react'

export function Explore() {
    const isExploreHidden = store(state => state.isExploreHidden)
    return (
        <>
            {!isExploreHidden && <div className="flex gap-[2px] items-center">
                <span className="text-primary text-[18px] leading-[24px]">Scroll to explore</span>
                <motion.div initial={{ y: 8 }} animate={{ y: 0 }} transition={{ repeat: 3, duration: 1, ease: "linear" }}>        <Icon name="ArrowDown" /></motion.div>
            </div>
            }
        </>
    )
}