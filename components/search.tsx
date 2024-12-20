import { Dispatch, SetStateAction } from "react";
import { Icon } from "./icons";

export function Search({
  value,
  onChange,
  onFocus,
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  onFocus?: () => void;
  className?: string;
}) {
  return (
    <div
      className={`max-w-[622px] border w-full border-[#929292] rounded-[16px] flex items-center pl-[12px] ${className}`}
    >
      <Icon name="Search" />
      <input
        value={value}
        onFocus={onFocus}
        onChange={(e) => onChange(e.target.value)}
        className=" bg-transparent p-[12px] pl-[6px] w-full text-[16px] leading-[18px] font-medium focus:outline-none"
        placeholder="Search"
      />
    </div>
  );
}
