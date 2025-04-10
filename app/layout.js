import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/layouts/MenuBar";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Affordable Websites for Small Businesses",
  description:
    "Create a stunning website that works for your business. Get your website built with SEO, domain, and hosting for a fixed price. Book your free consultation today!",
  keywords:
    "small business website, professional websites, affordable web design, business website development, website with hosting, SEO optimized websites, free consultation",
  author: "Your Company Name",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow", // Tells search engines to index this page
  og: {
    title: "Affordable Websites for Small Businesses",
    description:
      "Create a stunning website that works for your business. Get your website built with SEO, domain, and hosting for a fixed price. Book your free consultation today!",
    image: "/path/to/your-image.jpg", // Change with the actual path to your image
    url: "your-landing-page-url.com", // Replace with the actual URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Websites for Small Businesses",
    description:
      "Create a stunning website that works for your business. Get your website built with SEO, domain, and hosting for a fixed price. Book your free consultation today!",
    image: "/path/to/your-image.jpg", // Use your image here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Footer />
        <MenuBar />
      </body>
    </html>
  );
}
