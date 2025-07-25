import { OXButton } from "./ox-button";

interface OXSubmitProps {
  onBack: () => void;
}

export const OXSubmit = ({ onBack }: OXSubmitProps) => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center p-4">
      <div className="mb-12 flex flex-col items-center gap-6 rounded-xl bg-[#ECF0FF] p-6 shadow-sm">
        <h2 className="text-sm font-normal text-[#7487cc]">오늘의 OX</h2>

        <p className="font-jua text-center text-base text-[#2e3953]">
          나는 요즘 스스로를 잘 돌보고 있다고 느낀다
        </p>

        <div className="flex w-full justify-evenly gap-4">
          <OXButton label="O" type="yes" />
          <OXButton label="X" type="no" />
        </div>

        <div className="flex w-full justify-start">
          <button
            onClick={onBack}
            className="mt-4 items-start text-sm text-[#7487cc] underline hover:opacity-70"
          >
            ← 돌아가기
          </button>
        </div>
      </div>
    </main>
  );
};
