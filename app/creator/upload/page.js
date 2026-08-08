"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Upload,
  Film,
  Image as ImageIcon,
  Music,
  Video,
  FileVideo,
  FileAudio,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const contentTypes = [
  {
    name: "Movie",
    icon: Film,
    description: "Full-length movie",
  },
  {
    name: "Short Film",
    icon: Film,
    description: "Short cinematic film",
  },
  {
    name: "Documentary",
    icon: Video,
    description: "Documentary content",
  },
  {
    name: "Photo",
    icon: ImageIcon,
    description: "Photography & images",
  },
  {
    name: "Music",
    icon: Music,
    description: "Songs & audio",
  },
];

export default function CreatorUploadPage() {
  const supabase = createClient();

  const [contentType, setContentType] = useState("Movie");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [uploading, setUploading] = useState(false);


  const isPhoto = contentType === "Photo";
  const isMusic = contentType === "Music";

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Header */}
      <header className="h-20 border-b border-zinc-800 bg-[#080808]">
        <div className="max-w-7xl mx-auto h-full px-5 md:px-8 flex items-center justify-between">

          <Link
            href="/creator"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back to Dashboard</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center font-bold">
              N
            </div>

            <span className="font-bold hidden sm:block">
              NCM Studio
            </span>
          </div>

        </div>
      </header>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">

        {/* Heading */}
        <div className="mb-10">

          <p className="text-red-500 text-xs font-bold tracking-[0.2em] mb-3">
            CREATOR STUDIO
          </p>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Upload New Work
          </h1>

          <p className="text-zinc-500 mt-3 max-w-2xl">
            Upload your movies, documentaries, photos or music and sell
            your creative work through NCM Studio.
          </p>

        </div>

        {/* Content Type Selector */}
        <section className="mb-8">

          <label className="block text-sm font-semibold mb-3">
            What are you uploading?
          </label>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

            {contentTypes.map((item) => {
              const Icon = item.icon;
              const active = contentType === item.name;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setContentType(item.name)}
                  className={`
                    text-left p-4 rounded-2xl border transition
                    ${
                      active
                        ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-900/20"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600"
                    }
                  `}
                >
                  <Icon size={23} className="mb-3" />

                  <p className="font-semibold text-sm">
                    {item.name}
                  </p>

                  <p
                    className={`text-[11px] mt-1 ${
                      active ? "text-red-100" : "text-zinc-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </button>
              );
            })}

          </div>

        </section>

        <div className="grid lg:grid-cols-[1fr_340px] gap-7">

          {/* Form */}
          <section className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 md:p-8">

            {/* Title */}
            <div className="mb-6">

              <label className="block text-sm font-semibold mb-2">
                {isPhoto
                  ? "Photo Title"
                  : isMusic
                  ? "Track Title"
                  : "Title"}
              </label>

              <input
                type="text"
                placeholder={
                  isPhoto
                    ? "Enter photo title"
                    : isMusic
                    ? "Enter song or track title"
                    : "Enter your work title"
                }
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-red-500 transition placeholder:text-zinc-700"
              />

            </div>

            {/* Description */}
            <div className="mb-6">

              <label className="block text-sm font-semibold mb-2">
                Description
              </label>

              <textarea
                rows={5}
                placeholder="Tell viewers about your work..."
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-red-500 transition resize-none placeholder:text-zinc-700"
              />

            </div>

            {/* Photo Fields */}
            {isPhoto && (
              <>
                <div className="grid md:grid-cols-2 gap-5 mb-6">

                  <Input
                    label="Category"
                    placeholder="Nature, Portrait, Travel..."
                  />

                  <Input
                    label="Location"
                    placeholder="Optional"
                  />

                </div>

                <div className="grid md:grid-cols-3 gap-5 mb-6">

                  <Input label="Width" placeholder="4000 px" />
                  <Input label="Height" placeholder="6000 px" />
                  <Input label="Format" placeholder="JPG / PNG" />

                </div>
              </>
            )}

            {/* Music Fields */}
            {isMusic && (
              <>
                <div className="grid md:grid-cols-2 gap-5 mb-6">

                  <Input
                    label="Artist"
                    placeholder="Artist name"
                  />

                  <Input
                    label="Genre"
                    placeholder="Folk, Pop, Rock..."
                  />

                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-6">

                  <Input
                    label="Duration"
                    placeholder="04:25"
                  />

                  <Input
                    label="Language"
                    placeholder="Nepali, English..."
                  />

                </div>
              </>
            )}

            {/* Film Fields */}
            {!isPhoto && !isMusic && (
              <div className="grid md:grid-cols-2 gap-5 mb-6">

                <Input
                  label="Duration"
                  placeholder="24:18"
                />

                <Input
                  label="Director"
                  placeholder="Director name"
                />

              </div>
            )}

            {/* Price */}
            <div className="mb-7">

              <label className="block text-sm font-semibold mb-2">
                Price (USD)
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                  $
                </span>

                <input
                  type="number"
                  placeholder="10.00"
                  className="w-full bg-black border border-zinc-800 rounded-xl pl-9 pr-4 py-4 outline-none focus:border-red-500 transition placeholder:text-zinc-700"
                />

              </div>

            </div>

            {/* Upload Files */}

            <div className="space-y-5">

              {/* Photo */}
              {isPhoto && (
                <>
                  <UploadBox
                    icon={<ImageIcon size={25} />}
                    title="Preview Image"
                    description="Upload a preview/thumbnail"
                    accept="JPG, PNG, WEBP"
                  />

                  <UploadBox
                    icon={<ImageIcon size={25} />}
                    title="Full Resolution Photo"
                    description="Upload the original high-resolution image"
                    accept="JPG, PNG, TIFF, WEBP"
                    large
                  />
                </>
              )}

              {/* Music */}
              {isMusic && (
                <>
                  <UploadBox
                    icon={<ImageIcon size={25} />}
                    title="Cover Art"
                    description="Upload album or track artwork"
                    accept="JPG, PNG, WEBP"
                  />

                  <UploadBox
                    icon={<Music size={25} />}
                    title="Audio Preview"
                    description="Upload a short preview of your track"
                    accept="MP3, WAV, M4A"
                  />

                  <UploadBox
                    icon={<FileAudio size={25} />}
                    title="Full Audio"
                    description="Upload the complete original audio"
                    accept="MP3, WAV, FLAC, M4A"
                    large
                  />
                </>
              )}

              {/* Movies */}
              {!isPhoto && !isMusic && (
                <>
                  <UploadBox
                    icon={<ImageIcon size={25} />}
                    title="Thumbnail"
                    description="Upload a cover image for your work"
                    accept="JPG, PNG, WEBP"
                  />

                  <UploadBox
                    icon={<Video size={25} />}
                    title="Trailer"
                    description="Upload a short preview/trailer"
                    accept="MP4, MOV, WEBM"
                  />

                  <UploadBox
                    icon={<FileVideo size={25} />}
                    title="Full Movie"
                    description="Upload the complete video file"
                    accept="MP4, MOV, MKV"
                    large
                  />
                </>
              )}

            </div>

            {/* Buttons */}
            <div className="mt-8 pt-7 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">

              <button
                type="button"
                className="flex-1 py-4 rounded-xl border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 transition font-semibold"
              >
                Save Draft
              </button>

              <button
                type="button"
                className="flex-1 py-4 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold flex items-center justify-center gap-2"
              >
                <Upload size={19} />
                Publish {contentType}
              </button>

            </div>

          </section>

          {/* Right Preview */}
          <aside className="space-y-5">

            {/* Preview */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">

              <h3 className="font-bold text-lg mb-5">
                Listing Preview
              </h3>

              <div className="aspect-video rounded-2xl bg-black border border-zinc-800 flex flex-col items-center justify-center text-center p-5">

                {isPhoto ? (
                  <ImageIcon
                    size={38}
                    className="text-zinc-700 mb-3"
                  />
                ) : isMusic ? (
                  <Music
                    size={38}
                    className="text-zinc-700 mb-3"
                  />
                ) : (
                  <Film
                    size={38}
                    className="text-zinc-700 mb-3"
                  />
                )}

                <p className="text-sm text-zinc-600">
                  {isPhoto
                    ? "Photo preview"
                    : isMusic
                    ? "Music cover preview"
                    : "Video thumbnail preview"}
                </p>

              </div>

              <div className="mt-5">

                <span className="text-[11px] uppercase tracking-wider text-red-500 font-bold">
                  {contentType}
                </span>

                <h4 className="font-bold text-lg mt-1">
                  Your Work Title
                </h4>

                <p className="text-sm text-zinc-600 mt-2">
                  Your listing information will appear here.
                </p>

              </div>

            </div>

            {/* Checklist */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6">

              <h3 className="font-bold mb-5">
                Before Publishing
              </h3>

              <div className="space-y-4">

                <CheckItem text="Choose content type" />
                <CheckItem text="Add title and description" />

                {isPhoto && (
                  <>
                    <CheckItem text="Upload preview image" />
                    <CheckItem text="Upload full-resolution photo" />
                  </>
                )}

                {isMusic && (
                  <>
                    <CheckItem text="Add artist and genre" />
                    <CheckItem text="Upload cover art" />
                    <CheckItem text="Upload audio" />
                  </>
                )}

                {!isPhoto && !isMusic && (
                  <>
                    <CheckItem text="Upload thumbnail" />
                    <CheckItem text="Upload trailer" />
                    <CheckItem text="Upload full movie" />
                  </>
                )}

                <CheckItem text="Set your price" />

              </div>

            </div>

          </aside>

        </div>

      </div>

    </main>
  );
}


/* Input */

function Input({ label, placeholder }) {
  return (
    <div>

      <label className="block text-sm font-semibold mb-2">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-red-500 transition placeholder:text-zinc-700"
      />

    </div>
  );
}


/* Upload Box */

function UploadBox({
  icon,
  title,
  description,
  accept,
  large = false,
}) {
  return (
    <div
      className={`
        border border-dashed border-zinc-700
        bg-black rounded-2xl
        p-5 md:p-6
        hover:border-red-500/60
        transition
        ${large ? "min-h-[180px]" : ""}
      `}
    >

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">

        <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
          {icon}
        </div>

        <div className="flex-1">

          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="text-sm text-zinc-600 mt-1">
            {description}
          </p>

          <p className="text-[11px] text-zinc-700 mt-2">
            {accept}
          </p>

        </div>

        <button
          type="button"
          className="shrink-0 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition text-sm font-semibold"
        >
          Choose File
        </button>

      </div>

    </div>
  );
}


/* Checklist */

function CheckItem({ text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-zinc-500">

      <CheckCircle2
        size={17}
        className="text-zinc-700"
      />

      <span>{text}</span>

    </div>
  );
}