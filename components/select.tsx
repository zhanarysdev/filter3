"use client";
import { ComponentProps, forwardRef, useState } from "react";
import { Icon } from "./icons";

export type SelectOptionProps = { value: number; label: string }[];

export type SelectProps = {
  options: SelectOptionProps;
  placeholder?: string;
  name?: string;
} & ComponentProps<"select">;

export const Select = ({ options }: SelectProps) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="transition-all rounded-[8px] flex flex-col bg-[#FFFFFF] p-[16px] w-full">
      <div
        className="flex cursor-pointer w-full items-center"
        onClick={() => setOpen((old) => !old)}
      >
        <div className="flex-1">{selected.label}</div>
        <div>
          <Icon name="CaretDown" />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-[8px] mt-[8px]">
          {options.map((el) => (
            <div
              className="text-[#929292] text-[14px] leading-[18px] font-medium hover:text-primary cursor-pointer"
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
