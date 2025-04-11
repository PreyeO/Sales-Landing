import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/layouts/MenuBar";
import Footer from "@/components/layouts/Footer";
import GoogleAnalytics from "@next/third-parties/google";
import Analytics from "@/analytics/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Affordable Websites for Small Businesses | Easter Offer – Pay Later",
  description:
    "Get your business online this Easter with a stunning, SEO-optimized website. Pay only when your site is ready. Limited slots for ₦100,000 offer!",
  keywords:
    "Easter website promo, affordable web design Nigeria, small business website, pay later website, business website offer, SEO website Nigeria",
  authors: [{ name: "LetsCr8T", url: "https://letscr8t.com" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Turn Your Business Into a Customer Magnet | Easter Web Promo",
    description:
      "Only 20 slots available for small business owners in Nigeria. Get your website done, SEO-ready, hosted, and pay nothing upfront!",
    url: "https://your-landing-url.com",
    siteName: "LetsCr8T",
    images: [
      {
        url: "/easter-promo-cover.jpg", // Replace with real asset
        width: 1200,
        height: 630,
        alt: "LetsCr8T Easter Offer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LetsCr8T Easter Promo – ₦100,000 Website Offer",
    description:
      "Turn your business into a customer magnet. Only 20 website slots available for Easter. Pay only when your site is ready.",
    images: ["/easter-promo-cover.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        {/* <GoogleAnalytics gtmId="G-7BNBWJMF74" /> */}
        <Footer />
        <MenuBar />
      </body>
    </html>
  );
}
