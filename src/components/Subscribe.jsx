import React from "react";

const Subscribe = () => {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(Rectangle.png)", // image link yahan daalna
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* BLACKISH OVERLAY */}
   <div className="absolute inset-0 bg-black/40"></div>


      {/* Center Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-8"
          style={{ fontFamily: "Clicker Script" }}
        >
          Subscribe to get the latest news
        </h1>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="
              flex-1 px-6 py-3
              bg-white text-black
              rounded-lg sm:rounded-l-lg sm:rounded-r-none
              focus:outline-none
            "
          />

          <button
            className="
              px-8 py-3
              bg-yellow-600 text-white font-bold
              rounded-lg sm:rounded-r-lg sm:rounded-l-none
              hover:bg-yellow-700
              transition
            "
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Left pngwing */}
      <img
        src="pngwing.png"
        alt=""
        className="absolute left-0 bottom-0 w-28 sm:w-40 md:w-64 z-10"
      />

      {/* Right pngwing (flipped) */}
      <img
        src="pngwing.png"
        alt=""
        className="absolute right-0 bottom-0 w-28 sm:w-40 md:w-64 z-10 -scale-x-100"
      />
    </section>
  );
};

export default Subscribe;
