import * as React from "react";
import { cn } from "@/shared/lib/utils";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}

export function PageContainer({
  children,
  className,
  size = "default",
  ...props
}: PageContainerProps) {
  const sizeClasses = {
    narrow: "max-w-3xl",
    default: "max-w-[1200px]",
    wide: "max-w-[90rem]",
  };

  return (
    <div
      className={cn("mx-auto w-full px-6 md:px-8 lg:px-12", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
