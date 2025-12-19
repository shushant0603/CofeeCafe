import React, { useState } from "react";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jonny Thomas",
      role: "Project Manager",
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-young-man_1268-21877.jpg",
    },
    {
      id: 2,
      quote:
        "Amazing coffee experience! The quality and taste are outstanding. Highly recommend to all coffee lovers.",
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      image:
        "https://img.freepik.com/free-photo/serene-boy-posing-with-plaid-shirt_1153-822.jpg",
    },
    {
      id: 3,
      quote:
        "Best coffee shop in town. Great ambiance and excellent service. Will definitely come back!",
      name: "Mike Wilson",
      role: "Business Owner",
      image: "user-profile3.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full min-h-[60vh] bg-gradient-to-br from-amber-50 to-white py-20 relative overflow-hidden">
      {/* Decorative Images */}
      <img
        src="coffee_blast.png"
        alt=""
        className="absolute top-0 right-0 w-40 md:w-96 -scale-x-100 "
      />
      <img
        src="coffee_blast.png"
        alt=""
        className="absolute bottom-0 left-0 w-40 md:w-96 "
      />

      {/* Title */}
      <div className="text-center mb-16 relative z-10 px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl text-amber-900 mb-4"
          style={{ fontFamily: "Clicker Script" }}
        >
          Our coffee perfection feedback
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Our customers have amazing things to say about us
        </p>
      </div>

      {/* Card */}
      <div className="relative z-10 flex justify-center px-4">
        <div className="relative bg-amber-50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl max-w-2xl w-full min-h-[420px] flex flex-col">
          {/* Quote mark */}
          <div className="text-6xl md:text-7xl text-amber-900 mb-4">“</div>

          {/* Quote text */}
          <div className="flex-1 flex items-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              {testimonials[currentIndex].quote}
            </p>
          </div>

          {/* User */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-yellow-400 bg-center bg-cover"
              style={{
                backgroundImage: `url(${testimonials[currentIndex].image})`,
              }}
            />
            <div className="text-center">
              <h3
                className="text-xl md:text-2xl text-amber-900"
                style={{ fontFamily: "Clicker Script" }}
              >
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          {/* Desktop Navigation */}
<button
  onClick={handlePrev}
  className="hidden md:flex absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 
             w-12 h-12 bg-yellow-400 rounded-xl items-center justify-center text-xl
             hover:bg-yellow-500 transition"
>
  ←
</button>

<button
  onClick={handleNext}
  className="hidden md:flex absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 
             w-12 h-12 bg-yellow-400 rounded-xl items-center justify-center text-xl
             hover:bg-yellow-500 transition"
>
  →
</button>
{/* Mobile Navigation */}
<div className="flex md:hidden justify-center gap-6 mt-8">
  <button
    onClick={handlePrev}
    className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-xl
               hover:bg-yellow-500 transition"
  >
    ←
  </button>

  <button
    onClick={handleNext}
    className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-xl
               hover:bg-yellow-500 transition"
  >
    →
  </button>
</div>


        </div>
      </div>
    </section>
  );
};

export default Feedback;
