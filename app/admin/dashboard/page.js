"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  FileText,
  User,
  Briefcase,
  Image,
  Video,
  Bot,
  Phone,
  Settings,
  LogOut
} from "lucide-react";
import { supabase } from "../../lib/supabase";


export default function Dashboard() {

  const router = useRouter();


  useEffect(() => {

    async function checkUser() {

      const {
        data: { user }
      } = await supabase.auth.getUser();


      if (!user) {
        router.push("/admin");
      }

    }

    checkUser();

  }, [router]);



  async function logout() {

    await supabase.auth.signOut();

    router.push("/admin");

  }



  const menus = [
    {
      title: "Hero",
      icon: FileText,
      link: "/admin/hero",
      desc: "Edit homepage hero section"
    },
    {
      title: "About",
      icon: User,
      link: "/admin/about",
      desc: "Manage about information"
    },
    {
      title: "Portfolio",
      icon: Briefcase,
      link: "/admin/portfolio",
      desc: "Add and edit projects"
    },
    {
      title: "Gallery",
      icon: Image,
      link: "/admin/gallery",
      desc: "Manage photos"
    },
    {
      title: "Videos",
      icon: Video,
      link: "/admin/videos",
      desc: "Manage videos"
    },
    {
      title: "AI Tools",
      icon: Bot,
      link: "/admin/ai-tools",
      desc: "Manage AI tools"
    },
    {
      title: "Contact",
      icon: Phone,
      link: "/admin/contact",
      desc: "Update contact details"
    },
    {
      title: "Settings",
      icon: Settings,
      link: "/admin/settings",
      desc: "Website settings"
    }
  ];


  return (

    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Welcome, Kisan 👋
        </h1>

        <p className="text-zinc-400 mb-10">
          Manage your website from here
        </p>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {menus.map((item)=>{

            const Icon = item.icon;

            return(
              <Link
                key={item.title}
                href={item.link}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-white transition"
              >

                <Icon size={35} className="mb-4"/>

                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p className="text-sm text-zinc-400 mt-2">
                  {item.desc}
                </p>

              </Link>
            )

          })}

        </div>


        <button
          onClick={logout}
          className="mt-10 flex items-center gap-2 bg-red-600 px-5 py-3 rounded-xl"
        >
          <LogOut size={20}/>
          Logout
        </button>


      </div>

    </main>

  );

}