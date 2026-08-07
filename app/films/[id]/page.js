import { films } from "../data";
import Link from "next/link";

export default async function FilmDetail({ params }) {
  const { id } = await params;

  const film = films.find(
    (item) => item.id === id
  );

  if (!film) {
  return <div>Film Not Found</div>;
}

 return (
  <main className="bg-black text-white min-h-screen">

    <video
      src={film.trailer}
      autoPlay
      muted
      loop
      controls
      playsInline
      className="w-full h-[70vh] object-cover"
    />

    <div className="max-w-6xl mx-auto px-8 py-12">

      <h1 className="text-5xl font-bold">
        {film.title}
      </h1>

      <p className="text-zinc-400 mt-4">
        {film.duration}
      </p>

      <p className="text-zinc-300 mt-6 text-lg">
        {film.description}
      </p>

      <div className="mt-8 flex items-center gap-4">

        <span className="text-3xl font-bold text-red-500">
          रु {film.price}
        </span>

        <Link
          href={`/checkout/${film.id}`}
          className="bg-red-600 px-8 py-4 rounded-xl font-bold"
        >
          Watch Now
        </Link>

        <button
          className="bg-zinc-700 px-8 py-4 rounded-xl font-bold cursor-not-allowed"
        >
          🔒 Watch Full Movie
        </button>

      </div>

    </div>

  </main>
);

}