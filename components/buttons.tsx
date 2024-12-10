import { ReactNode } from "react";
import { Icon } from "./icons";

function Button({ children }: { children: ReactNode }) {
  return (
    <div className="cursor-pointer hover:text-background border hover:bg-primary flex items-center gap-[4px] border-primary rounded-[8px] pl-[6px] pr-[8px] py-[6px] text-[14px] leading-[18px] md:text-[16px] md:leading-[22px] font-semibold lg:text-[18px] lg:leading-[24px] lg:tracking-[-1px]  hover:[&>svg]:color-background">
      {children}
    </div>
  );
}

export function Buttons({ variant }: { variant: string }) {
  if (variant === "second") {
    return (
      <div className="flex lg:flex-col gap-[10px] items-start ">
        <Button>
          <Icon
            name="AppStore"
            className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]"
          />
          <span className="hidden lg:flex font-semibold lg:font-bold">
            Download iOS App
          </span>
          <span className="font-semibold lg:hidden">App Store</span>
        </Button>
        <Button>
          <Icon
            name="PlayMarket"
            className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]  lg:w-[24px] lg:h-[24px]"
          />
          <span className="hidden lg:flex font-semibold lg:font-bold">
            Download Android App
          </span>

          <span className="font-semibold lg:hidden">Google Play</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-[10px] items-start">
      <Button>
        <Icon
          name="AppStore"
          className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]"
        />
        <span className="font-semibold">App Store</span>
      </Button>
      <Button>
        <Icon
          name="PlayMarket"
          className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]"
        />
        <span className="font-semibold">Google Play</span>
      </Button>
    </div>
  );
}
