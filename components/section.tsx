'use client'
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Container } from "./container";
import { Text } from "./text";
import { Title } from "./title";
import { Animate } from "./animate";
import { motion } from 'motion/react'
import { store } from "@/store";
import { data } from "@/data";
import { Buttons } from "./buttons";
import { wheel } from "@/helpers";

export function Section() {
    const { t } = useTranslation()
    const index = store((state) => state.index)

    return (
        <section className="h-full flex flex-col mt-[32px]" onWheel={e => wheel(e, data.length - 1)}>
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