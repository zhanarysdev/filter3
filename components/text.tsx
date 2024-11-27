export function Text({ data }: { data: string }) {
    return <p className="text-[14px] leading-[18px] md:leading-[20px] xl:text-[18px] xl:leading-[24px] font-medium">{data}</p>
}