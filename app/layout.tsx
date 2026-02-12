import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basildon Listening Restobar - Menu",
  description: "Menu digital de Basildon Listening Restobar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
