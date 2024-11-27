'use client'

import { store } from "@/store"
import { useEffect, useState } from "react"

export function Accept() {
    const accept = store(state => state.accept)
    const isAccept = store(state => state.isAccept)
    const [show, setShow] = useState(false)
    useEffect(() => {
        const asd = setTimeout(() => {
            setShow(true)
        }, 1500);
        return () => clearTimeout(asd)
    }, [])
    return (
        <>
            {
                !isAccept && show && <div className="fixed bottom-5 right-5 rounded-[8px] p-[16px] flex gap-[16px] bg-[#FFFFFF] z-40" onClick={accept}>
                    <span>            This website uses cookies.</span>
                    <span className="cursor-pointer">Reject</span>
                    <span className="cursor-pointer">Accept</span>
                </div>
            }
        </>
    )
}