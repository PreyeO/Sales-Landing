"use client";

import { benefits } from "@/data/datas";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyWebsite() {
  return (
    <section
      className="bg-[#1f1d1d] text-white py-20 md:px-6 px-4"
      id="whywebsite"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-6 font-space-grotesk"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Every Business Needs a Website in 2025
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-[#ea9fa8] mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your business deserves to be found and trusted online.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#2d2a2a] p-6 rounded-2xl shadow-lg border border-[#fd025f]/10 hover:border-[#fd025f]/30 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="justify-center lg:text-xl text-base font-semibold text-white mb-2 flex items-center gap-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={25}
                  height={25}
                />
                <h3>{item.title}</h3>
              </div>
              <p className="text-[#ea9fa8]">{item.desc}</p>
            </motion.div>
          ))}

          {/* CTA Button as last grid item (not in a card) */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: benefits.length * 0.1 }}
          >
            <a
              href="https://forms.gle/wyuzM5KJoAxVGxut9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#fd025f] hover:bg-[#a6223a] transition-all duration-300 text-white text-lg font-semibold rounded-full shadow-xl font-inter text-center"
            >
              Start Your Website Today!
            </a>
          </motion.div>
        </div>

        {/* Urgency note */}
        <motion.p
          className="mt-4 text-sm text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          ⚠️ Limited spots available — start today!
        </motion.p>
      </div>
    </section>
  );
}
