import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basildon — Carta Digital",
  description: "Carta digital del bar Basildon. Cocktails de autor, platos de temporada y una experiencia gastronómica única.",
  keywords: ["Basildon", "bar", "carta digital", "cocktails", "restaurante", "menu"],
  openGraph: {
    title: "Basildon — Carta Digital",
    description: "Cocktails de autor, platos de temporada y una experiencia gastronómica única.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#141414",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
