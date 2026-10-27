import * as React from "react";
import { cn } from "@/shared/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input bg-surface text-foreground placeholder:text-muted-foreground read-only:bg-surface-2 flex field-sizing-content min-h-[132px] w-full rounded-md border px-3 py-2.5 text-base transition-colors md:text-sm",
        "focus-visible:border-ring focus-visible:outline-ring resize-y focus-visible:outline-2 focus-visible:outline-offset-2",
        "aria-invalid:border-destructive aria-invalid:focus-visible:outline-destructive disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
