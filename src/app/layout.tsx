import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Cursor from "@/components/layout/Cursor";
import Preloader from "@/components/layout/Preloader";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rohan23-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rohan Gawande — Full Stack Developer & SaaS Architect",
  description:
    "Full Stack Developer from Mumbai building production-grade SaaS, AI-integrated platforms, and client systems with Next.js, FastAPI, and PostgreSQL.",
  authors: [{ name: "Rohan Gawande" }],
  keywords: [
    "Rohan Gawande",
    "Full Stack Developer",
    "Next.js Developer",
    "FastAPI",
    "PostgreSQL",
    "Portfolio",
    "Mumbai Developer",
    "SaaS Architect",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

const GA_ID = "G-YR7FPMBGBC";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen selection:bg-[#7C83FF]/30 selection:text-white antialiased">
        {/* Google Analytics - Script 1: gtag library */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        {/* Google Analytics - Script 2: initialization */}
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <ThemeProvider>
          <Preloader />
          <ScrollProgress />
          <Cursor />
          <SmoothScroll>
            <div className="grain-overlay" aria-hidden="true" />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
