import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Konstantin Lyutovich | Dubai Presence",
  description: "Резидент ОАЭ. Точка присутствия и честный контекст.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={clsx(
          cormorant.variable,
          manrope.variable,
          "antialiased min-h-screen flex flex-col font-sans bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
