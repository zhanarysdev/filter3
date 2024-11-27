'use client'
import { ComponentProps, forwardRef } from "react";

export type SelectOptionProps = { value: number; label: string }[];

export type SelectProps = {
    options: SelectOptionProps;
    placeholder?: string;
    name?: string;
} & ComponentProps<"select">;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ options, placeholder, onChange, onBlur, name }, ref) => {
        return (
            <select
                name={name}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                className={"rounded-[8px] bg-[#FFFFFF] p-[16px] w-full"}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        );
    },
);

Select.displayName = "Select"
export default Select