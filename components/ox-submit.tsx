"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { OXButton } from "./ox-button";

interface OXSubmitProps {
  onBack: () => void;
}

export const OXSubmit = ({ onBack }: OXSubmitProps) => {
  const [selectedOX, setSelectedOX] = useState<"O" | "X" | null>(null);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center p-4">
      <div className="mb-12 flex w-[360px] flex-col items-center gap-6 rounded-xl bg-[#ECF0FF] p-6 shadow-sm">
        <h2 className="mb-2 text-[18px] font-normal text-[#8195c9]">
          오늘의 OX
        </h2>

        <p className="font-jua text-center text-base text-[#2e3953]">
          스스로를 게으른 사람이라고 생각한다.
        </p>

        <div className="flex w-full justify-evenly gap-4">
          <OXButton
            label="O"
            type="yes"
            selected={selectedOX === "O"}
            onClick={() => setSelectedOX("O")}
          />
          <OXButton
            label="X"
            type="no"
            selected={selectedOX === "X"}
            onClick={() => setSelectedOX("X")}
          />
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-500",
            selectedOX ? "mt-12 max-h-20 opacity-100" : "mt-0 max-h-0 opacity-0"
          )}
        >
          <button className="font-jua w-[200px] rounded-full bg-[#7370dd] py-3 text-white shadow-md hover:opacity-90 active:scale-[0.98]">
            제출하기
          </button>
        </div>

        <div className="flex w-full justify-start">
          <button
            onClick={onBack}
            className="mt-4 cursor-pointer text-sm text-[#7370dd] underline hover:opacity-70"
          >
            &lt;&lt; 돌아가기
          </button>
        </div>
      </div>
    </main>
  );
};
