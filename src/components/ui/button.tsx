import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-colors duration-200 ease-out outline-none select-none focus-visible:border-ring/60 focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:opacity-90 disabled:pointer-events-none disabled:opacity-40 aria-invalid:border-destructive/60 aria-invalid:ring-2 aria-invalid:ring-destructive/15 dark:aria-invalid:border-destructive/40 dark:aria-invalid:ring-destructive/25 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary/88 text-primary-foreground shadow-none hover:bg-primary/76 active:bg-primary/82",
        outline:
          "border-border/70 bg-background text-foreground/90 hover:border-border hover:bg-muted/65 hover:text-foreground aria-expanded:border-border aria-expanded:bg-muted/70 aria-expanded:text-foreground dark:border-input/80 dark:bg-input/20 dark:hover:bg-input/35",
        secondary:
          "bg-secondary/90 text-secondary-foreground hover:bg-muted/80 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        ghost:
          "text-foreground/85 hover:bg-muted/55 hover:text-foreground aria-expanded:bg-muted/55 aria-expanded:text-foreground dark:hover:bg-muted/35",
        ghostQuiet:
          "text-muted-foreground hover:bg-muted/35 hover:text-foreground/90 aria-expanded:bg-muted/30 aria-expanded:text-foreground/85",
        destructive:
          "bg-destructive/8 text-destructive/90 hover:bg-destructive/14 focus-visible:border-destructive/30 focus-visible:ring-destructive/15 dark:bg-destructive/15 dark:hover:bg-destructive/22 dark:focus-visible:ring-destructive/25",
        link: "text-foreground/70 underline-offset-4 decoration-foreground/25 hover:text-foreground hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
