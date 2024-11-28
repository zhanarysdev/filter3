import { Dispatch, SetStateAction } from "react";

export function BurgerMenu({
  isOpen,
  showMenu,
}: {
  isOpen: boolean;
  showMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => showMenu((old: boolean) => !old)}
      className="z-[99] bg-[#F8F8F8] gap-[2px] lg:hidden flex flex-col h-[26px] md:h-[32px] w-[26px] md:w-[32px] items-center justify-center rounded-[4px] cursor-pointer"
    >
      <div
        className={`bg-[#373737] w-4 md:w-5 h-[2px] rounded-[1px] transition-all duration-300 transform ${isOpen ? "rotate-45 translate-y-1" : ""}`}
      />
      <div
        className={`bg-[#373737] w-4 md:w-5 h-[2px] rounded-[1px] transition-all duration-300  ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`bg-[#373737] w-4 md:w-5 h-[2px] rounded-[1px] transition-all duration-300 transform  ${
          isOpen ? "-rotate-45 -translate-y-1" : ""
        }`}
      />
    </div>
  );
}
