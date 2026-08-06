"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/admin/dashboard";
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={login}
        className="bg-zinc-900 p-8 rounded-xl w-[400px]"
      >
        <h1 className="text-white text-3xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-red-600 p-3 rounded text-white">
          Login
        </button>
      </form>
    </main>
  );
}