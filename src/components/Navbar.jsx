import React, { useState } from 'react'

const Navbar = () => {
  const [activeAction, setActiveAction] = useState('signup')
  return (
    <nav className="  px-10 py-4  ">
      <div className="flex justify-between items-center">
        
        {/* Logo - same size on all devices */}
<h1 className="text-white text-[35px] font-bold tracking-wide " style={{fontFamily: 'Clicker Script'}}>MyStore</h1>        
        {/* Menu - hidden on mobile, shows on tablets+ */}
        <ul className="hidden md:flex gap-6 md:ml-10 text-[18px] text-white" style={{fontFamily: 'Playtpi'}}>
  <li className="cursor-pointer transition-all duration-200  hover:underline underline-offset-4">Home</li>
  <li className="cursor-pointer transition-all duration-200  hover:underline underline-offset-4">Products</li>
  <li className="cursor-pointer transition-all duration-200  hover:underline underline-offset-4">About</li>
</ul>

     <div className='hidden md:flex gap-2 text-[18px]' style={{fontFamily: 'Playfair Display'}}>
  <button
    onMouseEnter={() => setActiveAction('signup')}
    onMouseLeave={() => setActiveAction('signup')}
    className={`${activeAction === 'signup' ? 'bg-yellow-700 text-white' : 'bg-transparent text-white border border-yellow-700'} px-4 py-2 rounded-4xl transition-all duration-200`}
    style={{fontFamily: 'playtpi'}}
  >
    Signup
  </button>
  <button
    onMouseEnter={() => setActiveAction('login')}
    onMouseLeave={() => setActiveAction('signup')}
   style={{fontFamily: 'playtpi'}}
    className={`${activeAction === 'login' ? 'bg-yellow-700 text-white' : 'bg-transparent text-white'} px-4 py-2 rounded-4xl transition-all duration-200`}
  >
    Login
  </button>
</div>

        {/* Mobile menu button - shows on mobile only */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </nav>
  )
}

export default Navbar