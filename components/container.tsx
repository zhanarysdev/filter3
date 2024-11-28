import { ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`px-4 md:px-5 ${className}`}>{children}</div>;
