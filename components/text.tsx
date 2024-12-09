export function Text({
  data,
  weight = "medium",
}: {
  data: string;
  weight?: "bold" | "medium";
}) {
  return (
    <p
      className={`tracking-[-0.56px] text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[16px] lg:leading-[20px] xl:text-[18px] xl:leading-[24px] font-${weight}`}
    >
      {data}
    </p>
  );
}
