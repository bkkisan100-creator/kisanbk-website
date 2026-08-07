"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AssetCard({ asset }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:border-red-500/40"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={asset.image}
          alt={asset.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <button className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur">
          <Heart size={18} />
        </button>

        <div className="absolute bottom-4 left-4 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
          {asset.type}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white">
          {asset.title}
        </h3>

        <p className="mt-2 text-zinc-400">
          {asset.creator}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-bold text-red-500">
            ${asset.price}
          </span>

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="text-white">
              {asset.rating}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}