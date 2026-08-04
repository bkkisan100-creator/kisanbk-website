export default function LicensingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-zinc-500 uppercase tracking-[0.3em]">
            Licensing
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Photo & Video Licensing
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            License cinematic photography, documentary visuals and drone footage
            for commercial and creative projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Item 1 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <img
              src="/Photos/1.jpeg"
              alt="Photo"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Documentary Photography
              </h3>

              <p className="text-zinc-400 mt-3">
                Commercial & editorial licensing.
              </p>

              <p className="text-red-500 text-xl font-bold mt-4">
                $25
              </p>

              <a
                href="/contact-us"
                className="block text-center mt-5 bg-white text-black py-3 rounded-xl font-semibold"
              >
                License This Photo
              </a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <img
              src="/Photos/2.jpeg"
              alt="Photo"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Cinematic Still
              </h3>

              <p className="text-zinc-400 mt-3">
                High-resolution licensed image.
              </p>

              <p className="text-red-500 text-xl font-bold mt-4">
                $30
              </p>

              <a
                href="/contact-us"
                className="block text-center mt-5 bg-white text-black py-3 rounded-xl font-semibold"
              >
                License This Photo
              </a>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <img
              src="/Photos/3.jpeg"
              alt="Drone"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Drone Footage License
              </h3>

              <p className="text-zinc-400 mt-3">
                Commercial drone footage usage rights.
              </p>

              <p className="text-red-500 text-xl font-bold mt-4">
                $75
              </p>

              <a
                href="/contact-us"
                className="block text-center mt-5 bg-white text-black py-3 rounded-xl font-semibold"
              >
                License This Footage
              </a>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}