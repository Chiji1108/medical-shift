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
H1.displayName = "H1";

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
H2.displayName = "H2";

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
H3.displayName = "H3";

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
H4.displayName = "H4";

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
P.displayName = "P";

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
Blockquote.displayName = "Blockquote";

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
Code.displayName = "Code";

export const Large = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn("text-lg font-semibold", className)}
    />
  )
);
Large.displayName = "Large";

export const Small = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <small
      ref={ref}
      {...props}
      className={cn("text-sm font-medium leading-none", className)}
    />
  )
);
Small.displayName = "Small";

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
Muted.displayName = "Muted";
