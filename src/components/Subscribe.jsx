import React from 'react'

const Subscribe = () => {
  return (
    <div className="w-full bg-yellow-700  flex flex-col items-center justify-center relative">
      <img src="Rectangle.png" alt="" className='w-full h-full object-cover inset-0 ' />
        <div className=" absolute inset-0 bg-black opacity-40"></div>
         {/* Left pngwing */}
      {/* Left pngwing */}
      
      {/* Center Content - Image के ऊपर */}
      <div className="absolute z-20 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8" style={{fontFamily: 'Clicker Script'}}>
          Subscribe to get the latest news
        </h1>
        
        {/* Email Input + Button */}
       <div className="flex gap-0 max-w-md mx-auto">
  <input 
    type="email" 
    placeholder="Enter your email"
    className="flex-1 px-6 py-3 rounded-l-lg focus:outline-none bg-white text-black"
  />
  <button className="px-8 py-3 bg-yellow-600 text-white font-bold rounded-r-lg hover:bg-yellow-700 transition-all">
    Subscribe
  </button>
</div>
        </div>


      <img src="pngwing.png" alt="" className='absolute left-0 -bottom-10 w-90 md:w-80 h-auto z-10' />
      
      {/* Right pngwing - flipped */}
      <img src="pngwing.png" alt="" className='absolute right-0 -bottom-10 w-90 md:w-80 h-auto z-10 -scale-x-100' />
    </div>
  )
}

export default Subscribe
