"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black animate-fadeOut">

      <div className="text-center text-white">

        <h1 className="text-6xl font-bold tracking-widest animate-logo">
          KISAN BK
        </h1>

        <div className="mt-6 space-y-2 text-xl tracking-[6px]">
          <p className="animate-text delay-200">
            FILMMAKER
          </p>

          <p className="animate-text delay-500">
            VIDEO EDITOR
          </p>

          <p className="animate-text delay-700">
            VISUAL STORYTELLER
          </p>
        </div>

      </div>

    </div>
  );
}