"use client";
import { store } from "@/store";
import { Icon } from "./icons";
import { motion } from "motion/react";

export function Explore() {
    const isExploreHidden = store((state) => state.isExploreHidden);
    return (
        <>
            {!isExploreHidden && (
                <div className="flex gap-[2px] items-center">
                    <span className="text-primary text-[18px] leading-[24px]">
                        Scroll to explore
                    </span>
                    <div className="h-[26px] w-[26px] overflow-hidden">
                        <motion.div
                            initial={{ y: -26 }}
                            animate={{ y: 26, transitionEnd: { y: 0 } }}
                            transition={{ repeat: 4, duration: .9 }}
                        >
                            <Icon name="ArrowDown" />
                        </motion.div>
                    </div>
                </div>
            )}
        </>
    );
}
