"use client";

import { ComponentProps, forwardRef } from "react";

export const Textarea = forwardRef(
  (props: ComponentProps<"textarea"> & { error?: string }, ref) => (
    <textarea
      ref={ref}
      className={`${props.error && "bg-[#ecdada] text-[#BF1919] placeholder:text-[#BF1919]"} rounded-[8px] bg-[#FFFFFF] p-[16px] w-full`}
      {...props}
    />
  )
);
