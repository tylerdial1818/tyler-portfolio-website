import type { Metadata } from "next";
import { Albert_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyler Dial — Data Scientist & Software Engineer",
  description:
    "Portfolio of Tyler Dial. Building data science applications with production-grade engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
