'use client'
import { data } from "@/data";
import { wheel } from "@/helpers";
import { store } from "@/store";
import { motion } from 'motion/react';
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Animate } from "./animate";
import { Buttons } from "./buttons";
import { Container } from "./container";
import { Text } from "./text";
import { Title } from "./title";

export function Section() {
    const { t } = useTranslation()
    const index = store((state) => state.index)

    const showFooter = store(state => state.showFooter)
    const increment = store(state => state.increment)
    const decrement = store(state => state.decrement)

    const [inix, setinix] = useState<null | number>(null)
    const [iniy, setiniy] = useState<null | number>(null)

    function startTouch(e: any) {
        setinix(e.touches[0].clientX)
        setiniy(e.touches[0].clientY)
    };

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
                increment()
            }

            if (diffY > 0 && index === data.length - 1) {
                showFooter(true)
            }

            if (diffY < 0 && index !== 0) {
                decrement()
            }
        }
        setinix(null)
        setiniy(null)
    };

    return (
        <section className="h-full flex flex-col mt-[32px]" onWheel={e => wheel(e, data.length - 1)} onTouchStart={startTouch} onTouchMove={moveTouch}>
            <Container>
                <Animate id={`${data[index].img} - ${data[index].title}`}>
                    <Title data={t(data[index].title)} />
                </Animate>
                <div className="mt-[8px] mb-[16px]">
                    <Animate id={`${data[index].key} - ${data[index].text}`}>
                        <Text data={t(data[index].text)} />
                    </Animate>
                </div>
                {
                    data[index].buttons && <Animate id={`${data[index].buttons}`}>
                        <Buttons variant={data[index].buttons} />
                    </Animate>
                }
            </Container>
            <motion.div key={`${data[index].key} - ${index}}`} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative flex-auto mt-[32px]">
                {
                    data[index].img ? <Image src={data[index].img} alt={""} fill sizes="100% 100%" objectFit="cover" /> : <video muted width="100%" height={'100%'} loop autoPlay={true}>
                        <source src={data[index].video} />
                    </video>
                }
            </motion.div>
        </section >
    )
}