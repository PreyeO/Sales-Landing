"use client";

import { steps } from "@/data/datas";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="bg-[#2a2727] text-white py-20 px-6" id="howitworks">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold font-space-grotesk mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        <motion.p
          className="text-[#ea9fa8] text-lg md:text-xl mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to take the first step toward growing your business? Here’s how
          our process works!
        </motion.p>

        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#2d2a2a] p-8 rounded-xl shadow-lg w-full md:w-1/3 mb-6 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[#fd025f] p-4 rounded-full text-white w-12 h-12 flex items-center justify-center text-xl font-semibold">
                  {i + 1} {/* Adding numbers inside the circle */}
                </div>
              </div>
              <p className="text-xl font-semibold text-[#fd025f] mb-2">
                {item.step}
              </p>
              <p className="text-sm text-[#ea9fa8]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
