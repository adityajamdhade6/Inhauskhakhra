import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://inhauskhakhra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Inhaus Khakhra — Premium Coin Khakhra",
    template: "%s — Inhaus Khakhra",
  },
  description:
    "Small. Round. Addictive. Baked, not fried — Inhaus Khakhra is premium coin khakhra in five bold flavours: Magic Masala, Pani Puri, Jeera, Methi and Schezwan.",
  keywords: [
    "Inhaus Khakhra",
    "coin khakhra",
    "baked snack",
    "Indian snack",
    "khakhra",
    "healthy snack",
  ],
  openGraph: {
    title: "Inhaus Khakhra — Premium Coin Khakhra",
    description:
      "Small. Round. Addictive. Baked, not fried — five bold flavours of premium coin khakhra.",
    url: siteUrl,
    siteName: "Inhaus Khakhra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inhaus Khakhra — Premium Coin Khakhra",
    description:
      "Small. Round. Addictive. Baked, not fried — five bold flavours of premium coin khakhra.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="min-h-dvh bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
