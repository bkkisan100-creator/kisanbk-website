"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Film,
  Upload,
  BarChart3,
  Wallet,
  User,
  Settings,
  Bell,
  Search,
  Plus,
  Play,
  MoreHorizontal,
  Eye,
  TrendingUp,
  DollarSign,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function CreatorDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-black/90 backdrop-blur-xl border-b border-zinc-800 px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center font-bold">
            N
          </div>
          <span className="font-bold">NCM Studio</span>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-zinc-300"
        >
          {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64
          bg-[#090909] border-r border-zinc-800
          flex flex-col
          transition-transform duration-300
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* Logo */}
        <div className="h-20 px-6 flex items-center gap-3 border-b border-zinc-800">

          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-lg font-bold shadow-lg shadow-red-900/30">
            N
          </div>

          <div>
            <h1 className="font-bold tracking-tight">
              NCM Studio
            </h1>

            <p className="text-[11px] text-zinc-500">
              CREATOR
            </p>
          </div>

        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-7 space-y-2">

          <p className="px-3 mb-3 text-[10px] font-bold tracking-[0.2em] text-zinc-600">
            WORKSPACE
          </p>

          <NavItem
            icon={<LayoutDashboard size={19} />}
            text="Dashboard"
            active
          />

          <NavItem
            icon={<Film size={19} />}
            text="My Movies"
          />

          <NavItem
            icon={<Upload size={19} />}
            text="Upload New"
          />

          <NavItem
            icon={<BarChart3 size={19} />}
            text="Analytics"
          />

          <NavItem
            icon={<Wallet size={19} />}
            text="Sales & Earnings"
          />

          <div className="pt-7">

            <p className="px-3 mb-3 text-[10px] font-bold tracking-[0.2em] text-zinc-600">
              ACCOUNT
            </p>

            <NavItem
              icon={<User size={19} />}
              text="Creator Profile"
            />

            <NavItem
              icon={<Settings size={19} />}
              text="Settings"
            />

          </div>

        </nav>

        {/* Profile */}
        <div className="p-4 border-t border-zinc-800">

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-900 transition cursor-pointer">

            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center font-bold">
              C
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">
                Creator Account
              </p>

              <p className="text-xs text-zinc-500 truncate">
                Professional Creator
              </p>
            </div>

            <MoreHorizontal
              size={18}
              className="text-zinc-500"
            />

          </div>

        </div>

      </aside>

      {/* Main */}
      <section className="lg:ml-64 min-h-screen pt-16 lg:pt-0">

        {/* Topbar */}
        <header className="hidden lg:flex h-20 border-b border-zinc-800 items-center justify-between px-8">

          <div className="flex items-center gap-3 text-zinc-500">
            <Search size={18} />

            <input
              placeholder="Search your content..."
              className="bg-transparent outline-none text-sm placeholder:text-zinc-600 w-64"
            />
          </div>

          <div className="flex items-center gap-5">

            <button className="relative text-zinc-400 hover:text-white transition">
              <Bell size={20} />

              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <Link
              href="/"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              View Website →
            </Link>

          </div>

        </header>

        {/* Dashboard Content */}
        <div className="px-5 md:px-8 lg:px-10 py-8 md:py-10">

          {/* Hero */}
          <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-[#0d0d0d] to-black p-7 md:p-10 mb-8">

            {/* Glow */}
            <div className="absolute -top-32 -right-20 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-7">

              <div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500" />

                  <span className="text-xs text-zinc-400">
                    CREATOR STUDIO
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Welcome back,
                  <span className="text-zinc-500"> Creator.</span>
                </h2>

                <p className="text-zinc-500 mt-4 max-w-xl leading-relaxed">
                  Turn your stories into something people can discover.
                  Upload your next film, documentary or creative work.
                </p>

              </div>

             <Link
  href="/creator/upload"
  className="shrink-0 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-4 rounded-xl font-semibold transition shadow-lg shadow-red-900/20"
>
  <Plus size={20} />
  Upload New Work
</Link>

            </div>

          </section>

          {/* Stats */}
          <section className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-10">

            <StatCard
              icon={<Film size={20} />}
              label="Total Movies"
              value="12"
              change="+3 this month"
            />

            <StatCard
              icon={<DollarSign size={20} />}
              label="Total Sales"
              value="$840"
              change="+18.4%"
            />

            <StatCard
              icon={<Eye size={20} />}
              label="Total Views"
              value="24.8K"
              change="+12.6%"
            />

            <StatCard
              icon={<TrendingUp size={20} />}
              label="Earnings"
              value="$620"
              change="+21.8%"
            />

          </section>

          {/* Content Header */}
          <div className="flex items-center justify-between mb-5">

            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                Your Latest Works
              </h3>

              <p className="text-sm text-zinc-600 mt-1">
                Recently uploaded creative content
              </p>
            </div>

            <button className="text-sm text-red-500 hover:text-red-400 transition">
              View All →
            </button>

          </div>

          {/* Movies */}
          <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12">

            <MovieCard
              title="The Last Journey"
              type="Short Film"
              duration="18:42"
              price="$12"
              image="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900"
            />

            <MovieCard
              title="Mountain Stories"
              type="Documentary"
              duration="24:18"
              price="$8"
              image="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900"
            />

            <MovieCard
              title="Beyond The Horizon"
              type="Short Film"
              duration="12:36"
              price="$10"
              image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900"
            />

          </section>

          {/* Bottom Grid */}
          <section className="grid lg:grid-cols-2 gap-5">

            {/* Recent Sales */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">

              <div className="flex items-center justify-between mb-6">

                <div>
                  <h3 className="font-bold text-lg">
                    Recent Sales
                  </h3>

                  <p className="text-xs text-zinc-600 mt-1">
                    Your latest transactions
                  </p>
                </div>

                <Wallet
                  size={20}
                  className="text-red-500"
                />

              </div>

              <SaleRow
                title="The Last Journey"
                buyer="Customer"
                amount="+$12"
              />

              <SaleRow
                title="Mountain Stories"
                buyer="Customer"
                amount="+$8"
              />

              <SaleRow
                title="Beyond The Horizon"
                buyer="Customer"
                amount="+$10"
              />

            </div>

            {/* Quick Actions */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">

              <h3 className="font-bold text-lg">
                Quick Actions
              </h3>

              <p className="text-xs text-zinc-600 mt-1 mb-6">
                Manage your creator workspace
              </p>

              <div className="grid grid-cols-2 gap-3">

                <QuickAction
                  icon={<Upload size={19} />}
                  title="Upload Work"
                />

                <QuickAction
                  icon={<Film size={19} />}
                  title="My Movies"
                />

                <QuickAction
                  icon={<BarChart3 size={19} />}
                  title="Analytics"
                />

                <QuickAction
                  icon={<Wallet size={19} />}
                  title="Earnings"
                />

              </div>

            </div>

          </section>

        </div>

      </section>

    </main>
  );
}


/* Navigation Item */

function NavItem({ icon, text, active }) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm
        transition
        ${
          active
            ? "bg-red-600 text-white shadow-lg shadow-red-900/20"
            : "text-zinc-500 hover:text-white hover:bg-zinc-900"
        }
      `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}


/* Stats */

function StatCard({ icon, label, value, change }) {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 md:p-6">

      <div className="flex items-center justify-between mb-5">

        <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
          {icon}
        </div>

        <span className="text-[11px] text-green-500">
          {change}
        </span>

      </div>

      <p className="text-sm text-zinc-500">
        {label}
      </p>

      <h3 className="text-2xl md:text-3xl font-bold mt-1">
        {value}
      </h3>

    </div>
  );
}


/* Movie Card */

function MovieCard({ title, type, duration, price, image }) {
  return (
    <div className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition">

      <div className="relative aspect-video overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <button className="absolute left-4 bottom-4 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
          <Play size={17} fill="currentColor" />
        </button>

        <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs">
          {duration}
        </span>

      </div>

      <div className="p-5">

        <div className="flex items-center justify-between mb-2">

          <span className="text-[11px] uppercase tracking-wider text-red-500 font-semibold">
            {type}
          </span>

          <span className="text-sm font-bold">
            {price}
          </span>

        </div>

        <h4 className="font-bold text-lg">
          {title}
        </h4>

        <div className="flex items-center justify-between mt-4 text-xs text-zinc-600">
          <span>Published</span>
          <span>Active</span>
        </div>

      </div>

    </div>
  );
}


/* Sale Row */

function SaleRow({ title, buyer, amount }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-zinc-800 last:border-0">

      <div>
        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="text-xs text-zinc-600 mt-1">
          {buyer}
        </p>
      </div>

      <span className="text-sm font-semibold text-green-500">
        {amount}
      </span>

    </div>
  );
}


/* Quick Action */

function QuickAction({ icon, title }) {
  return (
    <button className="flex items-center gap-3 p-4 rounded-xl bg-black border border-zinc-800 hover:border-red-600 hover:bg-zinc-950 transition text-left">

      <span className="text-red-500">
        {icon}
      </span>

      <span className="text-sm font-medium">
        {title}
      </span>

    </button>
  );
}