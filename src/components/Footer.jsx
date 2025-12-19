import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div 
      className="w-full h-1/2 relative"
      style={{
        background: `linear-gradient(180deg, #442808 0%, #6d400d 100%)`
      }}
    >
      {/* Bottom Image */}
      <img 
        src="fotter_image.png" 
        alt="" 
        className="w-full h-[40vh] object-cover object-right"
      />
       <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Section - Absolute positioned on top of image */}
      <div className="absolute inset-0 w-full px-10 md:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
        
        {/* Bean Scene - Logo & Description */}
        <div>
          <h1 className="text-5xl mb-6" style={{fontFamily: 'Clicker Script'}}>Bean Scene</h1>
          <p className="text-sm leading-relaxed mb-6" style={{fontFamily: 'Playfair Display'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-yellow-400 transition-all">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-600 hover:bg-yellow-400 transition-all">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-yellow-400 transition-all">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-400 hover:bg-yellow-400 transition-all">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h2 className="text-3xl mb-6" style={{fontFamily: 'Playfair Display'}}>About</h2>
          <ul className="space-y-3 text-sm" style={{fontFamily: 'Playfair Display'}}>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Menu</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Features</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">News & Blogs</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Help & Supports</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-3xl mb-6" style={{fontFamily: 'Playfair Display'}}>Company</h2>
          <ul className="space-y-3 text-sm" style={{fontFamily: 'Playfair Display'}}>
            <li><a href="#" className="hover:text-yellow-400 transition-all">How we work</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Terms of service</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Pricing</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-3xl mb-6" style={{fontFamily: 'Playfair Display'}}>Contact Us</h2>
          <ul className="space-y-3 text-sm" style={{fontFamily: 'Playfair Display'}}>
            <li>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
            <li><a href="tel:+12029182132" className="hover:text-yellow-400 transition-all">+1 202-918-2132</a></li>
            <li><a href="mailto:beanscene@mail.com" className="hover:text-yellow-400 transition-all">beanscene@mail.com</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">www.beanscene.com</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;