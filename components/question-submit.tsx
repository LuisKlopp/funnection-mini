"use client";

import { useState } from "react";

import { Input } from "./input";

export const QuestionSubmit = () => {
  const [answer, setAnswer] = useState("");

  return (
    <main className="flex h-full max-w-[500px] flex-1 flex-col items-center justify-center overflow-y-auto p-4">
      <div className="mb-12 flex flex-col gap-4 rounded-xl bg-[#ECF0FF] p-4 shadow-sm">
        <h2 className="mb-2 text-sm font-normal text-[#7487cc]">오늘의 문답</h2>

        <p className="font-jua text-base text-[#2e3953]">
          요즘 나를 행복하게 하는 사소한 것들이 있다면?
        </p>
        <Input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="답변을 입력해보세요 :)"
          className="!w-full"
        />
      </div>
      <footer className="absolute bottom-0 flex w-full justify-center border-t bg-white p-4">
        <button className="font-jua w-full max-w-[400px] rounded-full bg-[#576ecb] py-3 text-white shadow-md hover:opacity-90 active:scale-[0.98]">
          답변하기
        </button>
      </footer>
    </main>
  );
};
