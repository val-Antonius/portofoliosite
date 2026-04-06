import type { Metadata } from "next";
import { DM_Serif_Display, JetBrains_Mono, DM_Sans } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const displayFont = DM_Serif_Display({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const sansFont = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antonius Valentino | Mission Control",
  description: "Personal portfolio of Antonius Valentino - Information Systems Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${monoFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-canvas text-primary">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
