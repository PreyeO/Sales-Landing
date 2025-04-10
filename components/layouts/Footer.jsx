"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#2a2727] text-white py-10 pt-30 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Footer Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h3 className="text-2xl font-semibold mb-4">
            Need More Information? Let's Connect!
          </h3>

          <div className="flex justify-center gap-6 mb-6">
            {/* Social Media Icons */}
            <a
              href="https://www.linkedin.com/in/preyeomusuku/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#fd025f] transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/p.r.e.y.e_o/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#fd025f] transition-all"
            >
              Instagram
            </a>
          </div>

          <p className="text-lg mb-4">© 2025 LetsCr8T. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
