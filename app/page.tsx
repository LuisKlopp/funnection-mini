export default function Home() {
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center">
      <header className="flex h-14 max-w-[500px] items-center justify-center border-b bg-white text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-[#576ecb]">Funnection</span>
          <span className="text-[20px] text-[#8195c9]">mini</span>
        </div>
      </header>

      <main className="flex h-full max-w-[500px] flex-1 flex-col items-center justify-center overflow-y-auto p-4">
        <div className="mt-6 rounded-xl bg-[#ECF0FF] p-4 shadow-sm">
          <h2 className="mb-2 text-sm font-normal text-[#7487cc]">
            오늘의 문답
          </h2>

          <p className="font-jua text-base text-[#2e3953]">
            요즘 나를 행복하게 하는 사소한 것들이 있다면?
          </p>
        </div>
      </main>

      <footer className="sticky bottom-0 w-full max-w-[500px] border-t bg-white p-4">
        <button className="w-full rounded-full bg-[#576ecb] py-3 text-white shadow-md hover:opacity-90 active:scale-[0.98]">
          답변하러 가기
        </button>
      </footer>
    </div>
  );
}
