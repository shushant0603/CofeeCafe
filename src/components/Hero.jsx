import React from "react";

const Hero = () => {
  return (
    <div className="w-screen h-[70vh] md:h-screen relative overflow-hidden">
      
      {/* Background Image */}
      <img
        src="coffee_image.png"
        alt="Hero Background"
        className="w-full h-full object-cover object-right absolute inset-0"
      />

      {/* Blackish Overlay (lighter) */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start z-10 px-6 md:px-20">
        <div className="text-white max-w-xl">
          
          {/* Small heading */}
          <h3
            className="text-xs sm:text-sm mb-2 opacity-90"
            style={{ fontFamily: "Playfair Display" }}
          >
            We have got your morning covered with
          </h3>

          {/* Main Hero Word */}
          <h1
            className="
              text-[clamp(90px,35vw,240px)]
              leading-[0.9]
              md:leading-none
              mb-2 md:mb-4
            "
            style={{ fontFamily: "Clicker Script" }}
          >
            Coffee
          </h1>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-lg opacity-90 max-w-md"
            style={{ fontFamily: "Playfair Display" }}
          >
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>

          {/* CTA Button */}
          <button
            className="
              px-6 md:px-10
              py-2 md:py-4
              mt-6 md:mt-10
              bg-yellow-700
              text-white
              rounded-full
              text-sm md:text-base
              hover:bg-yellow-800
              transition
            "
            style={{ fontFamily: "Playfair Display" }}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
