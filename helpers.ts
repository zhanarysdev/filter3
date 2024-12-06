import { store } from "./store";
import { Dispatch, SetStateAction, WheelEvent } from "react";

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export const wheel = (e: WheelEvent<HTMLElement>, length: number) => {
  const index = store.getState().index;
  const showFooter = store.getState().showFooter;
  const increment = store.getState().increment;
  const decrement = store.getState().decrement;
  const hideExplore = store.getState().hideExplore;
  const setDirection = store.getState().setDirection;
  if (e.deltaY > 0 && index < length) {
    increment();
    hideExplore();
    setDirection("down");
  }

  if (e.deltaY > 0 && index === length) {
    showFooter(true);
  }

  if (e.deltaY < 0 && index !== 0) {
    decrement();
    setDirection("up");
  }
};

export function xswiper(
  e: any,
  inix: number | null,
  iniy: number | null,
  setinix: Dispatch<SetStateAction<number | null>>,
  setiniy: Dispatch<SetStateAction<number | null>>,
  cb: () => void
) {
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
      cb();
    }
  }
  setinix(null);
  setiniy(null);
  e.preventDefault();
}
