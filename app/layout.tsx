import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const siteDescription =
  "NEXUS Strategy Partners는 기업과 공공기관의 전략 수립, 조직 혁신, 성과관리, 시장·산업 분석을 지원하는 전략·경영컨설팅 회사입니다.";

export const metadata: Metadata = {
  title: {
    default: "NEXUS Strategy Partners | 전략·경영컨설팅",
    template: "%s | NEXUS Strategy Partners",
  },
  description: siteDescription,
  keywords: [
    "전략컨설팅",
    "경영컨설팅",
    "조직 혁신",
    "성과관리",
    "시장 조사",
    "산업 분석",
    "공공기관 컨설팅",
    "NEXUS Strategy Partners",
  ],
  authors: [{ name: "NEXUS Strategy Partners" }],
  openGraph: {
    title: "NEXUS Strategy Partners | 전략·경영컨설팅",
    description: siteDescription,
    type: "website",
    locale: "ko_KR",
    siteName: "NEXUS Strategy Partners",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
