"use client";

import { useState } from "react";

export default function AiToolsPage() {

  const [images, setImages] = useState({});
  const [progress, setProgress] = useState({});
  const [result, setResult] = useState({});


  const uploadImage = (tool, e) => {

    const file = e.target.files[0];

    if (!file) return;


    const url = URL.createObjectURL(file);


    setImages(prev => ({
      ...prev,
      [tool]: url
    }));


    setProgress(prev => ({
      ...prev,
      [tool]:0
    }));

  };



  const processImage = (tool) => {

    let value = 0;


    const timer = setInterval(()=>{

      value += 10;


      setProgress(prev=>({
        ...prev,
        [tool]:value
      }));


      if(value >=100){

        clearInterval(timer);


        setResult(prev=>({
          ...prev,
          [tool]:images[tool]
        }));

      }


    },150);

  };




  const tools = [

    {
      id:"enhance",
      title:"✨ Image Enhancer",
      desc:"Improve image quality and details.",
      button:"Enhance Image"
    },


    {
      id:"remove",
      title:"🪄 Background Remover",
      desc:"Remove image background automatically.",
      button:"Remove Background"
    },


    {
      id:"upscale",
      title:"🚀 AI Upscaler",
      desc:"Convert image into 2x HD quality.",
      button:"2x HD Convert"
    }

  ];





  return (

    <main className="min-h-screen bg-black text-white pt-32 px-6 md:px-16">


      <div className="text-center mb-16">

        <h1 className="text-6xl font-bold">
          AI Tools
        </h1>

        <p className="text-zinc-400 mt-4">
          Free AI powered image tools
        </p>

      </div>





      <div className="grid md:grid-cols-3 gap-8">


      {tools.map(tool=>(


        <div
        key={tool.id}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
        >


          <h2 className="text-2xl font-bold mb-3">
            {tool.title}
          </h2>


          <p className="text-zinc-400 mb-6">
            {tool.desc}
          </p>





  <label
className="block border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center cursor-pointer"
>


            📷 Upload Image


            <input

            type="file"

            accept="image/*"

            hidden

            onChange={(e)=>uploadImage(tool.id,e)}

            />


          </label>






          {images[tool.id] && (

           <img
src={images[tool.id]}
alt="preview"
className="mt-6 rounded-xl w-full"
/>

          )}






          {progress[tool.id] > 0 && (

            <div className="mt-5">


              <p className="mb-2">
                Processing {progress[tool.id]}%
              </p>



              <div className="h-3 bg-zinc-800 rounded-full">


                <div

                className="h-3 bg-white rounded-full transition-all"

                style={{
                  width:`${progress[tool.id]}%`
                }}

                />


              </div>


            </div>

          )}







    <button
  onClick={() => processImage(tool.id)}
  className="mt-6 w-full bg-white text-black py-3 rounded-xl font-bold"
>
  {tool.button}
</button>






          {result[tool.id] && (

            <a

            href={result[tool.id]}

            download="ai-result.png"

            className="
            block
            mt-4
            text-center
            bg-zinc-800
            py-3
            rounded-xl
            "

            >

              Download Result

            </a>

          )}



        </div>


      ))}


      </div>



    </main>

  );

}