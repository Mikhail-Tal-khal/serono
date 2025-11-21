import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
// @ts-ignore: allow importing global CSS without a module declaration
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SERENO Clearing & Forwarding Ltd | Mombasa Logistics Expert",
  description:
    "Professional customs clearing, freight forwarding, warehousing, and cargo services in Mombasa, Kenya. We clear, move, and deliver faster than industry standards. Contact us for seamless East African logistics solutions.",
  keywords: [
    "customs clearing Mombasa",
    "freight forwarding Kenya",
    "cargo services Mombasa",
    "warehousing Kenya",
    "logistics Mombasa",
    "import clearing",
    "export clearing",
    "East Africa shipping",
  ],
  authors: [{ name: "SERENO Clearing & Forwarding Ltd" }],
  creator: "SERENO Clearing & Forwarding Ltd",
  publisher: "SERENO Clearing & Forwarding Ltd",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://serenoclearing.com",
    title: "SERENO Clearing & Forwarding Ltd | Mombasa Logistics Expert",
    description:
      "Professional customs clearing, freight forwarding, and cargo services in Mombasa. We deliver faster than industry standards.",
    siteName: "SERENO Clearing & Forwarding",
  },
  twitter: {
    card: "summary_large_image",
    title: "SERENO Clearing & Forwarding Ltd",
    description: "Professional logistics solutions in Mombasa, Kenya. Faster clearing and forwarding services.",
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
    icon: [
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8B1538" },
    { media: "(prefers-color-scheme: dark)", color: "#8B1538" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  )
}


