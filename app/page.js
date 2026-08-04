"use client";

import { useState, useEffect } from "react";

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-8 py-32"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-8">
              {t.aboutMe}
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              {t.aboutPara}
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/profile.png"
              alt="Kisan BK"
              className="w-80 h-96 object-cover rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-8 py-32"
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

      {/* 📢 ADVERTISEMENT SECTION */}
      <section className="max-w-6xl mx-auto px-8 my-12">
        <div className="w-full bg-zinc-900/60 border border-zinc-800 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-zinc-700 transition-all duration-300">
          
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-zinc-800/80 px-2.5 py-1 rounded-full mb-3">
            Advertisement
          </span>

          <a 
            href="https://your-sponsor-link.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex flex-col items-center justify-center py-4 group"
          >
            <h3 className="text-lg font-semibold text-zinc-300 group-hover:text-white transition-colors">
              Your Ad / Sponsorship Banner Here
            </h3>
            <p className="text-sm text-zinc-500 mt-1">
              Promote your brand or services here. Click to learn more.
            </p>
          </a>

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
            className="flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-zinc-600 hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
          >
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-xl text-zinc-300 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              ✉️
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
            className="flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-zinc-600 hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
          >
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-xl text-zinc-300 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
              💬
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
            className="flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-zinc-600 hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
          >
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-xl text-zinc-300 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
              📘
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
            className="flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-zinc-600 hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
          >
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-xl text-zinc-300 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              ▶️
            </div>
            <div>
              <span className="block text-xs text-zinc-500 uppercase tracking-wider font-semibold">YouTube</span>
              <span className="text-sm font-medium text-white">{t.watch}</span>
            </div>
          </a>
        </div>
      </section>

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