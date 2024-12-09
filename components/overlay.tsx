"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Explore } from "./explore";

export function Overlay() {
  const pathname = usePathname();
  return (
    <div className="hidden bg-transparent lg:flex flex-col justify-end  fixed  left-0 right-[50%] bottom-0 p-[16px] md:p-[20px] lg:p-[30px]">
      <div className="text-[#929292] text-[18px] leading-[24px] flex justify-between items-end">
        <div className="flex flex-col gap-[5px]">
          <Link
            className={`hover:text-primary lg:hidden`}
            style={{ color: pathname === "/form" ? "#373737" : "" }}
            href="/form"
          >
            Help Center
          </Link>
          <Link
            className={`hover:text-primary`}
            style={{ color: pathname === "/faq" ? "#373737" : "" }}
            href="/faq"
          >
            FAQ
          </Link>
          <Link
            className={`hover:text-primary`}
            style={{ color: pathname === "/terms" ? "#373737" : "" }}
            href="/terms"
          >
            Terms of use
          </Link>
          <Link
            className={`hover:text-primary`}
            style={{ color: pathname === "/policy" ? "#373737" : "" }}
            href="/policy"
          >
            Privacy Policy
          </Link>
        </div>
        <Explore />
      </div>
    </div>
  );
}
