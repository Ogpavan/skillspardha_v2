"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b border-[#d8d4cc]", className)} {...props} />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-5 py-5 text-left text-[17px] font-semibold tracking-[-0.02em] text-[#201c31] transition-colors hover:text-[#51466f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9eb72] focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-5 shrink-0 text-[#77716a] transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn("overflow-hidden text-[15px] leading-7 text-[#6c6862] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", className)}
    {...props}
  >
    <div className="pb-5 pr-10">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
