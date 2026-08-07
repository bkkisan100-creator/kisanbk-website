"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import { creators } from "@/app/data/creators";

export default function FeaturedCreators() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-red-500 uppercase tracking-[0.35em] text-sm">
            Top Creators
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Featured Creators
          </h2>

          <p className="mt-4 text-zinc-400">
            Meet our most popular creators from around the world.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {creators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-6 text-center hover:border-red-500/40 transition-all"
            >

              <div className="relative w-24 h-24 mx-auto">

                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  fill
                  className="rounded-full object-cover"
                />

              </div>

              <div className="mt-5 flex items-center justify-center gap-2">

                <h3 className="text-xl font-bold text-white">
                  {creator.name}
                </h3>

                {creator.verified && (
                  <BadgeCheck
                    size={18}
                    className="text-blue-500"
                  />
                )}

              </div>

              <p className="mt-2 text-zinc-400">
                {creator.role}
              </p>

              <div className="mt-5 flex items-center justify-center gap-2">

                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span>{creator.rating}</span>

              </div>

              <div className="mt-6 flex justify-between text-sm text-zinc-400">

                <div>
                  <p className="text-white font-bold">
                    {creator.assets}
                  </p>

                  <span>Assets</span>
                </div>

                <div>
                  <p className="text-white font-bold">
                    {creator.downloads}
                  </p>

                  <span>Downloads</span>
                </div>

              </div>

              <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold hover:bg-red-700 transition">
                Follow
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}