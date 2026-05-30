import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AtmosphericStackProps = {
  children: ReactNode;
  className?: string;
};

export function AtmosphericStack({ children, className }: AtmosphericStackProps) {
  return (
    <div className={cn("mx-auto flex w-full max-w-3xl flex-col", className)}>
      {children}
    </div>
  );
}