export default async function CheckoutPage({ params }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 max-w-md w-full">

        <h1 className="text-4xl font-bold mb-4">
          Payment
        </h1>

        <p className="text-zinc-400 mb-8">
          Film ID: {id}
        </p>

        <div className="space-y-4">

          <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold">
            Pay with Khalti
          </button>

          <button className="w-full bg-green-600 hover:bg-green-700 py-4 rounded-xl font-bold">
            Pay with eSewa
          </button>

        </div>

      </div>

    </main>
  );
}