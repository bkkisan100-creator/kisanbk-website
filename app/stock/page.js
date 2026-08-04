export default function StockPage() {

  const whatsappNumber = "97798XXXXXXXX"; // आफ्नो WhatsApp नम्बर राख्नुहोस्


  const media = [
    { src: "/stock/s1.jpeg", title: "Mountain Landscape", type: "photo", price: "$0.50" },
    { src: "/stock/s2.jpeg", title: "Himalayan View", type: "photo", price: "$0.50" },
    { src: "/stock/s3.jpeg", title: "Nature Collection", type: "photo", price: "$0.50" },
    { src: "/stock/s4.jpeg", title: "Cinematic Scene", type: "photo", price: "$0.50" },
    { src: "/stock/s5.jpeg", title: "Nepal Beauty", type: "photo", price: "$0.50" },
    { src: "/stock/s6.jpeg", title: "Travel Photo", type: "photo", price: "$0.50" },
    { src: "/stock/s7.jpeg", title: "Adventure Shot", type: "photo", price: "$0.50" },
    { src: "/stock/s8.jpeg", title: "Premium Collection", type: "photo", price: "$0.50" },


    { src: "/stock/drone1.mp4", title: "Drone Aerial View", type: "video", price: "$5" },
    { src: "/stock/drone2.mp4", title: "Aerial Landscape", type: "video", price: "$5" },
    { src: "/stock/drone3.mp4", title: "Cinematic Drone", type: "video", price: "$5" },
    { src: "/stock/drone4.mp4", title: "Nepal From Sky", type: "video", price: "$5" },
  ];



  return (

    <main className="min-h-screen bg-black text-white px-6 py-20">


      {/* HEADER */}

      <div className="max-w-7xl mx-auto mb-14">

        <h1 className="text-5xl font-bold">
          Stock Media
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Premium cinematic photos and drone footage
        </p>

      </div>



      {/* GRID */}

      <div
      className="
      max-w-7xl mx-auto
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-8
      "
      >


      {media.map((item,index)=>(


        <div
        key={index}
        className="
        bg-zinc-900
        rounded-2xl
        overflow-hidden
        border
        border-zinc-800
        hover:border-white
        transition
        "
        >



          {/* MEDIA */}

          <div className="aspect-video overflow-hidden">


          {
          item.type === "photo" ? (

            <img
            src={item.src}
            alt={item.title}
            className="
            w-full
            h-full
            object-cover
            hover:scale-110
            transition
            duration-500
            "
            />


          ) : (


            <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="
            w-full
            h-full
            object-cover
            "
            />


          )

          }


          </div>




          {/* INFO */}

          <div className="p-5">


            <h2 className="text-xl font-semibold">
              {item.title}
            </h2>


            <p className="text-gray-400 mt-2">
              {item.type === "video" 
              ? "Drone Footage"
              : "Photography"}
            </p>



            <div className="
            flex
            justify-between
            items-center
            mt-6
            ">


              <span className="text-2xl font-bold">
                {item.price}
              </span>



              <a

              href={`https://wa.me/${whatsappNumber}?text=Hello, I want to buy ${item.title} (${item.price})`}

              target="_blank"

              className="
              bg-green-500
              text-white
              px-5
              py-2
              rounded-full
              hover:bg-green-600
              transition
              "

              >

                Buy Now

              </a>
            <a
href="https://wa.me/97798XXXXXXXX?text=Hello"
target="_blank"
className="
bg-red-600
text-white
px-4
py-2
rounded-full
text-sm
font-medium
hover:bg-red-700
transition
duration-300
shadow-lg
"
>
Send Message
</a>



            </div>



          </div>



        </div>


      ))}



      </div>



    </main>

  );

}