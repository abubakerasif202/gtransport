import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50 tracking-widest uppercase",
          {
            "bg-brand-red text-white hover:bg-brand-red-dark": variant === "primary",
            "bg-brand-charcoal text-white hover:bg-brand-slate": variant === "secondary",
            "bg-brand-gold text-brand-black hover:bg-brand-gold-light": variant === "gold",
            "border border-border bg-transparent text-white hover:bg-brand-charcoal": variant === "outline",
            "hover:bg-brand-charcoal hover:text-white": variant === "ghost",
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-sm px-3 text-xs": size === "sm",
            "h-12 rounded-sm px-8 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
