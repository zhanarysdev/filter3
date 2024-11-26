import { Icon } from "./icons";

export function Search() {
    return (
        <div className="border border-[#929292] rounded-[8px] flex items-center pl-[12px]">
            <Icon name="Search" />
            <input className="bg-transparent p-[12px] pl-[6px] w-full text-[14px] leading-[18px] font-medium focus:outline-none" placeholder="Search" />
        </div>
    )

}