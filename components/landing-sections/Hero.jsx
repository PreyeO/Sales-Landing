"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#353131] text-white overflow-hidden py-20"
    >
      {/* Soft Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#fd025f] to-[#a6223a] opacity-10 blur-lg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight font-space-grotesk"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Turn Your Business Into a Customer Magnet —{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fd025f] to-[#ea9fa8]">
            This Easter
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-[#ea9fa8] font-inter max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          For just <span className="text-white font-semibold">₦100,000</span>,
          get a high-converting 1–2 page website — including free domain,
          hosting, Google setup, and SEO. Built to help you grow.
        </motion.p>

        {/* Reassurance Note */}
        <motion.p
          className="mt-4 text-sm text-[#ea9fa8] font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          💡 Pay only when your website is ready! No upfront payment required.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://forms.gle/wyuzM5KJoAxVGxut9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#fd025f] hover:bg-[#a6223a] transition-all duration-300 text-white text-lg font-semibold rounded-full shadow-xl font-inter"
          >
            Book Your Website Slot Now
          </a>
        </motion.div>

        {/* Urgency Note */}
        <motion.p
          className="mt-4 text-sm text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          ⚠️ Only 20 spots available. Offer ends when all spots are booked.
        </motion.p>

        {/* Mobile Image Floating Over Desktop Image */}
        <motion.div
          className="relative w-full mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          {/* Desktop Image */}
          <p className="text-sm text-[#ea9fa8] mb-2 text-center md:text-left italic flex justify-end">
            Your business website could look just like this 👇
          </p>
          <div className="w-full relative">
            <Image
              src="/pepper.png" // Replace with your desktop image path
              alt="Desktop website preview"
              width={1200}
              height={700}
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
              priority
            />
            {/* Mobile Image Floating on Top */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <Image
                src="/mobile-view.png" // Replace with your mobile image path
                alt="Mobile website preview"
                width={800}
                height={1400}
                className="w-[60%] md:w-[50%] h-auto object-cover rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
