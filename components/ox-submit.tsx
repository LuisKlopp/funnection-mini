// ox-submit.tsx
"use client";

import { useModal } from "@/hooks/useModal";
import { cn } from "@/lib/utils";
import { useAnswerStore } from "@/store/answer-store";

import { AnswerModal } from "./modal/answer-modal";
import { OXButton } from "./ox-button";

interface OXSubmitProps {
  onBack: () => void;
}

export const OXSubmit = ({ onBack }: OXSubmitProps) => {
  const { oxAnswer, setOXAnswer } = useAnswerStore();
  const { openModal, closeModal, isModal } = useModal();

  const handleSubmit = () => {
    openModal();
  };

  return (
    <main className="flex h-full w-full flex-col items-center justify-center p-4">
      <div className="mb-12 flex flex-col items-center gap-6 rounded-xl bg-[#ECF0FF] p-6 shadow-sm">
        <h2 className="text-sub-color mb-2 text-[18px] font-normal">
          오늘의 OX
        </h2>

        <p className="font-jua text-center text-base text-[#2e3953]">
          스스로를 게으른 사람이라고 생각한다.
        </p>

        <div className="flex w-full justify-evenly gap-4">
          <OXButton
            label="O"
            type="yes"
            selected={oxAnswer === "O"}
            onClick={() => setOXAnswer("O")}
          />
          <OXButton
            label="X"
            type="no"
            selected={oxAnswer === "X"}
            onClick={() => setOXAnswer("X")}
          />
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-500",
            oxAnswer ? "mt-12 max-h-20 opacity-100" : "mt-0 max-h-0 opacity-0"
          )}
        >
          <button
            onClick={handleSubmit}
            className="font-jua bg-primary-color w-[200px] cursor-pointer rounded-full py-3 text-white shadow-md hover:opacity-90 active:scale-[0.98]"
          >
            제출하기
          </button>
        </div>

        <div className="flex w-full justify-start">
          <button
            onClick={onBack}
            className="text-sub-color mt-4 cursor-pointer text-sm underline hover:opacity-70"
          >
            &lt;&lt; 돌아가기
          </button>
        </div>
      </div>
      {isModal && <AnswerModal closeModal={closeModal} />}
    </main>
  );
};
