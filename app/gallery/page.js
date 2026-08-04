"use client";

import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const photos = Array.from(
    { length: 38 },
    (_, i) => `/Photos/${i + 1}.jpeg`
  );

  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextPhoto = () => {
    setSelectedIndex((prev) =>
      prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            Visual Collection
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Gallery
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Capturing stories through film, photography and visual journalism.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 cursor-pointer"
            >
              <div className="relative aspect-[4/5]">

                <Image
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                {/* Camera Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                    <span className="text-3xl">📷</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center">

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-8 text-white text-5xl hover:text-red-500 transition"
            >
              ×
            </button>

            {/* Previous */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 md:left-10 text-white text-6xl hover:text-red-500 transition"
            >
              ‹
            </button>

            {/* Image */}
            <div className="relative w-[90vw] h-[85vh]">
              <Image
                src={photos[selectedIndex]}
                alt="Preview"
                fill
                className="object-contain"
              />
            </div>

            {/* Next */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 md:right-10 text-white text-6xl hover:text-red-500 transition"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-8 text-zinc-300 text-lg">
              {selectedIndex + 1} / {photos.length}
            </div>

          </div>
        )}

      </div>
    </main>
  );
}