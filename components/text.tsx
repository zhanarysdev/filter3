export function Text({
  data,
  weight = "medium",
}: {
  data: string;
  weight?: "bold" | "medium";
}) {
  return (
    <p
      className={`text-[14px] leading-[18px] md:leading-[20px] lg:text-[16px] lg:leading-[20px] xl:text-[18px] xl:leading-[24px] font-${weight}`}
    >
      {data}
    </p>
  );
}
