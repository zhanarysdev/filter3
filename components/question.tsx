import { useState } from "react";
import { Icon } from "./icons";
import { motion } from "motion/react";

import { Highlighter } from "react-fuzzy-highlighter";

export function Question({ el, index, f, m }) {
  const [curent, setCurent] = useState<null | number>(null);
  return (
    <div
      onClick={() => {
        if (index === curent) {
          setCurent(null);
        } else {
          setCurent(index);
        }
      }}
      className="flex flex-col py-[16px] border-t border-[#929292] overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <span className="text-[14px]  text-[#8a8a8a] leading-[18px] font-bold">
          {m.find(
            (el) => el.key === "questions.title" && el.refIndex === index
          ) ? (
            <Highlighter text={f.formatted.questions.title} />
          ) : (
            el.title
          )}
        </span>
        {curent === index ? <Icon name="Minus" /> : <Icon name="Plus" />}
      </div>
      {
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: curent === index ? "auto" : 0 }}
          className={`${curent === index && "mt-[16px]"} flex flex-col gap-[16px] overflow-hidden`}
        >
          {el.items.map((item, keys) => {
            return (
              <div
                key={keys}
                className="flex gap-[19px] items-start justify-start"
              >
                <div className="text-[14px] leading-[18px]">{keys + 1}.</div>
                <div className="flex flex-col gap-[8px]">
                  <span className="flex  text-[#8a8a8a] text-[14px] leading-[18px] font-bold">
                    {m &&
                    m.find(
                      (el) =>
                        el.key === "questions.items.title" &&
                        el.refIndex === keys
                    ) ? (
                      <Highlighter text={f.formatted.questions.items.title} />
                    ) : (
                      item.title
                    )}
                  </span>
                  <div className="text-[14px]  text-[#8a8a8a] leading-[18px]">
                    {m &&
                    m.find(
                      (el) =>
                        el.key === "questions.items.text" &&
                        el.refIndex === keys
                    ) ? (
                      <Highlighter text={f.formatted.questions.items.text} />
                    ) : (
                      item.text
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      }
    </div>
  );
}
