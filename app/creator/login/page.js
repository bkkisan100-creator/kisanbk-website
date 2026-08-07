"use client";

import Link from "next/link";

export default function CreatorLogin() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-red-600 flex items-center justify-center text-2xl font-bold shadow-lg">
            N
          </div>

          <h1 className="text-3xl font-bold mt-5">
            Creator Login
          </h1>

          <p className="text-zinc-400 mt-2">
            Login to upload and sell your creative work.
          </p>
        </div>


        {/* Login Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">

          {/* Google */}
          <button
            className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 rounded-xl font-semibold hover:bg-zinc-200 transition"
          >
            <span className="font-bold text-lg">
              G
            </span>

            Continue with Google
          </button>


          {/* Divider */}
          <div className="flex items-center gap-4 my-7">

            <div className="h-px bg-zinc-800 flex-1" />

            <span className="text-zinc-500 text-sm">
              OR
            </span>

            <div className="h-px bg-zinc-800 flex-1" />

          </div>


          {/* Email / Phone */}
          <label className="block text-sm font-medium mb-2">
            Email or Phone Number
          </label>

          <input
            type="text"
            placeholder="you@gmail.com or 98XXXXXXXX"
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-red-500 transition"
          />


          {/* Continue */}
          <button
            className="w-full mt-5 bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold transition"
          >
            Continue
          </button>


          {/* Create Account */}
          <p className="text-center text-sm text-zinc-400 mt-6">
            New creator?{" "}

            <Link
              href="/creator/signup"
              className="text-red-500 hover:text-red-400 font-semibold"
            >
              Create Creator Account
            </Link>
          </p>

        </div>


        {/* Back */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-zinc-500 hover:text-white text-sm transition"
          >
            ← Back to NCM Studio
          </Link>
        </div>

      </div>

    </main>
  );
}