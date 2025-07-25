"use client";

import { useState } from "react";

import { OXSubmit } from "./ox-submit";
import { QuestionSubmit } from "./question-submit";

export const QuestionsSlider = () => {
  const [step, setStep] = useState<"question" | "ox">("question");

  return (
    <div className="relative w-full max-w-[500px] flex-1 overflow-hidden">
      <div
        className="flex h-full w-[200%] transition-transform duration-500 ease-in-out"
        style={{
          transform:
            step === "question" ? "translateX(0%)" : "translateX(-50%)",
        }}
      >
        <div className="w-1/2 shrink-0">
          <QuestionSubmit onNext={() => setStep("ox")} />
        </div>
        <div className="w-1/2 shrink-0">
          <OXSubmit onBack={() => setStep("question")} />
        </div>
      </div>
    </div>
  );
};
