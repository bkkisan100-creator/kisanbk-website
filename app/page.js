import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import TrendingAssets from "@/components/TrendingAssets";
import SearchFilter from "@/components/SearchFilter";
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <Hero />

      <Stats />

       <Categories />

       <SearchFilter />

       <TrendingAssets />

       

    </main>
  );
}