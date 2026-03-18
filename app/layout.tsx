import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import type { Metadata } from "next";
import { inter, notoSansJp } from "@/app/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.daichikubokawa.com"),
  title: {
    default: "窪川大地 | Daichi Kubokawa | UI/UX Designer",
    template: "%s | 窪川大地",
  },
  description:
    "UI/UXデザイナー窪川大地のポートフォリオサイト。サービスデザイン、UI/UXデザイン、Webデザインの制作事例を掲載しています。",
  alternates: {
    canonical: "https://www.daichikubokawa.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "窪川大地 | Daichi Kubokawa | UI/UX Designer",
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
    title: "窪川大地 | Daichi Kubokawa | UI/UX Designer",
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
  const GA_ID = "G-BG02MVLRP3";

  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJp.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
        </Script>
      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
