'use client'
import { store } from '@/store'
import { motion } from 'motion/react'
import { ReactNode, useEffect, useRef, useState } from 'react'
export function Animate({ children, id }: { children: ReactNode, id: string }) {
    const ref = useRef<null | HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    const direction = store(state => state.direction)

    useEffect(() => {
        if (ref.current && height === 0) {
            setHeight(ref.current.clientHeight)
        }
    }, [ref, height])


    return (
        <div ref={ref} className='overflow-hidden'>
            <div className={`${height ? "hidden" : "invisible"}`}>{children}</div>
            {height ? <motion.div key={id} initial={{ y: direction === "down" ? height : -height }} exit={{ y: direction === "down" ? -height : height }} transition={{ ease: 'linear', duration: .15 }} animate={{ y: 0 }}>{children}</motion.div> : null}
        </div>
    )

}