"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/datas";

export default function Testimonials() {
  return (
    <section className="bg-[#1f1d1d] text-white py-20 px-6" id="testimonials">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold font-space-grotesk mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What People Are Saying
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-[#2a2727] p-6 rounded-2xl shadow-xl border border-[#fd025f]/10 hover:shadow-[#fd025f]/20 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#fd025f]/30">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>

              <div className="flex text-[#fd025f] mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#fd025f" />
                ))}
              </div>

              <p className="text-sm text-[#f3f3f3]/90 leading-relaxed">
                "{t.message}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
