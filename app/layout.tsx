import type { Metadata } from "next";
import { Fira_Code, Fira_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const title = "RevuPulse — Turn Scattered Reviews Into One Weekly Report";
const description =
  "RevuPulse's AI agent reads every customer review on your platform and sends you one weekly report: sentiment, top complaints, and top strengths. Join the waitlist.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${firaSans.variable} ${firaCode.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
