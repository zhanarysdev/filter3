"use client";
import { store } from "@/store";
import { Icon } from "./icons";
import { motion } from "motion/react";

export function MobileExplore() {
  const isExploreHidden = store((state) => state.isExploreHidden);
  return (
    <div className="flex lg:hidden fixed bottom-[30px] md:bottom-[40px] justify-center w-full">
      <div className="flex bg-[#F8F8F8] rounded-[8px] gap-[4px] items-center p-[5px] pl-[10px]">
        <div className="text-primary text-[14px] leading-[18px] font-semibold">
          Scroll to explore
        </div>
        <div className="h-[30px] bg-[#373737] w-[30px] rounded-[8px] overflow-hidden">
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
    </div>
  );
}
