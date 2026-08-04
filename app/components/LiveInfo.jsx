"use client";

import { useEffect, useState } from "react";

export default function LiveInfo() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };

      setDateTime(now.toLocaleString("en-US", options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          📅 Live Date & Time
        </h2>

        <p className="text-xl text-gray-300">{dateTime}</p>
      </div>
    </section>
  );
}