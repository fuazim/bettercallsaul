import type { Metadata } from "next";
import { Inter, Oswald, Roboto } from "next/font/google"; // Import Oswald for rebel/bold look
import "./globals.css";
import { ScrollToTop } from "@/app/components/scroll-to-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Better Call Paul | Legal Problems? Solved.",
  description:
    "Contracts gone wrong? Family drama? Paul turns legal chaos into clear options.",
  authors: [{ name: "Better Call Paul" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=BBH+Hegarty&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${oswald.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
