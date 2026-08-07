"use client";

import Image from "next/image";
import { assets } from "@/app/data/assets";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TrendingAssets() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-red-500 uppercase tracking-[0.35em] text-sm">
            Marketplace
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Trending Assets
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {assets.map((item) => (

            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-zinc-900"
            >

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
                  <Heart size={18} />
                </button>

              </div>

              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {item.creator}
                </p>

                <div className="mt-5 flex justify-between items-center">

                  <span className="text-red-500 font-bold">
                    ${item.price}
                  </span>

                  <div className="flex items-center gap-1">

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span>{item.rating}</span>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}