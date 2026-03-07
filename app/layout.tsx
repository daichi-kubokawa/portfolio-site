// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});
const noto = Noto_Sans_JP({
  weight: ["400", "500", "700"], // 使う太さを列挙
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "my-app",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${noto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
