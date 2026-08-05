"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION 1: PHOTO & BASIC BIO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* PROFILE PHOTO */}
          <div className="flex justify-center">
            <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <Image
                src="/Aboutme.jpg"
                alt="Kisan BK"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* BIO TEXT */}
          <div>
            <span className="text-zinc-500 uppercase tracking-widest text-xs font-semibold">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Visual Storyteller & Film Creator
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              नमस्ते! म <strong className="text-white">किसान बि क   (Kisan BK)</strong>। म फिल्म निर्माण, डकुमेन्ट्री सर्जक र भिडियो सम्पादकको रूपमा दृश्य कथा कथन (Visual Storytelling) मा विगत लामो समयदेखि सक्रिय छु।
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              समाजका वास्तविक कथाहरू, सांस्कृतिक सम्पदा, राजनीतिक विश्लेषणात्मक दृश्यहरू र सिनेमेटिक प्रस्तुतिलाई पर्दामा उतार्नु मेरो मुख्य उद्देश्य हो।
            </p>

            <div className="flex gap-4">
              <Link 
                href="/contact-us" 
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition"
              >
                सम्पर्क गर्नुहोस्
              </Link>
              <a 
                href="#works" 
                className="border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900 transition"
              >
                मेरो कार्य क्षेत्र
              </a>
            </div>
          </div>

        </div>

        <hr className="border-zinc-800 my-16" />

        {/* SECTION 2: MY WORK & EXPERTISE (मेरो कामहरू) */}
        <div id="works" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            मेरो कार्य क्षेत्र (What I Do)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl">
              <div className="text-3xl mb-4">🎥</div>
              <h3 className="text-xl font-bold mb-2">Documentary & Film</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                सामाजिक विषयवस्तु, सांस्कृतिक इतिहास र वास्तविक जीवनमा आधारित डकुमेन्ट्री तथा लघु चलचित्र निर्माण।
              </p>
            </div>

            <div className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl">
              <div className="text-3xl mb-4">✂️</div>
              <h3 className="text-xl font-bold mb-2">Cinematic Editing</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                व्यापारिक, प्रोमोसनल, real-estate र सिनेमेटिक स्तरको व्यावसायिक भिडियो एडिटिङ र कलर ग्रेडिङ।
              </p>
            </div>

            <div className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl">
              <div className="text-3xl mb-4">🎙️</div>
              <h3 className="text-xl font-bold mb-2">Visual Reporting</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                राजनीतिक विश्लेषण, खबर र सामाजिक मुद्दाहरूमा आधारित रिपोर्टिङ र डिजिटल मिडिया सामग्री।
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: ASSOCIATIONS / PROJECTS (म जोडिएका काम/संस्थाहरू) */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">
            म जोडिएका अभियान तथा प्रोजेक्टहरू
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="p-6 bg-zinc-900/30 border border-zinc-800/80 rounded-xl flex gap-4 items-start">
              <div className="bg-zinc-800 p-3 rounded-lg text-2xl">🏛️</div>
              <div>
                <h3 className="text-lg font-bold text-white">सुन्दर नेपाल (Sundar Nepal)</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  सामाजिक रूपान्तरण, संस्कृति संरक्षण र ग्रामीण क्षेत्रको विकासका लागि सञ्चालित अभियान तथा संस्थागत पहल।
                </p>
              </div>
            </div>

            <div className="p-6 bg-zinc-900/30 border border-zinc-800/80 rounded-xl flex gap-4 items-start">
              <div className="bg-zinc-800 p-3 rounded-lg text-2xl">📺</div>
              <div>
                <h3 className="text-lg font-bold text-white">आज के छ (Aaja Kxa)</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  समसामयिक मुद्दा, राजनीतिक बहस र सामाजिक यथार्थ प्रस्तुत गर्ने डिजिटल भिडियो प्लेटफर्म।
                </p>
              </div>
            </div>

          </div>
        </div>
<section className="max-w-7xl mx-auto px-8 pt-36 pb-24">
  <div className="text-center mb-14">
    <p className="text-zinc-500 uppercase tracking-[0.3em]">
      Featured Projects
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mt-4">
      My Projects
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    
{/* Card 1 */}
<div className="group relative rounded-2xl overflow-hidden h-[500px] border border-zinc-800 hover:border-red-500 transition-all duration-500 cursor-pointer">

  <img
    src="/2016.jpg"
    alt="Creative Beginnings"
    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

  <div className="absolute bottom-0 left-0 p-6 z-10">

    <span className="text-red-400 text-sm tracking-[0.3em] uppercase">
      2070–2074
    </span>

    <h3 className="text-3xl font-bold mt-2 text-white">
      Creative Beginnings
    </h3>

    <p className="text-zinc-300 mt-3">
      Social Work • Film Production • Serial Production
    </p>

    <div className="mt-5 text-red-400 font-medium">
      View Journey →
    </div>

  </div>

</div>
{/* Card 2 */}
<div className="group relative rounded-2xl overflow-hidden h-[500px] border border-zinc-800 hover:border-red-500 transition-all duration-500 cursor-pointer">

  <img
    src="/2022.jpg"
    alt="Media & Public Voice"
    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

  <div className="absolute bottom-0 left-0 p-6 z-10">

    <span className="text-red-400 text-sm tracking-[0.3em] uppercase">
      2074–2078
    </span>

    <h3 className="text-3xl font-bold mt-2 text-white">
      Media & Public Voice
    </h3>

    <p className="text-zinc-300 mt-3">
      Reporting • Public Awareness • Media Engagement
    </p>

    <div className="mt-5 text-red-400 font-medium">
      View Journey →
    </div>

  </div>

</div>
 
 {/* Card 3 */}
<div className="group relative rounded-2xl overflow-hidden h-[500px] border border-zinc-800 hover:border-red-500 transition-all duration-500 cursor-pointer">

  <img
    src="/2026.jpg"
    alt="Visual Storytelling Era"
    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

  <div className="absolute bottom-0 left-0 p-6 z-10">

    <span className="text-red-400 text-sm tracking-[0.3em] uppercase">
      2078–Present
    </span>

    <h3 className="text-3xl font-bold mt-2 text-white">
      Visual Storytelling Era
    </h3>

    <p className="text-zinc-300 mt-3">
      Documentary • Drone Films • Video Editing • Visual Storytelling
    </p>

    <div className="mt-5 text-red-400 font-medium">
      View Journey →
    </div>

  </div>

</div>

  </div>
</section>
      </div>
    </main>
  );
}
