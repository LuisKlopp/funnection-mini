"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Input } from "./input";

export const QuestionSubmit = ({ onNext }: { onNext: () => void }) => {
  const [answer, setAnswer] = useState("");

  return (
    <main className="flex h-full w-full flex-col items-center justify-center overflow-y-auto p-4">
      <div className="box-shadow-02 mb-12 flex flex-col items-center gap-4 rounded-xl bg-[#ECF0FF] p-4">
        <h2 className="mb-2 text-[18px] font-normal text-[#8195c9]">
          오늘의 문답
        </h2>
        <p className="font-jua text-base text-[#2e3953]">
          요즘 나를 행복하게 하는 사소한 것들이 있다면?
        </p>
        <Input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="답변을 입력해보세요 :)"
          className="box-shadow-02 !w-full"
        />
        <button
          onClick={onNext}
          disabled={!answer}
          className={cn(
            "font-jua mt-12 w-[200px] cursor-pointer rounded-full bg-[#7370dd] py-3 text-white shadow-md hover:opacity-90 active:scale-[0.98]",
            { "hover:none pointer-events-none bg-[#9999df]": !answer }
          )}
        >
          답변하기
        </button>
      </div>
    </main>
  );
};
