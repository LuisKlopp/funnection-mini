"use client";

import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
}

export function PrimaryButton({
  text,
  disabled = false,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "font-jua mt-6 w-[130px] cursor-pointer rounded-full py-3 font-normal text-white shadow-md transition-transform duration-150 ease-in-out",
        disabled
          ? "pointer-events-none bg-[#9999df]"
          : "bg-primary-color hover:opacity-90 active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
}
