"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-red-600/10 blur-[180px]" />

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 py-28">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block border border-red-500/40 rounded-full px-6 py-2 text-red-400 uppercase tracking-[6px] text-sm">
            Contact
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Let's Work
            <br />
            Together
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-zinc-400 text-lg leading-8">
            Documentary Filmmaker • Video Editor • Colorist •
            Cinematic Storytelling
          </p>

        </div>
        {/* Contact Area */}

<div className="grid lg:grid-cols-2 gap-10 mt-24">

  {/* Left */}

  <div className="rounded-[35px] bg-[#111111] border border-zinc-800 p-8">

    <div className="flex flex-col items-center text-center">

      <img
        src="/kisan.png"
        alt="Profile"
        className="w-30 h-30 rounded-full border-4 border-red-500 object-cover"
      />

      <h2 className="mt-6 text-3xl font-bold">
        Kisan BK
      </h2>

      <p className="text-zinc-500">
        Documentary Filmmaker & Video Editor
      </p>

      <span className="mt-5 bg-green-500/10 border border-green-500 text-green-400 px-5 py-2 rounded-full">
        🟢 Available for Freelance
      </span>

    </div>

    <div className="space-y-5 mt-10">

      <div className="bg-zinc-900 rounded-2xl p-5">
        📧 bkkisan100@email.com
      </div>

      <div className="bg-zinc-900 rounded-2xl p-5">
        📱 +977-9847626447
      </div>

      <div className="bg-zinc-900 rounded-2xl p-5">
        💬 +9779847626447
      </div>

      <div className="bg-zinc-900 rounded-2xl p-5">
        ▶️ https://www.youtube.com/@AajaKxa
      </div>

      <div className="bg-zinc-900 rounded-2xl p-5">
        📘 Facebook
      </div>

      <div className="bg-zinc-900 rounded-2xl p-5">
        📍 Temporary: NAgarjun -02, Kathmandu , nepal
        <br />
        Permanent: Jaljala -06, Salija, Parvat, Gandaki Province , Nepal
      </div>

    </div>

  </div>

  {/* Right */}

  <div className="rounded-[35px] bg-[#111111] border border-zinc-800 p-8">

    <h2 className="text-3xl font-bold mb-8">
      Send Message
    </h2>

    <form className="space-y-5">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-4 outline-none focus:border-red-500"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-4 outline-none focus:border-red-500"
      />

      <textarea
        rows="6"
        placeholder="Your Message"
        className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-4 outline-none focus:border-red-500"
      />

      <button className="w-full bg-red-600 hover:bg-red-500 rounded-xl py-4 font-semibold transition">
        Send Message →
      </button>

    </form>

  </div>

</div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">

{/* Card 1 */}
<div className="rounded-3xl bg-[#111111] border border-zinc-800 p-4 hover:border-red-500 transition duration-500">

  <div className="aspect-video overflow-hidden rounded-2xl">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/EvaY8rCy9sI"
      title="Nims Purja Reporting"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  <div className="mt-5">
    <span className="text-red-400 text-sm tracking-[0.3em] uppercase">
  
    </span>

    <h3 className="text-2xl font-bold mt-2 text-white">
      Nims Purja Reporting
    </h3>

    <p className="text-zinc-400 mt-3">
      Reporting • Speech •  Production
    </p>
  </div>

</div>

 {/* Card 2 */}
<div className="rounded-3xl bg-[#111111] border border-zinc-800 p-4 hover:border-red-500 transition duration-500">

  <div className="aspect-video overflow-hidden rounded-2xl">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/PPbXhSbGl2w"
      title="Media & Public Voice"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  <div className="mt-5">
    <span className="text-red-400 text-sm tracking-[0.3em] uppercase">
  
    </span>

    <h3 className="text-2xl font-bold mt-2 text-white">
      लाहुरेको त्यो लामो इतिहास
    </h3>

    <p className="text-zinc-400 mt-3">
      About Lahure culture in Nepal
    </p>
  </div>

</div>
  {/* Card 3 */}
<div className="rounded-3xl bg-[#111111] border border-zinc-800 p-4 hover:border-red-500 transition duration-500">

  <div className="aspect-video overflow-hidden rounded-2xl">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/bMYwbjSN7vo"
      title="Visual Storytelling Era"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  <div className="mt-5">
    <span className="text-red-400 text-sm tracking-[0.3em] uppercase">
    </span>

    <h3 className="text-2xl font-bold mt-2 text-white">
      Visual Storytelling Era
    </h3>

    <p className="text-zinc-400 mt-3">
      Documentary • Drone Films • Video Editing • Visual Storytelling
    </p>
  </div>

</div>
 {/* Card 4 */}
<div className="rounded-3xl bg-[#111111] border border-zinc-800 p-4 hover:border-red-500 transition duration-500">

  <div className="aspect-video overflow-hidden rounded-2xl">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/qEKIyLTrhRw"
      title="Project Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  <div className="mt-5">
    <span className="text-red-400 text-sm tracking-[0.3em] uppercase">
      Project 4
    </span>

    <h3 className="text-2xl font-bold mt-2 text-white">
      Ai Genereted Song & Music Viddeo
    </h3>

    <p className="text-zinc-400 mt-3">
      Watch the full project and journey.
    </p>
  </div>

</div>

 {/* Card 5 */}
<div className="rounded-3xl bg-[#111111] border border-zinc-800 p-4 hover:border-red-500 transition duration-500">

  <div className="aspect-video overflow-hidden rounded-2xl">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/xs--Ti8IYOU"
      title="Project Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  <div className="mt-5">
    <span className="text-red-400 text-sm tracking-[0.3em] uppercase">
      Project 5
    </span>

    <h3 className="text-2xl font-bold mt-2 text-white">
      Motivetional Short Movie -GITI
    </h3>

    <p className="text-zinc-400 mt-3">
      Watch the full project and creative journey.
    </p>
  </div>

</div>

 {/* Card 6 */}
<div className="rounded-3xl bg-[#111111] border border-zinc-800 p-4 hover:border-red-500 transition duration-500">

  <div className="aspect-video overflow-hidden rounded-2xl">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/spGzU5aKI44"
      title="Short Movie"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  <div className="mt-5">
    <span className="text-red-400 text-sm tracking-[0.3em] uppercase">
      Short Movie
    </span>

    <h3 className="text-2xl font-bold mt-2 text-white">
      Featured Short Film
    </h3>

    <p className="text-zinc-400 mt-3">
      Narrative storytelling through cinema and visual expression.
    </p>
  </div>

</div>

        </div>

{/* Bottom CTA */}

<div className="mt-24 rounded-[40px] border border-red-500/20 bg-[#111111] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">

  <div>

    <h2 className="text-4xl md:text-5xl font-bold">
      Have a Project in Mind?
    </h2>

    <p className="text-zinc-400 mt-4 max-w-xl">
      Let's create something cinematic, modern and unforgettable together.
    </p>

  </div>

  <a
    href="https://wa.me/9779847626447?text=Hello%20Kisan,%20I%20would%20like%20to%20work%20with%20you."
    target="_blank"
    rel="noopener noreferrer"
    className="bg-Dark Blue-600 hover:bg-red-500 transition px-10 py-5 rounded-2xl font-semibold text-lg inline-block"
  >
    Let's Work →
  </a>

</div>

      </section>

    </main>
  );
}