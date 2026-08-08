"use client";

import { Camera, Clapperboard } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function WelcomeBanner() {

  const [hero, setHero] = useState(null);


  useEffect(() => {

    async function getHero(){

      const { data } = await supabase
        .from("hero")
        .select("*")
        .single();


      if(data){
        setHero(data);
      }

    }

    getHero();

  }, []);

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

  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-xl md:text-3xl font-semibold text-white"
  >
  {hero?.title || "मेरो आधिकारिक वेबसाइटमा हार्दिक स्वागत छ।"}
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="mt-2 text-xs md:text-sm tracking-[0.45em] uppercase text-red-400"
  >
  {hero?.subtitle || "Cinematic Storytelling"}
  </motion.p>

<motion.h3
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="mt-4 text-2xl md:text-4xl font-bold leading-tight text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]"
>
   {hero?.title || "प्रत्येक दृश्यले एउटा कथा बोल्छ।"}
  </motion.h3>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    className="mt-3 text-gray-400 text-sm md:text-lg"
  >
   {hero?.subtitle || "Every Frame Tells A Story."}
  </motion.p>

  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: 96 }}
    transition={{ delay: 1.1, duration: 0.8 }}
    className="mx-auto mt-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent"
  />

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