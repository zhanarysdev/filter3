"use client";

import { BackButton } from "@/components/back-button";
import { Container } from "@/components/container";
import { Questions } from "@/components/questions";
import { Search } from "@/components/search";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { categories, data } from "@/faq-data";
import { AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Icon } from "@/components/icons";
import FuzzyHighlighter, { Highlighter } from "react-fuzzy-highlighter";
import { Question } from "@/components/question";

const FZ: any = FuzzyHighlighter;

export default function Faq() {
  const [selected, setSelected] = useState<null | number>(null);
  const [value, onChange] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

  const searchHandler = (v: string) => {
    onChange(v);
  };

  useEffect(() => {
    let t;
    if (focused) {
      t = setTimeout(() => {
        if (ref.current) {
          ref.current.scrollIntoView({
            block: "end",
            behavior: "instant",
          });
        }
      }, 100);
    }
    return () => {
      clearTimeout(t);
    };
  }, [focused]);

  return (
    <AnimatePresence mode="wait">
      <section className="lg:flex lg:h-full relative overflow-y-scroll">
        <div ref={ref}></div>
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
                ? "fixed top-[10px] left-[10px] right-[10px] md:top-[20px] md:left-[20px] md:right-[20px] overflow-y-auto flex-col bg-[#F0F0F0] bottom-0 z-[9999]"
                : "relative"
            }
          >
            <Search
              value={value}
              onChange={searchHandler}
              className="hidden lg:flex"
            />
            <motion.div layout className="flex items-center gap-[10px]">
              <motion.div
                layout
                className={!focused ? "hidden" : ""}
                onClick={() => {
                  onChange("");
                  setFocused(false);
                }}
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
                className="lg:hidden"
              />
            </motion.div>
            <motion.div layout className={!focused ? "hidden" : "mt-[30px] "}>
              <FZ
                query={value}
                data={data}
                options={{
                  shouldSort: true,
                  includeMatches: true,
                  threshold: 0.3,
                  location: 0,
                  distance: 100,
                  minMatchCharLength: 1,
                  keys: [
                    "questions.items.title",
                    "questions.items.text",
                    "title",
                    "questions.title",
                  ],
                }}
              >
                {({ formattedResults }) => {
                  return (
                    <ul className="flex flex-col gap-8 mt-[30px] md:mt-[40px] lg:mt-0">
                      {formattedResults.map((formattedResult, resultIndex) => {
                        if (formattedResult.formatted.title === undefined) {
                          return null;
                        }

                        return (
                          <div key={resultIndex}>
                            <h3 className="text-[16px] text-[#8a8a8a] leading-[20px] font-bold lg:text-[27px] lg:leading-[32px]">
                              <Highlighter
                                text={formattedResult.formatted.title}
                              />
                            </h3>
                            <div>
                              <div className="mt-[16px] flex flex-col border-b border-[#929292] ">
                                {formattedResult.item.questions.map(
                                  (el, index) => (
                                    <Question
                                      m={formattedResult.matches}
                                      f={formattedResult}
                                      key={index}
                                      index={index}
                                      el={el}
                                    />
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </ul>
                  );
                }}
              </FZ>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[10px] mt-[20px] md:mt-[40px] lg:mt-[30px] lg:max-w-[619px]">
            {categories.map((el, index) => (
              <div
                onClick={() => {
                  onChange("");
                  setSelected(el.id);
                }}
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
          <Questions
            query={value}
            selected={selected}
            setSelected={setSelected}
          />
        </Container>
      </section>
    </AnimatePresence>
  );
}
