import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

const displayFont = Bricolage_Grotesque({
  variable: "--font-display-family",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body-family",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://inhauskhakhra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "INHAUS — Premium Coin Khakhra",
    template: "%s — INHAUS",
  },
  description:
    "Thin. Crispy. Round. Baked, not fried — INHAUS Coin Khakhra in five bold flavours: Magic Masala, Pani Puri, Jeera, Methi and Schezwan.",
  keywords: [
    "INHAUS",
    "Inhaus Khakhra",
    "coin khakhra",
    "baked snack",
    "Indian snack",
    "khakhra",
    "healthy snack",
  ],
  openGraph: {
    title: "INHAUS — Premium Coin Khakhra",
    description:
      "Thin. Crispy. Round. Baked, not fried — five bold flavours of premium coin khakhra.",
    url: siteUrl,
    siteName: "INHAUS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INHAUS — Premium Coin Khakhra",
    description:
      "Thin. Crispy. Round. Baked, not fried — five bold flavours of premium coin khakhra.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-dvh bg-cream text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
