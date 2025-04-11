import type { Metadata, Viewport } from "next";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://keysystem-five.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KeySystem Technology - Trusted IT Consulting & Solutions",
    template: "%s | KeySystem Technology",
  },
  description:
    "KeySystem Technology empowers businesses with cutting-edge IT consulting, core banking solutions, cybersecurity, staff augmentation, and digital transformation services.",
  applicationName: "KeySystem Technology",
  keywords: [
    "KeySystem Technology",
    "IT consulting",
    "technology solutions",
    "core banking",
    "staff augmentation",
    "business intelligence",
    "digital banking",
    "financial inclusion",
    "audit solutions",
    "software testing",
    "lending solutions",
    "data warehouse",
    "cybersecurity",
    "enterprise solutions",
    "Nigeria",
    "UK",
    "Canada",
    "UAE",
  ],
  authors: [{ name: "KeySystem Technology Limited", url: siteUrl }],
  creator: "KeySystem Technology Limited",
  publisher: "KeySystem Technology Limited",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KeySystem Technology - Trusted IT Consulting & Solutions",
    description:
      "Empowering businesses with cutting-edge IT consulting, core banking, cybersecurity, and digital transformation services.",
    url: siteUrl,
    siteName: "KeySystem Technology",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KeySystem Technology - Trusted IT Consulting & Solutions",
    description:
      "Empowering businesses with cutting-edge IT consulting, core banking, cybersecurity, and digital transformation services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#05071E" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
