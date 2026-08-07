"use client";

import { Search } from "lucide-react";

export default function SearchFilter() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row gap-4">

          <div className="relative flex-1">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search photos, videos, films..."
              className="
              w-full
              rounded-2xl
              border
              border-zinc-700
              bg-zinc-900
              py-4
              pl-12
              pr-4
              text-white
              outline-none
              focus:border-red-500
              transition
              "
            />

          </div>

          <select
            className="
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-900
            px-6
            text-white
            outline-none
            focus:border-red-500
            "
          >
            <option>All</option>
            <option>Photos</option>
            <option>Videos</option>
            <option>Films</option>
            <option>AI Assets</option>
          </select>

        </div>

      </div>
    </section>
  );
}