import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Slot } from "radix-ui";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        secondary: "border border-border bg-surface-2 text-foreground hover:bg-accent",
        outline: "border border-border bg-surface-2 text-foreground hover:bg-accent",
        ghost: "text-foreground hover:bg-surface-2",
        link: "text-gold-muted underline-offset-4 hover:underline",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        md: "h-11 px-5 py-2.5",
        default: "h-11 px-5 py-2.5",
        sm: "h-9 px-4 py-2 text-sm",
        xs: "h-7 px-2.5 text-xs",
        lg: "h-12 px-6 py-3",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-xs": "size-7",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  asChild = false,
  disabled,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";
  const isDisabled = disabled || loading;
  const content =
    loading && !asChild ? (
      <span className="relative inline-flex items-center justify-center">
        <span className="invisible inline-flex items-center gap-2">{children}</span>
        <Loader2 className="absolute size-4 animate-spin" aria-hidden="true" />
      </span>
    ) : (
      children
    );

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      aria-disabled={asChild && isDisabled ? true : undefined}
      disabled={asChild ? undefined : isDisabled}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {content}
    </Comp>
  );
}

export { Button, buttonVariants };
