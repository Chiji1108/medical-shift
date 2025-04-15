import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

export const H1 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    {...props}
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className
    )}
  />
));

export const H2 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    {...props}
    className={cn(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className
    )}
  />
));

export const H3 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    {...props}
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      className
    )}
  />
));

export const H4 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    {...props}
    className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight",
      className
    )}
  />
));

export const P = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    {...props}
    className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
  />
));

export const Blockquote = forwardRef<
  HTMLQuoteElement,
  HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    {...props}
    className={cn("mt-6 border-l-2 pl-6 italic", className)}
  />
));

export const Code = forwardRef<HTMLPreElement, HTMLAttributes<HTMLPreElement>>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      {...props}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    />
  )
);

export const Large = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn("text-lg font-semibold", className)}
    />
  )
);

export const Small = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <small
      ref={ref}
      {...props}
      className={cn("text-sm font-medium leading-none", className)}
    />
  )
);

export const Muted = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    {...props}
    className={cn("text-sm text-muted-foreground", className)}
  />
));
