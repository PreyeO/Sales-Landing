import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/layouts/MenuBar";
import Footer from "@/components/layouts/Footer";
import GoogleAnalytics from "@next/third-parties/google";
import Analytics from "@/analytics/Analytics";
import Script from "next/script";

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
        {/* Facebook Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1270192691203133');
        fbq('track', 'PageView');
      `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1270192691203133&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        {/* <iframe height="0" width="0" src="https://www.googletagmanager.com/ns.html?id=G-7BNBWJMF74"></iframe> */}
        <Footer />
        <MenuBar />
      </body>
    </html>
  );
}
