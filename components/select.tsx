"use client";
import { ComponentProps, useEffect, useState } from "react";
import { Icon } from "./icons";

export type SelectOptionProps = { value: number; label: string }[];

export type SelectProps = {
  options: SelectOptionProps;
  placeholder?: string;
  name?: string;
  error?: string;
} & ComponentProps<"select">;

export const Select = ({ options, value, onChange, error }: SelectProps) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    if (onChange) {
      onChange(selected.value as any);
    }
  }, [selected, onChange]);

  return (
    <div
      className={`transition-all relative rounded-[8px] flex flex-col bg-[#FFFFFF] p-[16px] w-full ${error && "bg-[#ecdada] text-[#BF1919] placeholder:text-[#BF1919]"}`}
    >
      <div
        className="flex cursor-pointer w-full items-center"
        onClick={() => setOpen((old) => !old)}
      >
        <div className="flex-1">{selected.label}</div>
        <div>
          <Icon name="CaretDown" className={isOpen ? "rotate-180" : ""} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-[40px] left-0 rounded-[8px] flex flex-col bg-[#FFFFFF]  w-full gap-[8px] mt-[8px]">
          {options.map((el) => (
            <div
              className="text-[#929292] text-[14px] rounded-[8px] flex flex-col bg-[#FFFFFF] p-[16px] leading-[18px] font-medium hover:text-primary cursor-pointer"
              key={el.value}
              onClick={() => {
                setSelected(el);
                setOpen(false);
              }}
            >
              {el.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
