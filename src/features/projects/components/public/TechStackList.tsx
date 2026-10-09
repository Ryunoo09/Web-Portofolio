import * as React from "react";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

interface TechStackListProps {
  stack: string[];
  className?: string;
  limit?: number;
}

export function TechStackList({ stack, className, limit }: TechStackListProps) {
  const displayed = limit ? stack.slice(0, limit) : stack;
  const remaining = limit && stack.length > limit ? stack.length - limit : 0;

  return (
    <div className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {displayed.map((item) => (
        <Badge
          key={item}
          variant="secondary"
          className="border-border/60 bg-secondary/60 text-foreground hover:border-gold/50 hover:bg-gold/10 hover:text-gold rounded-md border px-2 py-0.5 font-mono text-[11px] font-medium transition-colors"
        >
          {item}
        </Badge>
      ))}
      {remaining > 0 && (
        <Badge
          variant="outline"
          className="border-border/60 text-muted-foreground rounded-md px-1.5 py-0.5 font-mono text-[10px]"
        >
          +{remaining}
        </Badge>
      )}
    </div>
  );
}
