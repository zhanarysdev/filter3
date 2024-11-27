import { ReactNode } from "react";
import { Container } from "./container";
import { wheel } from "@/helpers";

export function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <section className="h-full flex flex-col mt-[32px] md:mt-[40px]" onWheel={e => wheel(e, 4)}>
            <Container>{children}</Container>
        </section>
    )
}