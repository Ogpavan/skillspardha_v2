"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentProps } from "react";
import content from "@/data/home-content.json";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;

export function SheetContent({ children, ...props }: ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="mobile-menu-overlay" />
      <DialogPrimitive.Content className="mobile-menu" {...props}>
        <DialogPrimitive.Close className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-lg border border-border" aria-label={content.header.closeNavigation}><X size={20} /></DialogPrimitive.Close>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
