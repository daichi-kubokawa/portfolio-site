import "./globals.css";

export const metadata = {
  title: "Portfolio Site",
  description: "Daichi Kubokawa Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
