import React, { useRef } from "react";

const Thirdpage = () => {
  const scrollRef = useRef(null);

  const coffeeCards = [
    {
      id: 1,
      name: "Cappuccino",
      description: "Coffee 50% | Milk 50%",
      price: "$8.50",
      image: "cofee_beans.png",
    },
    {
      id: 2,
      name: "Chai Latte",
      description: "Coffee 40% | Milk 60%",
      price: "$8.50",
      image: "cofee_beans.png",
    },
    {
      id: 3,
      name: "Macchiato",
      description: "Coffee 60% | Milk 40%",
      price: "$8.50",
      image: "cofee_beans.png",
    },
    {
      id: 4,
      name: "Expresso",
      description: "Coffee 100%",
      price: "$8.50",
      image: "cofee_beans.png",
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
    <section className="bg-[#fffefc] w-full min-h-[80vh] flex flex-col items-center gap-12 px-6 py-16 md:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl mb-4 text-amber-900"
          style={{ fontFamily: "Clicker Script" }}
        >
          Enjoy a new blend of coffee style
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing.
        </p>
      </div>

      {/* ================= MOBILE : ONE CARD PER SCROLL ================= */}
      <div className="md:hidden w-full relative">
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
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-32 h-32 object-contain mb-4"
                />

                <h3
                  className="text-2xl text-amber-900 mb-2"
                  style={{ fontFamily: "Clicker Script" }}
                >
                  {card.name}
                </h3>

                <p className="text-sm text-gray-600 text-center mb-3">
                  {card.description}
                </p>

                <p className="text-xl font-bold text-yellow-700 mb-4">
                  {card.price}
                </p>

                <button className="px-6 py-2 bg-yellow-700 text-white rounded-full hover:bg-yellow-800 transition">
                  Order Now
                </button>
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
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {coffeeCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center
                       hover:shadow-xl hover:-translate-y-1 transition"
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-40 h-40 object-contain mb-4"
            />

            <h3
              className="text-2xl text-amber-900 mb-2"
              style={{ fontFamily: "Clicker Script" }}
            >
              {card.name}
            </h3>

            <p className="text-sm text-gray-600 mb-3 text-center">
              {card.description}
            </p>

            <p className="text-xl font-bold text-yellow-700 mb-4">
              {card.price}
            </p>

            <button className="px-6 py-2 bg-yellow-700 text-white rounded-full hover:bg-yellow-800 transition">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Thirdpage;
