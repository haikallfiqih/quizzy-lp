import * as React from "react";
import { cn } from "@/lib/utils";

const DuoCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-3xl border-4 border-orange-100 bg-white text-slate-950 shadow-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-1",
      className
    )}
    {...props}
  />
));
DuoCard.displayName = "DuoCard";

const DuoCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-8", className)}
    {...props}
  />
));
DuoCardHeader.displayName = "DuoCardHeader";

const DuoCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-extrabold tracking-tight text-orange-900",
      className
    )}
    aria-label={props.children?.toString() || "Card title"}
    {...props}
  >
    {props.children}
  </h3>
));
DuoCardTitle.displayName = "DuoCardTitle";

const DuoCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base text-orange-600 font-medium", className)}
    {...props}
  />
));
DuoCardDescription.displayName = "DuoCardDescription";

const DuoCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-8 pt-0", className)} {...props} />
));
DuoCardContent.displayName = "DuoCardContent";

const DuoCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-8 pt-0", className)}
    {...props}
  />
));
DuoCardFooter.displayName = "DuoCardFooter";

export {
  DuoCard,
  DuoCardHeader,
  DuoCardFooter,
  DuoCardTitle,
  DuoCardDescription,
  DuoCardContent,
};
