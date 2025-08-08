import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import Providers from "./providers";

// =======================
// Global <head> metadata
// =======================
export const metadata: Metadata = {
  title: {
    default: "MyStore - Modern e-Commerce Platform",
    template: "%s | MyStore",
  },
  description:
    "MyStore is a scalable, high-performance e-commerce platform built with Next.js 15, delivering blazing-fast shopping experiences.",
  keywords: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "E-commerce",
    "MyStore",
  ],
  metadataBase: new URL("https://www.mystore.com"),
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mystore.com",
    siteName: "MyStore",
    title: "MyStore - Modern e-Commerce Platform",
    description:
      "Shop the latest products with lightning-fast performance powered by Next.js 15.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyStore preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mystore",
    creator: "@mystore",
    title: "MyStore - Modern e-Commerce Platform",
    description:
      "Shop the latest products with lightning-fast performance powered by Next.js 15.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// =======================
// Root layout
// =======================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={cn(
          "min-h-full flex flex-col antialiased",
          "bg-background text-foreground"
        )}
      >
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
