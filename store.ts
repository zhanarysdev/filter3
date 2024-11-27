import { create } from "zustand";

interface IStore {
    index: number,
    goHome: () => void,
    increment: () => void,
    decrement: () => void,
    isFooterOpened: boolean,
    showFooter: (v: boolean) => void,
    lang: string,
    setLang: (v: string) => void,
    direction: string,
    setDirection: (v: string) => void,
    isExploreHidden: boolean,
    hideExplore: () => void,
    isAccept: boolean,
    accept: () => void
}

export const store = create<IStore>((set) => ({
    index: 0,
    goHome: () => set({ index: 0 }),
    increment: () => set((state: { index: number }) => ({ index: state.index + 1 })),
    decrement: () => set((state: { index: number }) => ({ index: state.index - 1 })),
    isFooterOpened: false,
    showFooter: (v: boolean) => set({ isFooterOpened: v }),
    lang: "en",
    setLang: (v: string) => {
        set({ lang: v })
        localStorage.setItem("lang", v)
    },
    direction: "down",
    setDirection: (v) => set({ direction: v }),
    isExploreHidden: false,
    hideExplore: () => set({ isExploreHidden: true }),
    isAccept: false,
    accept: () => {
        set({ isAccept: true })
        localStorage.setItem("accept", "true")
    }
}))