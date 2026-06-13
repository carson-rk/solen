import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RoomFrameProps = {
  children: ReactNode;
  className?: string;
};

export function RoomFrame({ children, className }: RoomFrameProps) {
  return (
    <div 
      className={cn(
        "flex flex-col justify-center py-5", 
        className
      )}
    >
      {children}
    </div>
  );
}