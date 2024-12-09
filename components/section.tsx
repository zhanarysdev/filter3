"use client";
import { data } from "@/data";
import { wheel } from "@/helpers";
import { store } from "@/store";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Animate } from "./animate";
import { Buttons } from "./buttons";
import { Container } from "./container";
import { Text } from "./text";
import { Title } from "./title";

export function Section() {
  const { t } = useTranslation();
  const index = store((state) => state.index);

  const showFooter = store((state) => state.showFooter);
  const increment = store((state) => state.increment);
  const decrement = store((state) => state.decrement);
  const setDirection = store((state) => state.setDirection);
  const hideExplore = store((state) => state.hideExplore);

  const [inix, setinix] = useState<null | number>(null);
  const [iniy, setiniy] = useState<null | number>(null);

  function startTouch(e: any) {
    setinix(e.touches[0].clientX);
    setiniy(e.touches[0].clientY);
  }

  const moveTouch = (e: any) => {
    if (inix === null) {
      return;
    }
    if (iniy === null) {
      return;
    }
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = inix - currentX;
    const diffY = iniy - currentY;

    if (Math.abs(diffX) < Math.abs(diffY)) {
      if (diffY > 0 && index < data.length - 1) {
        increment();
        setDirection("down");
        hideExplore();
      }

      if (diffY > 0 && index === data.length - 1) {
        showFooter(true);
      }

      if (diffY < 0 && index !== 0) {
        decrement();
        setDirection("up");
      }
    }
    setinix(null);
    setiniy(null);
  };

  const title = t(data[index].title);
  const titles = title.split("<br/>");
  const text = t(data[index].text);
  const texts = text.split("<br/>");

  return (
    <section
      className="h-full  flex flex-col lg:flex-row mt-[30px] md:mt-[40px] lg:mt-0"
      onWheel={(e) => wheel(e, data.length - 1)}
      onTouchStart={startTouch}
      onTouchMove={moveTouch}
    >
      <div className="lg:items-center lg:p-0 lg:flex lg:flex-1 lg:bg-white">
        <AnimatePresence mode="wait">
          <Container className="flex flex-col">
            {titles.map((el, index) => (
              <Animate key={`${el} - ${index}`} id={`${el} - ${index}`}>
                <Title data={el} />
              </Animate>
            ))}
            <div className="mt-[5px] mb-[15px] md:mt-[10px] md:mb-[20px] max-w-[474px] lg:max-w-[558px] lg:mt-[15px] lg:mb-[30px]">
              {texts.map((el, key) => (
                <Animate
                  key={`${el} - ${index} - ${key}`}
                  id={`${el} - ${index} - ${key}`}
                >
                  <Text data={el} />
                </Animate>
              ))}
            </div>
            {data[index].buttons && (
              <Animate id={`${data[index].buttons}`}>
                <Buttons variant={data[index].buttons} />
              </Animate>
            )}
          </Container>
        </AnimatePresence>
      </div>
      <motion.div
        key={`${data[index].key} - ${index}}`}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="m-[10px] md:m-[20px] md:mt-[30px] lg:flex-1 relative flex-auto mt-[30px] lg:m-0"
      >
        {data[index].img ? (
          <Image
            src={data[index].img}
            alt={""}
            fill
            sizes="100% 100%"
            objectFit="cover"
          />
        ) : (
          <div className="absolute top-0 right-0 left-0 bottom-0 lg:p-[20px]">
            <video
              playsInline
              muted
              className="w-full h-full object-cover"
              loop
              autoPlay={true}
            >
              <source src={data[index].video} />
            </video>
          </div>
        )}
      </motion.div>
    </section>
  );
}
