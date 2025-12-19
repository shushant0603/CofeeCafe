import React from 'react'

const FourthPage = () => {
  const coffeeCards = [
    {
      id: 1,
      name: "Cappuccino",
      description: "Coffee 50% | Milk 50%",
      price: "$8.50",
      image: "coffee-beans_logo.png"
    },
    {
      id: 2,
      name: "Chai Latte",
      description: "Coffee 40% | Milk 60%",
      price: "$8.50",
         image: "coffee-beans_logo.png"
    },
    {
      id: 3,
      name: "Macchiato",
      description: "Coffee 60% | Milk 40%",
      price: "$8.50",
        image: "coffee-beans_logo.png"
    },
    {
      id: 4,
      name: "Expresso",
      description: "Coffee 100%",
      price: "$8.50",
         image: "coffee-beans_logo.png"
    }
  ]

  return (
    <div className="bg-[#fffefc] w-full min-h/2-screen flex flex-col items-center justify-center gap-10 p-10 md:p-20 relative">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center" style={{fontFamily: 'Clicker Script'}}>
       Why are we Different
      </h1>
     <img 
  src="coffee_blast.png" 
  alt="coffee blast" 
  className="absolute top-0 right-0 w-62 md:w-78 h-auto -scale-x-100"
/>

      <h2>Explore all flavours of coffee with us. There is always a new cup worth experiencing</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {coffeeCards.map((card) => (
          <div 
            key={card.id} 
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <img 
              src={card.image} 
              alt={card.name} 
              className="w-40 h-40 object-contain mb-4"
            />
            
            {/* Name */}
            <h3 className="text-2xl font-bold mb-2" style={{fontFamily: 'Clicker Script'}}>
              {card.name}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 text-center" style={{fontFamily: 'Playfair Display'}}>
              {card.description}
            </p>
            
            
            
           
          </div>
        ))}
      </div>
      <h2>Great ideas start with great coffee, Lets help you achieve that
.</h2>
<span>

Get started today.
</span>
 <button className="px-6 py-2 bg-yellow-700 text-white rounded-full hover:bg-yellow-800 transition-all" style={{fontFamily: 'Playfair Display'}}>
           join us
            </button>
    </div>
  )
}

export default FourthPage