"use client";
import { store } from "@/store";
import { Icon } from "./icons";
import { motion } from "motion/react";

export function MobileExplore() {
  const isExploreHidden = store((state) => state.isExploreHidden);
  return (
    <>
      {!isExploreHidden && (
        <div className="flex lg:hidden fixed bottom-[16px] justify-center w-full">
          <div className="flex bg-[#F8F8F8] rounded-[4px] pl-[4px] pr-[8px] py-[3px] items-center justify-center">
            <div className="h-[26px] w-[26px] overflow-hidden">
              <motion.div
                initial={{ y: -26 }}
                animate={{ y: 26, transitionEnd: { y: 0 } }}
                transition={{ repeat: 4, duration: 0.9 }}
              >
                <Icon name="ArrowDown" className="w-[20px] h-[20px]" />
              </motion.div>
            </div>
            <div className="text-primary text-[12px] leading-[16px]">
              Scroll to explore
            </div>
          </div>
        </div>
      )}
    </>
  );
}
