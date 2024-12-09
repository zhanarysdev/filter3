"use client";
import { store } from "@/store";
import { Icon } from "./icons";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export function Explore() {
  const isExploreHidden = store((state) => state.isExploreHidden);
  const pathname = usePathname();
  return (
    <>
      {!isExploreHidden && pathname === "/" && (
        <div className="flex gap-[8px] items-center">
          <span className="text-primary text-[18px] leading-[24px]">
            Scroll to explore
          </span>

          <div className="h-[40px] bg-[#373737] w-[40px] rounded-[8px] overflow-hidden">
            <motion.div
              initial={{ y: -26 }}
              animate={{ y: 26, transitionEnd: { y: 0 } }}
              transition={{ repeat: 4, duration: 0.9 }}
              className="flex items-center justify-center h-full"
            >
              <Icon
                name="CaretDown"
                className="text-[#F0F0F0] w-[16px] h-[16px]"
              />
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
