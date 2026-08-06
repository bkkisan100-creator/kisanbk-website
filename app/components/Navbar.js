"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [dateTime, setDateTime] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const date = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setDateTime({ date, time });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">

        {/* LOGO */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Kisan BK Logo"
            width={1100}
            height={600}
            unoptimized
            priority
            className="h-12 md:h-20 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/ai-tools">AI Tools</Link>

          <Link href="/projects">Projects</Link>

          <Link href="/gallery">Gallery</Link>

          <Link href="/stock">Stock</Link>

          <Link href="/contact-us">Contact</Link>

        </div>

        {/* Date & Time */}
        <div className="hidden lg:flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm">
          <span>📅 {dateTime.date}</span>
          <span className="text-gray-400">|</span>
          <span>🕒 {dateTime.time}</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <div className="flex flex-col px-6 py-5 space-y-5 text-lg">

            <Link href="/" onClick={closeMenu}>Home</Link>

            <Link href="/about" onClick={closeMenu}>About</Link>

            <Link href="/ai-tools" onClick={closeMenu}>AI Tools</Link>

            <Link href="/projects" onClick={closeMenu}>Projects</Link>

            <Link href="/gallery" onClick={closeMenu}>Gallery</Link>

            <Link href="/stock" onClick={closeMenu}>Stock</Link>

            <Link href="/contact-us" onClick={closeMenu}>Contact</Link>

          </div>
        </div>
      )}
    </nav>
  );
}