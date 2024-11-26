'use client'
import { xswiper } from "@/helpers";
import { Dispatch, SetStateAction, useState } from "react";
import { data } from "@/faq-data";
import { Title } from "./title";

export function Questions({ selected, setSelected }: { selected: null | number, setSelected: Dispatch<SetStateAction<null | number>> }) {

    const [inix, setinix] = useState<null | number>(null)
    const [iniy, setiniy] = useState<null | number>(null)

    function startTouch(e: any) {
        setinix(e.touches[0].clientX)
        setiniy(e.touches[0].clientY)
    };

    return (
        <div onTouchStart={startTouch} onTouchMove={e => xswiper(e, inix, iniy, setinix, setiniy, () => setSelected(null))} className="fixed top-[74px] left-0 right-0 px-[16px] bottom-0 bg-white transition-all" style={{ transform: selected !== null ? "translateX(0)" : "translateX(100vw)" }}>
            {
                selected && (
                    <Title data={data[selected].title} />
                )
            }
        </div>
    )
}