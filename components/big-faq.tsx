'use client'

import { PageWrapper } from "@/components/page-wrapper"
import { Questions } from "@/components/questions"
import { Search } from "@/components/search"
import { Text } from "@/components/text"
import { Title } from "@/components/title"
import { categories, data } from "@/faq-data"
import { AnimatePresence } from "motion/react"
import { useState } from "react"
import { BigQuestions } from "./big-questions"
import { Container } from "./container"
import BigForm from "./big-form"

export default function BigFaq() {
    const [selected, setSelected] = useState<null | number>(null)
    const [value, onChange] = useState("")
    const [result, setReslut] = useState<any>(null)

    const searchHandler = (v: string) => {
        onChange(v)
        console.log(data.filter((el) => el.title.toLocaleLowerCase().includes(v.toLocaleLowerCase())))
    }

    return (
        <div className="hidden xl:flex h-full">
            <AnimatePresence mode="wait">
                <div className="flex">
                    <div className="flex flex-col flex-1 xl:px-[20px] pt-[260px] border-r border-[#929292]">
                        <Container>
                            <Title data="How can we help?" />
                            <div className="mt-[8px] md:my-[20px] mb-[16px]">
                                <Text data="This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support." />
                            </div>
                            <Search value={value} onChange={searchHandler} />
                            <div className="flex flex-wrap gap-[15px] mt-[31px]">
                                {
                                    categories.map((el, index) => <div onClick={() => setSelected(index)} className="border border-[#929292] rounded-[16px] flex flex-col justify-center items-start gap-[8px] px-[12px] w-[104px] md:w-[167px] h-[104px] md:h-[167px]" key={index}>
                                        <span className="text-[24px] md:text-[27px] md:leading-[30px] font-bold leading-[26px]">{index + 1}.</span>
                                        <span className="text-[14px] md:text-[18px] md:leading-[22px] font-bold leading-[18px]">{el}</span>
                                    </div>)
                                }
                            </div>
                        </Container>
                    </div>
                    <BigQuestions selected={selected} />
                </div>
            </AnimatePresence>
        </div>
    )
}