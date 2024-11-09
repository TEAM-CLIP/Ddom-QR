import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "또옴",
  description: "나만의 단골 혜택을 받는, 고객과 가게를 연결하는 서비스",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
