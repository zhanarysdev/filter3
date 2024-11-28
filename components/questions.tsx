"use client";
import { xswiper } from "@/helpers";
import { Dispatch, SetStateAction, useState } from "react";
import { data } from "@/faq-data";
import { Title } from "./title";
import { Icon } from "./icons";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

export function Questions({
  selected,
  setSelected,
}: {
  selected: null | number;
  setSelected: Dispatch<SetStateAction<null | number>>;
}) {
  const [curent, setCurent] = useState<number>(0);

  const [inix, setinix] = useState<null | number>(null);
  const [iniy, setiniy] = useState<null | number>(null);

  function startTouch(e: any) {
    setinix(e.touches[0].clientX);
    setiniy(e.touches[0].clientY);
  }
  function goBack() {
    setCurent(0);
    setSelected(null);
  }

  return (
    <div
      onTouchStart={startTouch}
      onTouchMove={(e) => xswiper(e, inix, iniy, setinix, setiniy, goBack)}
      className="fixed top-[58px] md:top-[84px] lg:top-0 left-0 lg:left-auto right-0 lg:right-auto bottom-0 lg:h-full lg:py-[20px] p-[16px] md:p-[20px] bg-white transition-all"
      style={{
        transform: selected !== null ? "translateX(0)" : "translateX(100vw)",
      }}
    >
      {selected !== null && (
        <AnimatePresence>
          <div className="flex flex-col justify-between md:justify-start h-full overflow-y-auto">
            <h3 className="text-[30px] leading-[34px] font-bold lg:text-[27px] lg:leading-[32px]">
              {data[selected].title}{" "}
            </h3>
            <div className="mt-[16px] flex flex-col border-b border-[#929292] ">
              {data[selected].questions.map((el, index) => (
                <div
                  onClick={() => setCurent(index)}
                  key={index}
                  className="flex flex-col py-[16px] border-t border-[#929292] overflow-hidden"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] leading-[18px] font-bold">
                      {el.title}
                    </span>
                    {curent === index ? (
                      <Icon name="Minus" />
                    ) : (
                      <Icon name="Plus" />
                    )}
                  </div>
                  {
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: curent === index ? "auto" : 0 }}
                      className={`${curent === index && "mt-[16px]"} flex flex-col gap-[16px] overflow-hidden`}
                    >
                      {el.items.map((item, keys) => (
                        <div
                          key={keys}
                          className="flex gap-[19px] items-start justify-start"
                        >
                          <div className="text-[14px] leading-[18px]">
                            {keys + 1}.
                          </div>
                          <div className="flex flex-col gap-[8px]">
                            <span className="flex text-[14px] leading-[18px] font-bold">
                              {item.title}
                            </span>
                            <span className="flex text-[14px] leading-[18px]">
                              {item.text}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  }
                </div>
              ))}
            </div>
            <div className="flex flex-col bg-[#FFFFFF] p-[16px] gap-[16px] rounded-[16px] mt-[32px] md:mt-auto">
              <div className="flex flex-col gap-[8px]">
                <div className="text-[24px] leading-[26px] font-bold">
                  Still need help?
                </div>
                <div className="text-[#929292] text-[14px] leading-[18px]">
                  The Filter support team is here to help
                </div>
              </div>
              <Link
                className="text-[14px] leading-[18px] font-bold text-white bg-primary py-[16px] px-[32px] rounded-[16px] w-fit"
                href="/form"
              >
                Submit a request
              </Link>
            </div>
          </div>
        </AnimatePresence>
      )}
    </div>
  );
}
