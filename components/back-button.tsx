"use client";
import { Icon } from "./icons";

export function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={() => {
        if (onClick) {
          return onClick();
        } else {
          return window.history.back();
        }
      }}
      className="lg:hidden bg-[#373737] shrink-0 grow-0 rounded-[4px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] md:mb-[20px] md:mt-[40px] cursor-pointer md:rounded-[8px] flex items-center justify-center mb-[10px] mt-[30px]"
    >
      <Icon
        name="CaretDown"
        className="rotate-90 text-[#F0F0F0] w-[16px] h-[16px]"
      />
    </div>
  );
}
