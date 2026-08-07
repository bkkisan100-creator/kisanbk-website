import Link from "next/link";
import Image from "next/image";
import { films } from "./data";

export default function FilmsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-6xl font-bold mb-12">
        Featured Films
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {films.map((film) => (
          <Link
            key={film.id}
            href={`/films/${film.id}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[2/3]">
  <Image
    src={film.poster}
    alt={film.title}
    fill
    className="object-cover group-hover:scale-110 transition duration-500"
  />
</div>

            <h2 className="text-2xl font-bold mt-4">
              {film.title}
            </h2>

            <p className="text-red-500 mt-2">
              ${film.price}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}