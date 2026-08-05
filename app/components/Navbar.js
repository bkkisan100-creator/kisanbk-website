"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-2 bg-black/80 backdrop-blur-md text-white border-b border-zinc-800/50">
      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Kisan BK Logo"
          width={1100}
          height={600}
          unoptimized
          className="h-14 md:h-20 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          priority
        />
      </Link>

      {/* MENU */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 lg:gap-8 items-center font-medium text-sm md:text-base">
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            Home
          </Link>

          <Link href="/about" className="hover:text-zinc-300 transition-colors">
            About
          </Link>
<Link href="/ai-tools" className="hover:text-zinc-300 transition">
    AI Tools
  </Link>
          <Link href="/projects" className="hover:text-zinc-300 transition-colors">
            Projects
          </Link>

          <Link href="/gallery" className="hover:text-zinc-300 transition-colors">
            Gallery
          </Link>

          <Link href="/stock" className="hover:text-zinc-300 transition-colors">
            Stock
          </Link>

          <Link href="/contact-us" className="hover:text-zinc-300 transition-colors">
            Contact
          </Link>
        </div>

        {/* Live Date & Time */}
        <div className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm">
          <span>📅 {dateTime.date}</span>
          <span className="text-gray-400">|</span>
          <span>🕒 {dateTime.time}</span>
        </div>
      </div>
    </nav>
  );
}