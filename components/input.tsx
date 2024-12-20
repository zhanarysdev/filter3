"use client";

import { ComponentProps, forwardRef } from "react";

export const Input = forwardRef(
  (props: ComponentProps<"input"> & { error?: string }, ref) => (
    <input
      ref={ref}
      className={`rounded-[8px] bg-[#FFFFFF] p-[16px] w-full ${props.error && "bg-[#ecdada] text-[#BF1919] placeholder:text-[#BF1919]"}`}
      {...props}
    />
  )
);
