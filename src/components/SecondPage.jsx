import React from 'react'

const SecondPage = () => {
  return (
    <div className="bg-[#fffefc] w-full min-h/2-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-20 md:p-20 relative">
      
      {/* Coffee blast - absolute left */}
      <img 
        src="coffee_blast.png" 
        alt="coffee blast" 
        className="absolute left-0 bottom-0  w-62 md:w-78 h-auto"
      />

      {/* Text left */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Clicker Script'}}>
          Discover The Best Coffee
        </h1>
        <p className="text-base md:text-lg" style={{fontFamily: 'Playfair Display'}}>
          Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
        </p>
        {/* Button */}
        <button className='px-6 md:px-10 py-2 md:py-4 mt-4 md:mt-8 text-white bg-yellow-700 rounded-4xl text-sm md:text-base' style={{fontFamily: 'Playfair Display'}}>
          Learn Now
        </button>
      </div>

      {/* Image right */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="cofee_beans.png"
          alt="cofee beans"
          className="w-full max-w-lg md:max-w-lg h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default SecondPage