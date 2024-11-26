'use client'

import { Section } from "@/components/section";
import { AnimatePresence } from "motion/react";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <Section />
    </AnimatePresence>
  );
}
