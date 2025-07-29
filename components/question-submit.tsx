"use client";

import { cn } from "@/lib/utils";
import { useAnswerStore } from "@/store/answer-store";

import { Input } from "./input";

interface QuestionSubmitProps {
  onNext: () => void;
}

export const QuestionSubmit = ({ onNext }: QuestionSubmitProps) => {
  const { questionAnswer, setQuestionAnswer } = useAnswerStore();

  return (
    <main className="flex h-full w-full flex-col items-center justify-center overflow-y-auto p-4">
      <div className="box-shadow-02 mb-12 flex flex-col items-center gap-4 rounded-xl bg-[#ECF0FF] px-8 py-8">
        <h2 className="text-sub-color mb-2 text-[18px] font-normal">
          오늘의 문답
        </h2>
        <p className="font-jua mb-4 text-base text-[#2e3953]">
          요즘 나를 행복하게 하는 사소한 것들이 있다면?
        </p>
        <Input
          value={questionAnswer}
          onChange={(e) => setQuestionAnswer(e.target.value)}
          placeholder="답변을 입력해보세요 :)"
          className="box-shadow-02 text-primary-color !w-full"
        />
        <div className="flex w-full justify-end">
          <button
            onClick={onNext}
            disabled={!questionAnswer}
            className={cn(
              "font-jua bg-primary-color mt-6 w-[130px] cursor-pointer rounded-full py-3 font-normal text-white shadow-md hover:opacity-90 active:scale-[0.98]",
              { "hover:none pointer-events-none bg-[#9999df]": !questionAnswer }
            )}
          >
            다음으로 &gt;&gt;
          </button>
        </div>
      </div>
    </main>
  );
};
