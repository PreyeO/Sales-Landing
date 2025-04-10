"use client";

import Image from "next/image";
import { projects } from "@/data/datas";
import { motion } from "framer-motion";

export default function PastProjects() {
  return (
    <section className="bg-[#2a2727] text-white py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold font-space-grotesk mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Past Projects
        </motion.h2>

        <motion.p
          className="text-[#ea9fa8] text-lg md:text-xl mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Check out some of our previous work to see what we can build for your
          business. We create websites that stand out and help your brand grow!
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:scale-[1.015] text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>
              <div className="p-5 text-[#2a2727]">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fd025f] font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
