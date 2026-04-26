import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_40px_rgba(108,231,255,0.26)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_44px_rgba(108,231,255,0.36)]",
        premium:
          "bg-[linear-gradient(135deg,rgba(108,231,255,1),rgba(139,255,191,0.92))] text-slate-950 shadow-[0_18px_44px_rgba(108,231,255,0.34)] hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(108,231,255,0.42)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-white/12",
        outline:
          "border border-white/12 bg-white/4 text-foreground hover:border-primary/50 hover:bg-white/8",
        ghost: "text-foreground hover:bg-white/8",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-7 text-base",
        sm: "h-9 px-4 text-xs",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
