import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wan Muhammad Faiz | Software Engineer",
  description:
    "Professional resume and portfolio of Wan Muhammad Faiz, a software engineer with experience in backend, full-stack development, DevOps, cloud infrastructure, and automation.",
  keywords: [
    "Wan Muhammad Faiz",
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Developer",
    "DevOps Engineer",
    "AWS",
    "Jenkins",
    "Next.js",
  ],
  authors: [{ name: "Wan Muhammad Faiz" }],
  openGraph: {
    title: "Wan Muhammad Faiz | Software Engineer",
    description:
      "Professional resume and portfolio of Wan Muhammad Faiz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}