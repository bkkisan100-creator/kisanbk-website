"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function HeroPage() {

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);

  const [profileImage, setProfileImage] = useState("");
  const [backgroundVideo, setBackgroundVideo] = useState("");


  useEffect(() => {
    fetchHero();
  }, []);


  async function fetchHero() {

    const { data } = await supabase
      .from("hero")
      .select("*")
      .single();

    if(data){
      setTitle(data.title || "");
      setSubtitle(data.subtitle || "");
      setProfileImage(data.profile_image || "");
      setBackgroundVideo(data.background_video || "");
    }

  }



  async function uploadFile(file, folder){

    if(!file) return "";

    const fileName = `${folder}-${Date.now()}-${file.name}`;


    const { error } = await supabase.storage
      .from("website")
      .upload(fileName, file);


    if(error){
      alert(error.message);
      return "";
    }


    const { data } = supabase.storage
      .from("website")
      .getPublicUrl(fileName);


    return data.publicUrl;

  }



  async function saveHero(){

    let imageUrl = profileImage;
    let videoUrl = backgroundVideo;


    if(photo){
      imageUrl = await uploadFile(photo,"profile");
    }


    if(video){
      videoUrl = await uploadFile(video,"hero-video");
    }



    const { data } = await supabase
      .from("hero")
      .select("id")
      .single();



    if(data){

      await supabase
      .from("hero")
      .update({
        title,
        subtitle,
        profile_image:imageUrl,
        background_video:videoUrl
      })
      .eq("id",data.id);


    }else{


      await supabase
      .from("hero")
      .insert({
        title,
        subtitle,
        profile_image:imageUrl,
        background_video:videoUrl
      });


    }


    alert("Hero Updated Successfully ✅");

  }



  return (

    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-3xl mx-auto">


        <h1 className="text-4xl font-bold mb-8">
          Hero Editor
        </h1>


        <input
        className="w-full p-3 bg-zinc-900 rounded mb-5"
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />


        <textarea
        className="w-full p-3 bg-zinc-900 rounded mb-5"
        placeholder="Subtitle"
        value={subtitle}
        onChange={(e)=>setSubtitle(e.target.value)}
        />


        <label>
          Profile Photo
        </label>

        <input
        type="file"
        accept="image/*"
        className="block mt-2 mb-5"
        onChange={(e)=>setPhoto(e.target.files[0])}
        />



        <label>
          Background Video
        </label>

        <input
        type="file"
        accept="video/*"
        className="block mt-2 mb-5"
        onChange={(e)=>setVideo(e.target.files[0])}
        />



        <button
        onClick={saveHero}
        className="bg-red-600 px-6 py-3 rounded-xl"
        >
          Save Hero
        </button>


      </div>

    </main>

  );

}