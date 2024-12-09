"use client";

import { BackButton } from "@/components/back-button";
import { Container } from "@/components/container";
import { Questions } from "@/components/questions";
import { Search } from "@/components/search";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { categories, data } from "@/faq-data";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "motion/react";
import { Icon } from "@/components/icons";

export default function Faq() {
  const [selected, setSelected] = useState<null | number>(null);
  const [value, onChange] = useState("");
  const [result, setReslut] = useState<
    | null
    | {
        title: string;
        id: number;
      }[]
  >(null);
  const [focused, setFocused] = useState(false);

  const searchHandler = (v: string) => {
    onChange(v);
    if (!v) {
      setReslut(null);
    } else {
      setReslut(
        categories.filter((el) =>
          el.title.toLocaleLowerCase().includes(v.toLocaleLowerCase())
        )
      );
    }
  };

  return (
    <AnimatePresence mode="wait">
      <section className="lg:flex lg:h-full overflow-y-scroll">
        <Container className="lg:flex-1 lg:flex lg:flex-col justify-center">
          <BackButton />
          <div className="lg:max-w-[619px] md:max-w-[525px]">
            <Title data="How can we help?" />
            <div className="mt-[5px] md:mt-[10px] mb-[20px] md:mb-[40px] lg:mt-[15px] lg:mb-[30px]">
              <Text data="This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support." />
            </div>
          </div>
          <motion.div
            layout
            className={
              focused
                ? "fixed top-[10px] left-[10px] right-[10px] md:top-[20px] md:left-[20px] md:right-[20px] flex-col bg-[#F0F0F0] bottom-0 z-[9999]"
                : "relative"
            }
          >
            <motion.div layout className="flex items-center gap-[10px]">
              <motion.div
                layout
                className={!focused ? "hidden" : ""}
                onClick={() => setFocused(false)}
              >
                <Icon
                  name="CaretDown"
                  className="rotate-90 cursor-pointer text-[#373737]"
                />
              </motion.div>
              <Search
                onFocus={() => setFocused(true)}
                value={value}
                onChange={searchHandler}
              />
            </motion.div>
            <motion.div layout className={!focused ? "hidden" : "mt-[30px] "}>
              {result?.map((el, index) => (
                <div
                  onClick={() => {
                    onChange("");
                    setReslut(null);
                    setSelected(el.id);
                    setFocused(false);
                  }}
                  className="cursor-pointer"
                  key={index}
                >
                  {el.title}
                </div>
              ))}
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[10px] mt-[20px] md:mt-[40px] lg:mt-[30px] lg:max-w-[619px]">
            {categories.map((el, index) => (
              <div
                onClick={() => setSelected(el.id)}
                className="border border-[#929292] rounded-[16px] flex flex-col justify-start p-[12px] md:p-[16px] items-start gap-[8px]  flex-1 min-w-[104px] md:min-w-[167px] min-h-[104px] md:min-h-[167px] lg:min-w-[148px] lg:min-h-[148px] hover:bg-primary hover:text-background cursor-pointer"
                key={index}
              >
                <span className="text-[14px] max-w-[98px] md:text-[16px] md:leading-[22px] font-bold leading-[18px] lg:text-[20px] lg:leading-[24px] lg:tracking-[-1.1px]">
                  {el.title}
                </span>
              </div>
            ))}
          </div>
        </Container>
        <Container className="lg:flex-1">
          <Questions selected={selected} setSelected={setSelected} />
        </Container>
      </section>
    </AnimatePresence>
  );
}
