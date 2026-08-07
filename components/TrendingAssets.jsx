"use client";

import { motion } from "framer-motion";
import { assets } from "@/app/data/assets";
import AssetCard from "@/components/AssetCard";

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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {assets.map((asset, index) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <AssetCard asset={asset} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}