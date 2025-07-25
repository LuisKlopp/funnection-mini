import React from "react";

import { cn } from "@/lib/utils"; // ✅ 유틸 가져오기

interface OXButtonProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  type: "yes" | "no";
}

export const OXButton = ({
  label,
  selected,
  onClick,
  className,
  type,
}: OXButtonProps) => {
  const colorClass = {
    yes: {
      selected: "bg-primary-color text-white",
      default: "bg-white text-primary-color",
    },
    no: {
      selected: "bg-red-500 text-white",
      default: "bg-white text-red-700",
    },
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "button-base h-[50px] w-[100px] rounded-full py-3 text-2xl shadow-md transition-all hover:opacity-90 active:scale-[0.98]",
        selected ? colorClass[type].selected : colorClass[type].default,
        className
      )}
    >
      {label}
    </button>
  );
};
