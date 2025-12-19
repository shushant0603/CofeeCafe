import React, { useRef } from "react";

const FourthPage = () => {
  const scrollRef = useRef(null);

  const coffeeCards = [
    {
      id: 1,
      name: "Cappuccino",
      description: "Coffee 50% | Milk 50%",
      image: "coffee-beans_logo.png",
    },
    {
      id: 2,
      name: "Chai Latte",
      description: "Coffee 40% | Milk 60%",
      image: "coffee-beans_logo.png",
    },
    {
      id: 3,
      name: "Macchiato",
      description: "Coffee 60% | Milk 40%",
      image: "coffee-beans_logo.png",
    },
    {
      id: 4,
      name: "Expresso",
      description: "Coffee 100%",
      image: "coffee-beans_logo.png",
    },
  ];

  const scrollNext = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#fffefc] w-full min-h-screen px-6 py-16 md:px-20 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl text-amber-900 mb-4"
          style={{ fontFamily: "Clicker Script" }}
        >
          Why are we Different
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing.
        </p>
      </div>

      {/* ================= MOBILE : ONE CARD PER SCROLL ================= */}
      <div className="md:hidden relative">
        <div
          ref={scrollRef}
          className="
            flex overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth
            no-scrollbar
          "
        >
          {coffeeCards.map((card) => (
            <div
              key={card.id}
              className="min-w-full snap-center px-4"
            >
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-32 h-32 object-contain mb-4"
                />
                <h3
                  className="text-xl text-amber-900 mb-2"
                  style={{ fontFamily: "Clicker Script" }}
                >
                  {card.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 bg-yellow-700 text-white rounded-full text-xl hover:bg-yellow-800 transition"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 bg-yellow-700 text-white rounded-full text-xl hover:bg-yellow-800 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* ================= DESKTOP : GRID ================= */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {coffeeCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center
                       hover:shadow-xl hover:-translate-y-1 transition"
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-36 h-36 object-contain mb-6"
            />
            <h3
              className="text-2xl text-amber-900 mb-2"
              style={{ fontFamily: "Clicker Script" }}
            >
              {card.name}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      {/* ================= CTA ================= */}
<div className="mt-20">
  <div className="
    bg-amber-900/5
    border border-amber-200
    rounded-3xl
    px-6 py-10 md:px-16 md:py-14
    text-center
    max-w-3xl
    mx-auto
  ">
    <h2
      className="text-3xl sm:text-4xl md:text-5xl text-amber-900 mb-4"
      style={{ fontFamily: "Clicker Script" }}
    >
      Great ideas start with great coffee
    </h2>

    <p className="text-base sm:text-lg text-gray-600 mb-8">
      Let us help you discover flavours that fuel creativity and productivity.
    </p>

    <button
      className="
        px-10 py-4
        bg-yellow-700
        text-white
        rounded-full
        text-lg
        font-semibold
        hover:bg-yellow-800
        hover:scale-105
        transition-all
      "
      style={{ fontFamily: "Playfair Display" }}
    >
      Join Us Today
    </button>
  </div>
</div>

    </section>
  );
};

export default FourthPage;
