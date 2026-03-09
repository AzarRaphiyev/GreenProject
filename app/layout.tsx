import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "GREEN PROJECT - Premium Yaşıllaşdırma və Landşaft Həlləri",
  description: "Yüksək keyfiyyətli landşaft dizaynı və yaşıllaşdırma xidmətləri",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "GREEN PROJECT - Premium Yaşıllaşdırma",
    description: "Yüksək keyfiyyətli landşaft dizaynı və yaşıllaşdırma xidmətləri",
    url: "https://greenproject.az",
    siteName: "Green Project",
    images: [
      {
        url: "https://greenproject.az/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Project Orijinal Landşaft",
      },
    ],
    locale: "az_AZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GREEN PROJECT - Premium Yaşıllaşdırma",
    description: "Yüksək keyfiyyətli landşaft dizaynı və yaşıllaşdırma xidmətləri",
    images: ["https://greenproject.az/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster position="bottom-right" richColors />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
