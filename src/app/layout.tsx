import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DataInsights - Transform Your Data into Actionable Insights",
  description: "AI-powered analytics platform that helps teams make data-driven decisions in minutes, not days. Connect your data sources, ask questions in plain English, get instant insights.",
  keywords: "data analytics, business intelligence, AI insights, data visualization, dashboard, reporting, data science",
  authors: [{ name: "DataInsights Team" }],
  creator: "DataInsights",
  publisher: "DataInsights",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://datainsights.com",
    siteName: "DataInsights",
    title: "DataInsights - Transform Your Data into Actionable Insights",
    description: "AI-powered analytics platform that helps teams make data-driven decisions in minutes, not days.",
    images: [
      {
        url: "https://datainsights.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DataInsights - Data Analytics Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataInsights - Transform Your Data into Actionable Insights",
    description: "AI-powered analytics platform that helps teams make data-driven decisions in minutes, not days.",
    images: ["https://datainsights.com/twitter-image.jpg"],
    creator: "@datainsights",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
