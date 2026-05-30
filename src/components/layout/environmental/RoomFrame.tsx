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
        "flex min-h-[calc(100vh-9rem)] flex-col justify-center py-20", 
        className
      )}
    >
      {children}
    </div>
  );
}