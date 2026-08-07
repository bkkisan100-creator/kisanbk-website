import { assets } from "@/app/data/assets";
import AssetCard from "@/components/AssetCard";

export default function MarketplacePage() {

  return (

    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black">
          Marketplace
        </h1>

        <p className="mt-4 text-zinc-400">
          Discover premium photos, videos, films and digital assets.
        </p>


        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {assets.map((asset)=>(
            <AssetCard
              key={asset.id}
              asset={asset}
            />
          ))}

        </div>


      </div>

    </main>

  );
}