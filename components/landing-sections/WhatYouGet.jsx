"use client";

import { deliverables } from "@/data/datas";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhatYouGet() {
  return (
    <section className=" bg-[#1f1d1d] text-white py-20 px-6" id="what-you-get">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold font-space-grotesk mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What You’ll Get for ₦100,000
        </motion.h2>

        <motion.p
          className="text-[#ea9fa8] text-lg md:text-xl mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We’ve crafted this package to help small businesses show up strong
          online without breaking the bank. No stress, no hidden fees.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CheckCircle className="text-[#fd025f] mt-1" size={20} />
              <span className="text-white text-base">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
