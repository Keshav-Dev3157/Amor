import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans"
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script"
});

export const metadata: Metadata = {
  title: "Amor - Our Valentine's Journey",
  description: "A special digital experience for my favorite person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorant.variable} ${greatVibes.variable} antialiased font-sans`}>
        <main className="min-h-screen relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
