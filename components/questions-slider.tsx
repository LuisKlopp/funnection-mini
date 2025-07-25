"use client";

import { useState } from "react";

import { OXSubmit } from "./ox-submit";
import { QuestionSubmit } from "./question-submit";

export const QuestionsSlider = () => {
  const [step, setStep] = useState<"question" | "ox">("question");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <header className="flex h-14 w-full max-w-[500px] items-center justify-center text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-[#7370dd]">Funnection</span>
          <span className="text-[20px] text-[#8195c9]">light</span>
        </div>
      </header>
      <div className="relative w-full max-w-[500px] overflow-hidden">
        <div
          className="flex h-full w-[200%] transition-transform duration-500 ease-in-out"
          style={{
            transform:
              step === "question" ? "translateX(0%)" : "translateX(-50%)",
          }}
        >
          <div className="w-1/2">
            <QuestionSubmit onNext={() => setStep("ox")} />
          </div>
          <div className="w-1/2">
            <OXSubmit onBack={() => setStep("question")} />
          </div>
        </div>
      </div>
    </div>
  );
};
