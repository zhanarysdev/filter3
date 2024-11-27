import { Dispatch, SetStateAction } from "react";
import { Icon } from "./icons";

export function Search({ value, onChange }: { value: string, onChange: (v: string) => void }) {
    return (
        <div className="border border-[#929292] rounded-[8px] flex items-center pl-[12px]">
            <Icon name="Search" />
            <input value={value} onChange={(e) => onChange(e.target.value)} className="bg-transparent p-[12px] pl-[6px] w-full text-[14px] leading-[18px] font-medium focus:outline-none" placeholder="Search" />
        </div>
    )

}