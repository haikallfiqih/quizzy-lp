import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 disabled:opacity-50 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-orange-500 text-white shadow-md hover:bg-orange-400",
        destructive: "bg-red-500 text-white shadow-md hover:bg-red-400",
        outline:
          "border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-50",
        secondary:
          "bg-orange-100 text-orange-900 shadow-md hover:bg-orange-200",
        ghost: "hover:bg-orange-100 hover:text-orange-500",
        link: "text-orange-500 underline-offset-4 hover:underline",
        success: "bg-green-500 text-white shadow-md hover:bg-green-400",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-12 rounded-xl px-6",
        lg: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const DuoButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
DuoButton.displayName = "DuoButton";

export { DuoButton, buttonVariants };
