import { ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`px-[10px] md:px-5 ${className}`}>{children}</div>;
