import { ReactNode } from "react";
import { Icon } from "./icons";

function Button({ children }: { children: ReactNode }) {
  return (
    <div className="cursor-pointer hover:text-background border hover:bg-primary flex items-center gap-[4px] border-primary rounded-[8px] pl-[6px] pr-[8px] py-[6px] text-[14px] leading-[18px] md:leading-[20px] font-medium lg:text-[16px] lg:leading-[20px] xl:text-[18px] xl:leading-[24px] hover:[&>svg]:color-background">
      {children}
    </div>
  );
}

export function Buttons({ variant }: { variant: string }) {
  if (variant === "second") {
    return (
      <div className="flex flex-col gap-[10px] justify-center items-start">
        <Button>
          <Icon
            name="AppStore"
            className="w-[18px] h-[18px] xl:w-[20px] xl:h-[20px]"
          />
          <span className="font-semibold lg:font-bold">Download iOS App</span>
        </Button>
        <Button>
          <Icon
            name="PlayMarket"
            className="w-[18px] h-[18px] xl:w-[20px] xl:h-[20px]"
          />
          <span className="font-semibold lg:font-bold">
            Download Android App
          </span>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-[10px] items-center">
      <Button>
        <Icon
          name="AppStore"
          className="w-[18px] h-[18px] xl:w-[20px] xl:h-[20px]"
        />
        <span className="font-semibold">App Store</span>
      </Button>
      <Button>
        <Icon
          name="PlayMarket"
          className="w-[18px] h-[18px] xl:w-[20px] xl:h-[20px]"
        />
        <span className="font-semibold">Google Play</span>
      </Button>
    </div>
  );
}
