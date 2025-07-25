import localFont from "next/font/local";

export const lineSeed = localFont({
  variable: "--font-lineseed",
  src: [
    {
      path: "./LINESeedKR-Bd.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./LINESeedKR-Rg.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./LINESeedKR-Th.woff",
      weight: "100",
      style: "normal",
    },
  ],
});

export const jua = localFont({
  src: [
    {
      path: "./Jua-Regular.woff",
      style: "normal",
    },
  ],
});
