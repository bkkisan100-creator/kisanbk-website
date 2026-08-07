"use client";

import { useState } from "react";

export default function CreatorPage() {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>
            <p className="text-red-500 text-sm font-semibold">
              NCM STUDIO
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Creator Dashboard
            </h1>

            <p className="text-zinc-400 mt-2">
              Upload and sell your creative work.
            </p>
          </div>

          <button
            onClick={() => setShowUpload(true)}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            + Upload New Asset
          </button>

        </div>


        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400">
              My Assets
            </p>

            <h2 className="text-3xl font-bold mt-2">
              0
            </h2>
          </div>


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400">
              Total Sales
            </p>

            <h2 className="text-3xl font-bold mt-2">
              0
            </h2>
          </div>


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400">
              Total Earnings
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Rs. 0
            </h2>
          </div>

        </div>


        {/* My Assets */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-xl font-bold">
              My Assets
            </h2>

            <button className="text-red-500 hover:text-red-400 text-sm">
              View All
            </button>

          </div>


          {/* Empty State */}
          <div className="border border-dashed border-zinc-700 rounded-2xl py-20 text-center">

            <div className="text-5xl mb-4">
              🎬
            </div>

            <h3 className="text-xl font-semibold">
              No assets yet
            </h3>

            <p className="text-zinc-500 mt-2">
              Upload your first photo, video, vector or animation.
            </p>

            <button
              onClick={() => setShowUpload(true)}
              className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              + Upload Your First Asset
            </button>

          </div>

        </div>


        {/* Upload Modal */}
        {showUpload && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-8 overflow-y-auto">

            <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">

              {/* Modal Header */}
              <div className="flex items-start justify-between mb-7">

                <div>
                  <p className="text-red-500 text-sm font-semibold">
                    NCM STUDIO
                  </p>

                  <h2 className="text-2xl font-bold mt-1">
                    Upload New Asset
                  </h2>

                  <p className="text-zinc-400 text-sm mt-1">
                    Upload your work and sell it on NCM Studio.
                  </p>
                </div>

                <button
                  onClick={() => setShowUpload(false)}
                  className="text-zinc-400 hover:text-white text-3xl leading-none"
                >
                  ×
                </button>

              </div>


              {/* Asset Type */}
              <label className="block text-sm font-medium mb-2">
                What do you want to sell?
              </label>

              <select
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3.5 mb-5 outline-none focus:border-red-500"
              >
                <option>Photo</option>
                <option>Video</option>
                <option>Vector</option>
                <option>Animation</option>
                <option>Music</option>
                <option>Film / Documentary</option>
              </select>


              {/* File Upload */}
              <label className="block text-sm font-medium mb-2">
                Upload File
              </label>

              <label className="block border-2 border-dashed border-zinc-700 hover:border-red-500 rounded-2xl p-8 text-center cursor-pointer transition">

                <div className="text-4xl mb-3">
                  📁
                </div>

                <p className="font-semibold">
                  Click to choose your file
                </p>

                <p className="text-zinc-500 text-sm mt-2">
                  Photo, Video, Vector, Animation, Music or Film
                </p>

                <input
                  type="file"
                  className="hidden"
                />

              </label>


              {/* Title */}
              <label className="block text-sm font-medium mt-5 mb-2">
                Asset Title
              </label>

              <input
                type="text"
                placeholder="Example: Beautiful Nepal Mountain"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3.5 outline-none focus:border-red-500"
              />


              {/* Price */}
              <label className="block text-sm font-medium mt-5 mb-2">
                Price (Rs.)
              </label>

              <input
                type="number"
                placeholder="500"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3.5 outline-none focus:border-red-500"
              />


              {/* Upload Button */}
              <button
                className="w-full mt-7 bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold transition"
              >
                Upload Asset
              </button>


              <p className="text-center text-xs text-zinc-500 mt-4">
                Your asset will be reviewed before appearing in the marketplace.
              </p>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}