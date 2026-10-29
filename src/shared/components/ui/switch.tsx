"use client";

import * as React from "react";
import { Switch as SwitchPrimitive } from "radix-ui";
import { cn } from "@/shared/lib/utils";

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer border-border bg-surface-2 data-[state=checked]:bg-gold data-[state=checked]:border-gold focus-visible:border-ring focus-visible:outline-ring inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="bg-muted-foreground data-[state=checked]:bg-gold-foreground pointer-events-none block size-5 rounded-full transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
