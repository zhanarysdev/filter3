export function Text({
  data,
  weight = "medium",
}: {
  data: string;
  weight?: "bold" | "medium";
}) {
  return (
    <p
      className={`tracking-[-0.56px] text-[14px] leading-[20px] md:leading-[20px] lg:text-[16px] lg:leading-[20px] xl:text-[18px] xl:leading-[24px] font-${weight}`}
    >
      {data}
    </p>
  );
}
