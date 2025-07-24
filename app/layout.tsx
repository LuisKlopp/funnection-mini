import "../styles/globals.css";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "퍼넥션 미니 - 오늘의 문답",
  description: "문답 하나, OX 하나. 가볍지만 생각은 진지하게.",
  openGraph: {
    title: "퍼넥션 미니 - 오늘의 문답",
    description: "문답 하나, OX 하나. 가볍지만 생각은 진지하게.",
    url: "https://yourdomain.com",
    siteName: "퍼넥션 미니",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "퍼넥션 미니 OG 이미지",
      },
    ],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
