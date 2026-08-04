"use client";

export default function WelcomeBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-black py-16">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-8 w-80 h-80 bg-red-500/20 blur-3xl rounded-full"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          🙏 मेरो आधिकारिक वेबसाइटमा हार्दिक स्वागत छ।
        </h2>

        <p className="mt-4 text-xl text-gray-200">
          Welcome to My Official Portfolio Website
        </p>

        <div className="w-32 h-1 bg-red-500 mx-auto rounded-full my-8"></div>

        <p className="text-2xl md:text-3xl italic text-white">
          🎬 प्रत्येक दृश्यले एउटा कथा बोल्छ।
        </p>

        <p className="mt-3 text-lg text-red-200">
          Every Frame Tells a Story.
        </p>

      </div>

    </section>
  );
}