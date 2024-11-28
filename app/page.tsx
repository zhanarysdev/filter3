"use client";

import { Section } from "@/components/section";
import { store } from "@/store";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n } = useTranslation();
  const setLang = store((state) => state.setLang);
  const accept = store((state) => state.accept);

  useEffect(() => {
    const selectedLang = localStorage.getItem("lang");
    if (selectedLang) {
      i18n.changeLanguage(selectedLang);
      setLang(selectedLang);
    } else {
      i18n.changeLanguage("en");
    }
  }, [setLang, i18n]);

  useEffect(() => {
    const isAccept = localStorage.getItem("accept");
    if (isAccept) {
      accept();
    }
  }, [accept]);

  return <Section />;
}
