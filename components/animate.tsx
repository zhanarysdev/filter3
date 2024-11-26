'use client'
import { motion } from 'motion/react'
import { ReactNode, useEffect, useRef, useState } from 'react'
export function Animate({ children, id }: { children: ReactNode, id: string }) {
    const ref = useRef<null | HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (ref.current && height === 0) {
            setHeight(ref.current.clientHeight)
        }
    }, [ref, height])


    return (
        <div ref={ref} className='overflow-hidden'>
            <div className={`${height ? "hidden" : "invisible"}`}>{children}</div>
            {height ? <motion.div key={id} initial={{ y: height }} exit={{ y: -height }} transition={{ ease: 'linear', duration: .15 }} animate={{ y: 0 }}>{children}</motion.div> : null}
        </div>
    )

}