import { Dispatch, SetStateAction } from "react";
import { Icon } from "./icons";

export function Search({
  value,
  onChange,
  onFocus,
}: {
  value: string;
  onChange: (v: string) => void;
  onFocus: () => void;
}) {
  return (
    <div className="border w-full border-[#929292] rounded-[16px] flex items-center pl-[12px]">
      <Icon name="Search" />
      <input
        value={value}
        onFocus={onFocus}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent p-[12px] pl-[6px] w-full text-[14px] leading-[18px] font-medium focus:outline-none"
        placeholder="Search"
      />
    </div>
  );
}
