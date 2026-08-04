export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-40 px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-5xl font-bold mb-6">
          My Projects
        </h1>

        <p className="text-zinc-400 mb-12">
          Documentary, Short Films, Visual Storytelling and Drone Cinematography.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Short Film 1 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 transition">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/NeWk8ob_Lm4"
              title="Short Film 1"
              allowFullScreen
            />
            <div className="p-6">
              <span className="text-red-500 text-sm">SHORT FILM</span>
              <h3 className="text-2xl font-bold mt-2">Cinematic Storytelling</h3>
            </div>
          </div>

          {/* Short Film 2 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 transition">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/ZUXlKA72fe8"
              title="Short Film 2"
              allowFullScreen
            />
            <div className="p-6">
              <span className="text-red-500 text-sm">SHORT FILM</span>
              <h3 className="text-2xl font-bold mt-2">Human Stories</h3>
            </div>
          </div>

          {/* Short Film 3 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 transition">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/Lu20USRqzkI"
              title="Short Film 3"
              allowFullScreen
            />
            <div className="p-6">
              <span className="text-red-500 text-sm">SHORT FILM</span>
              <h3 className="text-2xl font-bold mt-2">Documentary Narrative</h3>
            </div>
          </div>

          {/* Short Film 4 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 transition">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/Dood6hOUxVs"
              title="Short Film 4"
              allowFullScreen
            />
            <div className="p-6">
              <span className="text-red-500 text-sm">SHORT FILM</span>
              <h3 className="text-2xl font-bold mt-2">Social Reality</h3>
            </div>
          </div>

          {/* Short Film 5 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 transition">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/9jOaWyvfBVk"
              title="Short Film 5"
              allowFullScreen
            />
            <div className="p-6">
              <span className="text-red-500 text-sm">SHORT FILM</span>
              <h3 className="text-2xl font-bold mt-2">Visual Storytelling</h3>
            </div>
          </div>

 {/* Child Psychology */}
<div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 transition">
  <iframe
    className="w-full aspect-video"
    src="https://www.youtube.com/embed/BQ7dxzJiLho"
    title="Child Psychology"
    allowFullScreen
  />
  <div className="p-6">
    <span className="text-red-500 text-sm">
      SHORT FILM
    </span>

    <h3 className="text-2xl font-bold mt-2">
      Child Psychology
    </h3>

    <p className="text-zinc-400 mt-3">
      A short film exploring child behavior, emotions, development, and the psychological world of childhood through cinematic storytelling.
    </p>
  </div>
</div>

        </div>

      </div>
    </main>
  );
}