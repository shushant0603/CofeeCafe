import React, { useState } from 'react'

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      name: "Jonny Thomas",
      role: "Project Manager",
      image: "https://img.freepik.com/free-photo/portrait-smiling-young-man_1268-21877.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      quote: "Amazing coffee experience! The quality and taste are outstanding. Highly recommend to all coffee lovers.",
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      image: "https://img.freepik.com/free-photo/serene-boy-posing-with-plaid-shirt_1153-822.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 3,
      quote: "Best coffee shop in town. Great ambiance and excellent service. Will definitely come back!",
      name: "Mike Wilson",
      role: "Business Owner",
      image: "user-profile3.jpg"
    }
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full min-h-[50vh] bg-gradient-to-br from-amber-50 to-white py-20  relative ">
      
      {/* Coffee splash - top right */}
      <img 
        src="coffee_blast.png" 
        alt="coffee splash" 
        className="absolute top-0 right-0 w-40 md:w-96 h-auto -scale-x-100"
      />

      {/* Coffee splash - bottom left */}
      <img 
        src="coffee_blast.png" 
        alt="coffee splash" 
        className="absolute bottom-0 left-0 w-48 md:w-94 h-auto "
      />

      {/* Title Section */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4" style={{fontFamily: 'Clicker Script'}}>
          Our coffee perfection feedback
        </h1>
        <p className="text-lg text-gray-600" style={{fontFamily: 'Playfair Display'}}>
          Our customers has amazing things to say about us
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative z-10 flex justify-center">
        <div className="relative bg-amber-50 rounded-2xl p-8 md:p-12 shadow-lg max-w-2xl min-h-[420px] md:min-h-[460px] flex flex-col ">
  {/* Quote Mark */}
  <div className="text-7xl text-amber-900 mb-4">"</div>

  {/* Quote Text (fixed area) */}
  <div className="mb-8 h-[140px] md:h-[180px] items-center">
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{fontFamily: 'Playfair Display'}}>
      {testimonials[currentIndex].quote}
    </p>
  </div>

  {/* User Info pinned to bottom */}
  <div className="mt-auto flex flex-col items-center gap-4">
    <div
      className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }}
      role="img"
      aria-label={testimonials[currentIndex].name}
    />
    <div className="text-center">
      <h3 className="text-2xl font-bold text-amber-900" style={{fontFamily: 'Clicker Script'}}>
        {testimonials[currentIndex].name}
      </h3>
      <p className="text-gray-600" style={{fontFamily: 'Playfair Display'}}>
        {testimonials[currentIndex].role}
      </p>
    </div>
  </div>

  {/* Arrows: at ends, slightly outside */}
  <button
    onClick={handlePrev}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center text-2xl hover:bg-yellow-500 transition-all"
  >
    ←
  </button>
  <button
    onClick={handleNext}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center text-2xl hover:bg-yellow-500 transition-all"
  >
    →
  </button>
        </div>
      </div>
    </div>
  )
}

export default Feedback