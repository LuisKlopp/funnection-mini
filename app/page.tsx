import { QuestionsSlider } from "@/components/questions-slider";

export default function Home() {
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center bg-[#d7dfee]">
      <header className="flex h-14 w-full max-w-[500px] items-center justify-center text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">Funnection</span>
          <span className="text-[20px] text-[#8195c9]">mini</span>
        </div>
      </header>

      <QuestionsSlider />
    </div>
  );
}
