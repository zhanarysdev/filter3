export function Title({ data }: { data: string }) {
  return (
    <h2
      className={`tracking-[-1.2px] font-bold text-[30px] md:text-[59px] leading-[34px] md:leading-[62px] lg:text-[54px] lg:leading-[56px] xl:text-[76px] xl:leading-[80px]`}
    >
      {data}
    </h2>
  );
}
