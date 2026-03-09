import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import type { Metadata } from "next";
import { manrope, notoSansJp } from "@/app/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.daichikubokawa.com"),
  title: {
    default: "Daichi Kubokawa | UI/UX Designer",
    template: "%s | Daichi Kubokawa",
  },
  description:
    "UI/UXデザイナー窪川大地のポートフォリオサイト。サービスデザイン、UI/UXデザイン、Webデザインの制作事例を掲載しています。",
  openGraph: {
    title: "Daichi Kubokawa | UI/UX Designer",
    description:
      "UI/UXデザイン、サービスデザイン、Webデザインの制作事例を掲載しています。",
    url: "https://www.daichikubokawa.com",
    siteName: "Daichi Kubokawa Portfolio",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "Daichi Kubokawa Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daichi Kubokawa | UI/UX Designer",
    description:
      "UI/UXデザイン、サービスデザイン、Webデザインの制作事例を掲載しています。",
    images: ["/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${manrope.variable} ${notoSansJp.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
