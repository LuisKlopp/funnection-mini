// import { useState } from "react";

// import { AnswerState } from "@/store/answer-store";

interface AnswerModalProps {
  closeModal: () => void;
  //   questionAnswer: AnswerState;
}

export const AnswerModal = ({
  closeModal,
  //   questionAnswer,
}: AnswerModalProps) => {
  //   const [isRevealed, setIsRevealed] = useState(false);

  //   console.log(questionAnswer);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="box-shadow-04 relative mx-4 flex w-[600px] flex-col items-center justify-center rounded-lg bg-[#d6ecf8] p-10 shadow-lg">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          ✕
        </button>
      </div>
    </div>
  );
};
