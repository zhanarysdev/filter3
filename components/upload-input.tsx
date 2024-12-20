"use client";
import { ComponentProps } from "react";

export default function UploadInput(props: ComponentProps<"input">) {
  return (
    <div
      className={
        "relative rounded-[8px] justify-center items-center bg-[#FFFFFF] p-[16px] "
      }
    >
      <div className="absolute">Add file or drop files here</div>
      <input type="file" name={"image"} className={"opacity-0 w-full"} />
    </div>
  );
}
