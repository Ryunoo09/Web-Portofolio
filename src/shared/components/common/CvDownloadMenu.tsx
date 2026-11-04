"use client";

import type { ComponentProps } from "react";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { CV_DOWNLOAD_PATHS } from "@/shared/constants/downloads";
import { cn } from "@/shared/lib/utils";

interface CvDownloadMenuProps {
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
  label?: string;
}

/** Satu tombol yang membuka pilihan CV bahasa Indonesia dan Inggris. */
export function CvDownloadMenu({
  variant = "secondary",
  size = "sm",
  className,
  label = "Unduh CV",
}: CvDownloadMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant={variant}
          size={size}
          className={cn("justify-between", className)}
        >
          <Download className="size-4" aria-hidden="true" />
          <span>{label}</span>
          <ChevronDown className="size-4 opacity-70" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuItem asChild>
          <a href={CV_DOWNLOAD_PATHS.id} download className="cursor-pointer">
            <Download className="size-4" aria-hidden="true" />
            <span>CV Bahasa Indonesia</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={CV_DOWNLOAD_PATHS.en} download className="cursor-pointer">
            <Download className="size-4" aria-hidden="true" />
            <span>CV Bahasa Inggris</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
