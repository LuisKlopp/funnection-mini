import { create } from "zustand";

export type AnswerState = {
  questionAnswer: string;
  oxAnswer: "O" | "X" | null;
  setQuestionAnswer: (answer: string) => void;
  setOXAnswer: (answer: "O" | "X") => void;
  resetAnswers: () => void;
};

export const useAnswerStore = create<AnswerState>((set) => ({
  questionAnswer: "",
  oxAnswer: null,
  setQuestionAnswer: (answer) => set({ questionAnswer: answer }),
  setOXAnswer: (answer) => set({ oxAnswer: answer }),
  resetAnswers: () => set({ questionAnswer: "", oxAnswer: null }),
}));
