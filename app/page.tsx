'use client'

import { Section } from "@/components/section";
import { store } from "@/store";
import { AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n } = useTranslation()
  const setLang = store(state => state.setLang)

  useEffect(() => {
    const selectedLang = localStorage.getItem("lang");
    if (selectedLang) {
      i18n.changeLanguage(selectedLang);
      setLang(selectedLang)
    } else {
      i18n.changeLanguage("en");
    }
  }, [setLang, i18n]);

  return (
    <AnimatePresence mode="wait">
      <Section />
    </AnimatePresence>
  );
}
