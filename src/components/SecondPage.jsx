import React from "react";

const SecondPage = () => {
  return (
    <section className="bg-[#fffefc] w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 py-16 md:px-20 relative overflow-hidden">
      
      {/* Coffee blast decoration */}
      <img
        src="coffee_blast.png"
        alt=""
        className="absolute left-0 bottom-0 w-32 sm:w-40 md:w-72"
      />

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl text-amber-900 mb-4"
          style={{ fontFamily: "Clicker Script" }}
        >
          Discover The Best Coffee
        </h1>

        <p
          className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed"
          style={{ fontFamily: "Playfair Display" }}
        >
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and build your mood. Having a cup of
          real coffee is a richer experience than anything you have tasted
          before.
        </p>

        <button
          className="px-8 py-3 bg-yellow-700 text-white rounded-full
                     hover:bg-yellow-800 transition"
          style={{ fontFamily: "Playfair Display" }}
        >
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="cofee_beans.png"
          alt="coffee beans"
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default SecondPage;
