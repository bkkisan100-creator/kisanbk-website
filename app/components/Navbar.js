import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-2 bg-black/80 backdrop-blur-md text-white border-b border-zinc-800/50">
      
      {/* 🔴 EXTRA LARGE LOGO */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Kisan BK Logo"
          width={1100}
          height={600}
          unoptimized
          /* h-20 (mobile) र md:h-32 (desktop) ले मज्जाको ठूलो साइज दिन्छ */
          className="h-28 md:h-44 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 md:gap-8 items-center font-medium text-sm md:text-base">
        <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-zinc-300 transition-colors">About</Link>
        <Link href="/projects" className="hover:text-zinc-300 transition-colors">Projects</Link>
        <Link href="/gallery" className="hover:text-zinc-300 transition-colors">Gallery</Link>
        <Link href="/stock">Stock</Link>
        <Link href="/contact-us" className="hover:text-zinc-300 transition-colors">Contact</Link>
      </div>

    </nav>
  );
}