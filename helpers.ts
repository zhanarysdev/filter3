import { store } from "./store"
import { Dispatch, SetStateAction, WheelEvent } from "react";



export function wheel(e: WheelEvent<HTMLElement>, length: number) {

    const index = store.getState().index
    const showFooter = store.getState().showFooter
    const increment = store.getState().increment
    const decrement = store.getState().decrement

    if (e.deltaY > 0 && index < length) {
        increment()
    }

    if (e.deltaY > 0 && index === length) {
        showFooter(true)
    }

    if (e.deltaY < 0 && index !== 0) {
        decrement()
    }

}

export function xswiper(e: any, inix: number | null, iniy: number | null, setinix: Dispatch<SetStateAction<number | null>>, setiniy: Dispatch<SetStateAction<number | null>>, cb: () => void) {
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

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
            cb()
        }
    }
    setinix(null)
    setiniy(null)
    e.preventDefault();
};