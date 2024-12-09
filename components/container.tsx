import { ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`px-[10px] md:px-[20px] lg:px-[30px] ${className}`}>
    {children}
  </div>
);
