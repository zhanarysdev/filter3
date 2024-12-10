export function Title({ data }: { data: string }) {
  return (
    <h2
      className={`lg:tracking-[-2.2px] tracking-[-1.2px] font-bold text-[30px] md:text-[38px] leading-[34px] md:leading-[42px] lg:text-[54px] lg:leading-[58px]`}
    >
      {data}
    </h2>
  );
}
