import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "./icons";
import { store } from "@/store";

const data = [
  { label: "Русский", value: "ru", href: "#" },
  { label: "English", value: "en", href: "#" },
  { label: "Казахский", value: "kk", href: "#" },
];

export function SelectLang() {
  const setLang = store((state) => state.setLang);
  const lang = store((state) => state.lang);
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    () => data.find((el) => el.value === lang) || data[1]
  );
  const { i18n } = useTranslation();
  const changeLang = (v: any) => {
    setSelected(v);
    setLang(v.value);
    i18n.changeLanguage(v.value);
    setOpen(false);
  };
  return (
    <div className="relative max-w-96 z-50">
      <div
        className={` flex xl:flex  items-center gap-[10px] cursor-pointer relative`}
        onClick={() => setOpen(true)}
      >
        <div className="text-[14px] leading-[18px] md:leading-[20px] xl:text-[18px] xl:leading-[24px]  text-[#F0F0F0] xl:text-primary font-medium">
          {selected.label}
        </div>
        <Icon name="CaretDown" className="fill-[#F0F0F0] xl:fill-primary" />
      </div>
      <div className={isOpen ? `flex absolute top-0 left-0 xl:right-0 xl:left-auto` : `hidden`}>
        <ul className="bg-[#F8F8F8] rounded-lg p-[10px] w-[227px] flex flex-col  xl:gap-[5px]">
          <li
            className="flex items-center justify-between gap-[10px] cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <Link
              className="text-[14px] leading-[18px] xl:text-[18px] xl:leading-[24px] md:leading-[20px] font-medium"
              href={selected.href}
            >
              {selected.label}
            </Link>
            <div className="rotate-180 transition-all">
              <Icon name="CaretDown" />
            </div>
          </li>
          {data.map((el) => (
            <li
              className="flex text-[14px] leading-[18px] xl:text-[18px] xl:leading-[24px] md:leading-[20px] justify-between items-center"
              key={el.label}
              onClick={() => {
                changeLang(el);
                setOpen(false);
              }}
            >
              <Link
                className={`text-[14px] leading-[18px] md:leading-[20px]  xl:text-[18px] xl:leading-[24px]font-medium text-[#929292] hover:text-[#373737]`}
                style={selected.label == el.label ? { color: "#373737" } : {}}
                href={el.href}
              >
                {el.label}
              </Link>
              {selected.label == el.label && <Icon name="Pass" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
