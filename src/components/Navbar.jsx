import React, { useState } from 'react'

const Navbar = () => {
  const [activeAction, setActiveAction] = useState('signup')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="px-10 py-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-white text-[35px] font-bold tracking-wide" style={{fontFamily: 'Clicker Script'}}>MyStore</h1>        
        
        {/* Menu */}
        <ul className="hidden md:flex gap-6 md:ml-10 text-[18px] text-white" style={{fontFamily: 'Playfair Display'}}>
          <li 
            onClick={() => scrollToSection('home')}
            className="cursor-pointer transition-all duration-200 hover:underline underline-offset-4"
          >
            Home
          </li>
          <li 
            onClick={() => scrollToSection('products')}
            className="cursor-pointer transition-all duration-200 hover:underline underline-offset-4"
          >
            Products
          </li>
          <li 
            onClick={() => scrollToSection('about')}
            className="cursor-pointer transition-all duration-200 hover:underline underline-offset-4"
          >
            About
          </li>
        </ul>

        {/* Buttons */}
        <div className='hidden md:flex gap-2 text-[18px]' style={{fontFamily: 'Playfair Display'}}>
          <button
            onMouseEnter={() => setActiveAction('signup')}
            onMouseLeave={() => setActiveAction('signup')}
            className={`${activeAction === 'signup' ? 'bg-yellow-700 text-white' : 'bg-transparent text-white border border-yellow-700'} px-4 py-2 rounded-4xl transition-all duration-200`}
          >
            Signup
          </button>
          <button
            onMouseEnter={() => setActiveAction('login')}
            onMouseLeave={() => setActiveAction('signup')}
            className={`${activeAction === 'login' ? 'bg-yellow-700 text-white' : 'bg-transparent text-white'} px-4 py-2 rounded-4xl transition-all duration-200`}
          >
            Login
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </nav>
  )
}

export default Navbar