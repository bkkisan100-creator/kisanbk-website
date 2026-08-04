"use client";

import { Camera, Clapperboard } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <section className="relative z-20 px-6 md:px-10 mb-12">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_0_35px_rgba(255,0,0,0.15)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-red-500/40
          hover:shadow-[0_0_60px_rgba(255,0,0,0.25)]
        "
      >
        {/* Left Glow */}
        <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl"></div>

        {/* Right Glow */}
        <div className="absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl"></div>

        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

        <div className="relative flex items-center justify-between px-8 py-8">

          {/* Left Icon */}
          <div className="hidden lg:flex text-red-500/70 group-hover:text-red-400 transition-all duration-500">
            <Clapperboard size={58} strokeWidth={1.5} />
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center">

            <h2 className="text-xl md:text-3xl font-semibold text-white">
               मेरो आधिकारिक वेबसाइटमा हार्दिक स्वागत छ।
            </h2>

            <p className="mt-2 text-xs md:text-sm tracking-[0.45em] uppercase text-red-400">
              Cinematic Storytelling
            </p>

            <h3 className="mt-4 text-2xl md:text-4xl font-bold leading-tight text-white">
              प्रत्येक दृश्यले{" "}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
                एउटा कथा
              </span>{" "}
              बोल्छ।
            </h3>

            <p className="mt-3 text-gray-400 text-sm md:text-lg">
              Every Frame Tells A Story.
            </p>

            <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

          </div>

          {/* Right Icon */}
          <div className="hidden lg:flex text-red-500/70 group-hover:text-red-400 transition-all duration-500">
            <Camera size={58} strokeWidth={1.5} />
          </div>

        </div>
      </div>
    </section>
  );
}