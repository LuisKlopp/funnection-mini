import { fetchQuestion } from "@/api/fetchQuestion";
import { QuestionsSlider } from "@/components/questions-slider";

export default async function Home() {
  const question = await fetchQuestion();

  return (
    <div className="flex h-[100dvh] w-full flex-col items-center bg-[#dae3f4]">
      <QuestionsSlider question={question} />
    </div>
  );
}
