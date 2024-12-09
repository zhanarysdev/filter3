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
        <Container className="lg:flex-1 border-r border-[#DFDFDF] lg:pt-[162px] xl:pt-[280px]">
          <BackButton />
          <div className="lg:max-w-[619px]">
            <Title data="How can we help?" />
            <div className="mt-[5px] md:my-[20px] mb-[20px]">
              <Text data="This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support." />
            </div>
            <motion.div
              layout
              className={
                focused
                  ? "fixed top-[10px] left-[10px] right-[10px] flex-col bg-[#F0F0F0] bottom-0 z-[9999]"
                  : "relative"
              }
            >
              <motion.div layout className="flex items-center gap-[10px]">
                <motion.div
                  layout
                  className={!focused ? "hidden" : ""}
                  onClick={() => setFocused(false)}
                >
                  <Icon name="CaretDown" className="rotate-90 text-[#373737]" />
                </motion.div>
                <Search
                  onFocus={() => setFocused(true)}
                  value={value}
                  onChange={searchHandler}
                />
              </motion.div>
              <motion.div layout className={!focused ? "hidden" : "mt-[30px]"}>
                {result?.map((el, index) => (
                  <div
                    onClick={() => {
                      onChange("");
                      setReslut(null);
                      setSelected(el.id);
                      setFocused(false);
                    }}
                    key={index}
                  >
                    {el.title}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-[15px] mt-[20px] lg:max-w-[619px]">
            {categories.map((el, index) => (
              <div
                onClick={() => setSelected(el.id)}
                className="border border-[#929292] rounded-[16px] flex flex-col justify-start p-[12px] items-start gap-[8px] px-[12px] flex-1 min-w-[104px] md:min-w-[167px] min-h-[104px] md:min-h-[167px] lg:min-w-[148px] lg:min-h-[148px] hover:bg-primary hover:text-background cursor-pointer"
                key={index}
              >
                <span className="text-[14px] max-w-[98px] md:text-[18px] md:leading-[22px] font-bold leading-[18px]">
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
