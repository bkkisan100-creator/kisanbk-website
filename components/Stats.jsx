"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "120K+",
    title: "Creative Assets",
  },
  {
    number: "8.5K+",
    title: "Verified Creators",
  },
  {
    number: "52",
    title: "Countries",
  },
  {
    number: "$1.2M+",
    title: "Paid To Creators",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              text-center
              hover:border-red-500/40
              hover:bg-white/10
              transition
              duration-300
              "
            >
              <h2 className="text-4xl font-black text-red-500">
                {item.number}
              </h2>

              <p className="mt-3 text-zinc-400">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}