"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            N
          </div>

          <div>
            <h1 className="text-white font-bold text-xl">
              NCM Studio
            </h1>

            <p className="text-zinc-400 text-xs">
              Create • Sell • Earn
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm text-zinc-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="#" className="hover:text-white transition">
            Marketplace
          </Link>

          <Link href="#" className="hover:text-white transition">
            Films
          </Link>

          <Link href="#" className="hover:text-white transition">
            Creators
          </Link>

          <Link href="#" className="hover:text-white transition">
            Pricing
          </Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">

          <button className="hidden md:flex w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 items-center justify-center hover:bg-zinc-800 transition">
            <Search size={18} />
          </button>

          <button className="hidden md:flex w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 items-center justify-center hover:bg-zinc-800 transition">
            <ShoppingBag size={18} />
          </button>

          <Link
            href="/login"
            className="hidden md:flex px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition font-medium"
          >
            Login
          </Link>

          <button className="lg:hidden">
            <Menu size={28} />
          </button>

        </div>

      </div>
    </header>
  );
}