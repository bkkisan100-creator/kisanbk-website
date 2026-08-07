"use client";

import { motion } from "framer-motion";
import { categories } from "@/app/data/categories";

export default function Categories() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-red-500 uppercase tracking-[0.35em] text-sm">
            Marketplace
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">
            Browse Categories
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">
            Discover millions of premium creative assets from talented creators
            around the world.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-red-500/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="text-6xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold group-hover:text-red-400 transition">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}