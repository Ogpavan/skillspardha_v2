import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "text" | "light";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#2d265b] text-white hover:bg-[#423853]",
  outline: "border border-[#c9c4bb] text-[#2d265b] hover:border-[#2d265b] hover:bg-white",
  text: "text-[#2d265b] hover:text-[#51466f]",
  light: "bg-[#f2f1ec] text-[#2d265b] hover:bg-white",
};

const base = "inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9eb72] focus-visible:ring-offset-2";

export function buttonClassName(variant: ButtonVariant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return <button className={buttonClassName(variant, className)} {...props} />;
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: ButtonVariant }) {
  return <Link href={href} className={buttonClassName(variant, className)} {...props} />;
}
