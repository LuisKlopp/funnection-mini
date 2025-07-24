export default function Home() {
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center bg-white text-gray-800">
      <header className="flex h-14 max-w-[500px] items-center justify-center border-b text-lg font-semibold">
        퍼넥션 미니
      </header>

      <main className="max-w-[500px] flex-1 overflow-y-auto p-4">
        <p className="text-center text-base">오늘의 문답과 OX 질문이 여기에!</p>
        <div className="mt-6 rounded-xl bg-gray-100 p-4 shadow-sm">
          <h2 className="mb-2 text-sm font-medium text-gray-600">
            💬 오늘의 문답
          </h2>
          <p className="text-base font-semibold">
            요즘 나를 행복하게 하는 사소한 것들이 있다면?
          </p>
        </div>
      </main>

      <footer className="sticky bottom-0 w-full max-w-[500px] border-t bg-white p-4">
        <button className="w-full rounded-full bg-black py-3 text-white shadow-md hover:opacity-90 active:scale-[0.98]">
          답변하러 가기
        </button>
      </footer>
    </div>
  );
}
