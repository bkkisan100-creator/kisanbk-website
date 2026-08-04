"use client";

import { useState, useEffect } from "react";
import LiveInfo from "./components/LiveInfo";
import dynamic from "next/dynamic";

const WelcomeBanner = dynamic(
  () => import("./components/WelcomeBanner"),
  { ssr: false }
);

// १. भाषा अनुसारको टेक्स्ट परिभाषित गर्ने
const translations = {
  en: {
    heroTitleLine1: "Cinematic",
    heroTitleLine2: "Visual Storyteller",
    heroSubTitle: "Documentary | Film | Editing",
    viewWork: "View Work",
    contactMe: "Contact Me",
    aboutMe: "About Me",
    aboutPara: "I'm Kisan BK, a filmmaker, documentary creator and video editor passionate about visual storytelling.",
    featuredProjects: "Featured Projects",
    docuFilm: "Documentary Film",
    docuDesc: "Social and cultural documentary storytelling.",
    polyRep: "Political Reporting",
    polyDesc: "News, analysis and visual reporting.",
    vidEdit: "Video Editing",
    editDesc: "Commercial and cinematic editing work.",
    gallery: "Gallery",
    contact: "Contact",
    connect: "Let's connect and collaborate on your next project.",
    whatsapp: "Direct Chat",
    connectTitle: "Connect",
    watch: "Watch Videos"
  },
  ne: {
    heroTitleLine1: "सिनेमेटिक",
    heroTitleLine2: "दृश्य कथाकार",
    heroSubTitle: "डकुमेन्ट्री | फिल्म | सम्पादन",
    viewWork: "काम हेर्नुहोस्",
    contactMe: "मलाई सम्पर्क गर्नुहोस्",
    aboutMe: "मेरो बारेमा",
    aboutPara: "म किसान बीके, एक फिल्म निर्माता, डकुमेन्ट्री सर्जक र भिडियो सम्पादक हुँ, जो दृश्य कथा कथनमा भावुक छ।",
    featuredProjects: "विशेष परियोजनाहरू",
    docuFilm: "डकुमेन्ट्री फिल्म",
    docuDesc: "सामाजिक र सांस्कृतिक डकुमेन्ट्री कथा कथन।",
    polyRep: "राजनीतिक रिपोर्टिङ",
    polyDesc: "समाचार, विश्लेषण र दृश्य रिपोर्टिङ।",
    vidEdit: "भिडियो सम्पादन",
    editDesc: "व्यापारिक र सिनेमेटिक सम्पादन कार्य।",
    gallery: "ग्यालरी",
    contact: "सम्पर्क",
    connect: "तपाईंको अर्को परियोजनामा जडान र सहकार्य गरौं।",
    whatsapp: "सिधा कुराकानी",
    connectTitle: "जोडिनुहोस्",
    watch: "भिडियो हेर्नुहोस्"
  }
};

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  // 🔴 भाषा स्टेट: डिफल्ट 'en'
  const [locale, setLocale] = useState('en');

  // २. अनुवादित टेक्स्टहरू प्राप्त गर्ने
  const t = translations[locale];

  // (पुरानो Dim इफेक्टको स्टेट)
  const [isDimmed, setIsDimmed] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // भाषा सेटिङ लोकल स्टोरेजबाट लिने (यदि प्रयोगकर्ताले पहिले नै सेट गरेको छ भने)
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      setLocale(savedLocale);
    }

    // (पुरानो Timers)
    const dimTimer = setTimeout(() => {
      setIsDimmed(true);
    }, 3000);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 4500);

    return () => {
      clearTimeout(dimTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-32">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          
          {/* FADING PROFILE PHOTO */}
          {shouldRender && (
            <div
              className={`transition-all duration-1000 ease-in-out transform ${
                isDimmed
                  ? "opacity-0 scale-90 blur-md brightness-50 max-h-0 mb-0"
                  : "opacity-100 scale-100 blur-0 brightness-100 max-h-52 mb-6"
              }`}
            >
              <div className="relative group cursor-pointer">
                {/* Background Glow */}
                <div
                  className={`absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-opacity duration-1000 ${
                    isDimmed ? "opacity-0" : "opacity-75 blur-lg animate-pulse"
                  }`}
                ></div>

                {/* Photo Frame */}
            <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full p-1 bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl overflow-hidden">
                  <img
                    src="/hero-profile.png"
                    alt="Kisan BK Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 🔴 भाषा अनुसार टेक्स्ट फेर्ने */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight transition-all duration-700">
            {t.heroTitleLine1}
            <br />
            {t.heroTitleLine2}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300">
            {t.heroSubTitle}
          </p>

          <div className="mt-8 flex justify-center gap-5">
            <a
              href="#projects"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              {t.viewWork}
            </a>

            <a
              href="#contact"
              className="border border-white px-8 py-3 rounded-full hover:bg-white/10 transition"
            >
              {t.contactMe}
            </a>
          </div>
        </div>
      </section>
<WelcomeBanner />
{/* ABOUT */}
<section
  id="about"
  className="relative max-w-7xl mx-auto px-8 py-32 overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/10 blur-[120px] rounded-full"></div>

  <div className="grid lg:grid-cols-2 gap-20 items-center">

{/* LEFT PHOTO */}
<div className="flex justify-center">

  <div className="w-[400px] h-[500px] rounded-[0px] bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 p-[3px] shadow-[0_0_40px_rgba(255,215,0,0.35)]">

    <div className="w-full h-full rounded-[0px] overflow-hidden bg-black flex items-center justify-center">

     <img
  src="/about.png"
  alt="Kisan BK"
  className="w-[710px] h-[1500px] object-contain hover:scale-105 transition-all duration-500"
/>

    </div>

  </div>

</div>

    {/* RIGHT TEXT */}
    <div>

      <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-[35px] p-10">

        <p className="uppercase tracking-[6px] text-yellow-500 text-sm mb-3">
          {t.aboutMe}
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Hello, I'm
          <span className="text-yellow-500"> Kisan BK</span>
        </h2>

        <p className="text-gray-300 leading-9 text-lg mb-6">
          I am a passionate <span className="text-yellow-500">Visual Storyteller</span>,
          Filmmaker, Documentary Creator and Video Editor dedicated to creating
          cinematic stories that inspire people and preserve real-life moments.
        </p>

        <p className="text-gray-400 leading-9 mb-8">
          मेरो उद्देश्य वास्तविक कथा, संस्कृति, समाज र मानवीय भावनालाई
          अन्तर्राष्ट्रिय स्तरको सिनेम्याटिक प्रस्तुतीकरणमार्फत दर्शकमाझ
          पुर्‍याउनु हो। चलचित्र, डकुमेन्ट्री, भिडियो सम्पादन र दृश्य कथा
          निर्माणमा निरन्तर सक्रिय छु।
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">

          <div>
            <h3 className="text-3xl font-bold text-yellow-500">
              7+
            </h3>
            <p className="text-gray-400 text-sm">
              Years
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-500">
              100+
            </h3>
            <p className="text-gray-400 text-sm">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-500">
              50+
            </h3>
            <p className="text-gray-400 text-sm">
              Clients
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <a
            href="/contact-us"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold duration-300"
          >
            Contact Me
          </a>

          <a
            href="/cv/KisanBK-CV.pdf"
            className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full duration-300"
          >
            Download CV
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-1 py-5"
      >
        <h2 className="text-4xl font-bold mb-10">
          {t.featuredProjects}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div
            onClick={() => {
              setVideoSrc("/Photos/videos/documentary.mp4");
              setShowVideo(true);
            }}
            className="border border-white/10 p-6 rounded-xl cursor-pointer hover:border-white/40 transition"
          >
            <img
              src="/Photos/project1.jpg"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-2xl font-semibold">
              {t.docuFilm}
            </h3>

            <p className="mt-4 text-gray-400">
              {t.docuDesc}
            </p>
          </div>

          <div
            onClick={() => {
              setVideoSrc("/Photos/videos/political.mp4");
              setShowVideo(true);
            }}
            className="border border-white/10 p-6 rounded-xl cursor-pointer hover:border-white/40 transition"
          >
            <img
              src="/Photos/project2.png"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-2xl font-semibold">
              {t.polyRep}
            </h3>

            <p className="mt-4 text-gray-400">
              {t.polyDesc}
            </p>
          </div>

          <div
            onClick={() => {
              setVideoSrc("/Photos/videos/editing.mp4");
              setShowVideo(true);
            }}
            className="border border-white/10 p-6 rounded-xl cursor-pointer hover:border-white/40 transition"
          >
            <img
              src="/Photos/project3.png"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-2xl font-semibold">
              {t.vidEdit}
            </h3>

            <p className="mt-4 text-gray-400">
              {t.editDesc}
            </p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="max-w-6xl mx-auto px-8 py-32"
      >
        <h2 className="text-4xl font-bold mb-10">
          {t.gallery}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <img
            src="/Photos/gallery1.jpg"
            alt="Gallery 1"
            onClick={() => setSelectedImage("/Photos/gallery1.jpg")}
            className="w-full h-72 object-cover rounded-xl hover:scale-105 transition duration-300 cursor-pointer"
          />
          <img
            src="/Photos/gallery2.jpg"
            alt="Gallery 2"
            className="w-full h-72 object-cover rounded-xl hover:scale-105 transition duration-300 cursor-pointer"
          />

          <img
            src="/Photos/gallery3.jpg"
            alt="Gallery 3"
            className="w-full h-72 object-cover rounded-xl hover:scale-105 transition duration-300 cursor-pointer"
          />

        </div>
      </section>

{/* 🎬 SHOWREEL VIDEO */}
<section className="max-w-6xl mx-auto px-8 my-12">
  <div className="overflow-hidden rounded-[30px] shadow-2xl">

    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-auto object-cover"
    >
      <source src="/ads.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  </div>
</section>

{/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold mb-3 text-white">{t.contact}</h2>
        <p className="text-gray-400 text-lg mb-8">
          {t.connect}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Email */}
          <a
            href="mailto:bkkisan100@gmail.com"
            className="flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-blue-500 hover:bg-zinc-800/80 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
          >
            {/* Logo Container with Redesigned Shape and Brand Color */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300 shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="overflow-hidden">
              <span className="block text-xs text-zinc-500 uppercase tracking-wider font-semibold">Email</span>
              <span className="text-sm font-medium text-white truncate block">bkkisan100@gmail.com</span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9779847626447"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-emerald-500 hover:bg-zinc-800/80 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
          >
            {/* Logo Container with Redesigned Shape and Brand Color */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 16.5c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.24-8.22 8.24z"/>
              </svg>
            </div>
            <div>
              <span className="block text-xs text-zinc-500 uppercase tracking-wider font-semibold">WhatsApp</span>
              <span className="text-sm font-medium text-white">{t.whatsapp}</span>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/people/आज-के-छ/100064481604468/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-blue-600 hover:bg-zinc-800/80 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
          >
            {/* Logo Container with Redesigned Shape and Brand Color */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-600/10 border border-blue-600/20 text-blue-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300 shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </div>
            <div>
              <span className="block text-xs text-zinc-500 uppercase tracking-wider font-semibold">Facebook</span>
              <span className="text-sm font-medium text-white">{t.connectTitle}</span>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@AajaKxa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-red-600 hover:bg-zinc-800/80 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
          >
            {/* Logo Container with Redesigned Shape and Brand Color */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-600/10 border border-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all duration-300 shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z"/>
              </svg>
            </div>
            <div>
              <span className="block text-xs text-zinc-500 uppercase tracking-wider font-semibold">YouTube</span>
              <span className="text-sm font-medium text-white">{t.watch}</span>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <svg className="w-4 h-4 text-red-500 shrink-0 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Jaljala Rural Municipality - 06, Parbat, Gandaki Province, Nepal</span>
          </div>
          <div className="text-zinc-500 text-sm font-medium">
            ©Kisanbk2026
          </div>
        </div>
      </footer>

      {showVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="bg-black p-4 rounded-xl w-[90%] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="text-white text-2xl float-right mb-2"
            >
              ✕
            </button>

            <video
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </main>
  );
}