import React from 'react'

const Hero = () => {
  return (
    <div className=" w-screen h-screen relative" >

        <img src="coffee_image.png" alt="Hero Background" className='w-full h-full object-cover absolute inset-0  md:object-right object-right' />
         {/* Blackish Overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>
       {/* text content */}
        {/* Text Content */}
<div className="absolute inset-0 flex items-center justify-start z-10 pl-6 md:pl-20">
  <div className="text-left text-white max-w-xl">
    {/* Heading */}
    <h3 className="text-[14px] md:text-base mb-2" style={{fontFamily: 'Playfair Display'}}>
      We have Got your morning covered with 
    </h3>
    
    <h1
      className="text-[clamp(120px,40vw,280px)] leading-[0.85] md:leading-none mb-2 md:mb-4"
      style={{fontFamily: 'Clicker Script'}}
    >
      Coffee
    </h1>

    
    {/* Description */}
    <p className="text-xs md:text-sm opacity-90 mt-4 md:mt-10" style={{fontFamily: 'Playfair Display'}}>
      It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.
    </p>
    
    {/* Button */}
    <button className='px-6 md:px-10 py-2 md:py-4 mt-4 md:mt-8 text-white bg-yellow-700 rounded-4xl text-sm md:text-base' style={{fontFamily: 'Playfair Display'}}>
      Order Now
    </button>
  </div>
</div>
    </div>
  )
}

export default Hero
