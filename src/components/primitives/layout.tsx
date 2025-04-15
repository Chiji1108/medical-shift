import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

export const HStack = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn("flex flex-row", className)} />
));
HStack.displayName = "HStack";

export const VStack = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn("flex flex-col", className)} />
));
VStack.displayName = "VStack";

export const Center = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("flex items-center justify-center", className)}
  />
));
Center.displayName = "Center";
