export function Title({ data }: { data: string }) {
    return (
        <h2 className={`font-bold text-[30px] md:text-[59px] leading-[34px] md:leading-[62px] xl:text-[76px] xl:leading-[80px]`}>{data}</h2>
    )
}