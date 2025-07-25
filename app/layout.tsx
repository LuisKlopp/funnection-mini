import "../styles/globals.css";

import MobileViewportHandler from "@/components/mobile-viewport-handler";
import { lineSeed } from "@/public/fonts/fonts";

export const metadata = {
  title: "퍼넥션 라이트 - 오늘의 문답",
  description: "은근 신경쓰이는 가벼운 질문들",
  openGraph: {
    title: "퍼넥션 라이트 - 오늘의 문답",
    description: "은근 신경쓰이는 가벼운 질문들",
    // url: "https://yourdomain.com",
    siteName: "퍼넥션 라이트",
    // images: [
    //   {
    //     url: "https://yourdomain.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "퍼넥션 라이트 OG 이미지",
    //   },
    // ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lineSeed.className}`}>
        <MobileViewportHandler />
        {children}
      </body>
    </html>
  );
}
