import React from "react";

import { cn } from "@/lib/utils";

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
  const borderColorClass = {
    yes: "text-primary-color",
    no: "text-red-700",
  };

  const selectedBorderClass = {
    yes: "border-2 border-primary-color text-primary-color",
    no: "border-2 border-red-500 text-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "button-base h-[50px] w-[120px] rounded-full bg-white py-3 text-2xl shadow-sm transition-all hover:opacity-90 active:scale-[0.98]",
        selected ? selectedBorderClass[type] : borderColorClass[type],
        className
      )}
    >
      {label}
    </button>
  );
};
