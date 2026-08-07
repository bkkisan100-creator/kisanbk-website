"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white pt-36 pb-24">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            🚀 The Future of Creative Marketplace
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

            Create.

            <br />

            Sell.

            <br />

            Earn.

          </h1>

          <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-8">

            NCM Studio helps creators sell photos,
            videos, films, music and digital assets
            to customers around the world.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#"
              className="flex items-center gap-2 rounded-2xl bg-red-600 px-7 py-4 font-semibold hover:bg-red-700 transition"
            >
              Start Selling

              <ArrowRight size={18} />
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 rounded-2xl border border-zinc-700 px-7 py-4 hover:bg-zinc-900 transition"
            >
              <Play size={18} />

              Watch Demo

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}