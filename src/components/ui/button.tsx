import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Solen Atmospheric Button Primitive
 */
const buttonIntents = cva(
  // Base Atmospheric Tokens: Softer transitions, semantic focus rings
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm tracking-wide transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base disabled:pointer-events-none disabled:opacity-30 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      intent: {
        // The action of moving forward or confirming.
        proceed:
          "bg-[hsl(var(--action-proceed))] text-[hsl(var(--action-proceed-foreground))] hover:brightness-110 active:scale-[0.98]",
        
        // Grounding actions, remaining in the current state but adjusting.
        settle:
          "bg-[hsl(var(--action-settle))] text-[hsl(var(--action-settle-foreground))] hover:bg-[hsl(var(--surface-elevated))] active:scale-[0.98]",

        // Passive actions, looking without altering.
        observe:
          "text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--surface-elevated))/0.5]",
        
        // Removing, canceling, or letting go of something.
        dissolve:
          "text-[hsl(var(--text-ambient))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--border-base))/0.1]",
          
        // Moving backward or stepping out of the current flow.
        withdraw:
          "text-[hsl(var(--text-secondary))] underline-offset-4 hover:text-[hsl(var(--text-primary))] hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-8 text-base",
        icon: "size-9 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      intent: "proceed",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonIntents> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonIntents({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonIntents }