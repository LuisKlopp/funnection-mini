import { LightQuestion } from "@/types/light-question.type";

export async function fetchQuestion(): Promise<LightQuestion> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/light-question/active`,
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}
