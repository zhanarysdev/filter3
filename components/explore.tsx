"use client";
import { store } from "@/store";
import { Icon } from "./icons";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export function Explore() {
  const pathname = usePathname();

  const transitionValues = {
    duration: 1,
    repeat: Infinity,
    ease: "easeOut",
    repeatType: "loop",
  };
  return (
    <>
      {pathname === "/" && (
        <div className="flex gap-[8px] items-center">
          <span className="text-primary text-[18px] leading-[24px]">
            Scroll to explore
          </span>

          <div className="h-[40px] bg-[#373737] w-[40px] rounded-[8px] overflow-hidden">
            <motion.div
              transition={{
                y: transitionValues,
                width: transitionValues,
                height: transitionValues,
              }}
              animate={{
                y: [-26, -6, 0, 6, 26],
              }}
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
