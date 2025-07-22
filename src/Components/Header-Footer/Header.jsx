import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // toggle for mobile nav

  return (
    <div className="relative w-full font-sans lg:px-[48px] px-[10px]">
      {/* Navbar */}
      <nav className="flex items-center justify-between sm:py-[0px] md:py-[37px]">
        <div className="text-2xl font-bold text-red-800 hidden sm:hidden md:block lg:block">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className='p-[8px] gap-[10px]'><a href="#about">About</a></li>
          <li className='p-[8px] gap-[10px]'><a href="#photos">Photos</a></li>
          <li className='p-[8px] gap-[10px]'><a href="#services">Services</a></li>
          <li className='p-[8px] gap-[10px]'><a href="#amenities">Amenities</a></li>
          <li className='p-[8px] gap-[10px]'><a href="#faq">FAQs</a></li>
        </ul>

        <div className="flex gap-[10px] items-center hidden md-hidden lg:flex header-btn">
          <a href="tel:0123456789" className="bg-white lg:h-[52px] lg:w-[160px] text-[#E30016] border border-[#FF6978] px-5 py-auto rounded-full flex items-center gap-1 text-base">
            <i className='fa fa-phone'></i> 0123456789
          </a>
          <a href="https://wa.me/919999999999" className="text-base lg:h-[52px] lg:w-[280px] bg-[#E30016] text-white px-5 py-3 rounded-full">
            <i className='fab fa-whatsapp'></i> BOOK NOW ON WHATSAPP
          </a>
        </div>
      </nav>

      {/* Mobile Nav Section */}
      <div className="md:hidden flex items-center justify-between py-3 px-3">
        <div className="text-2xl font-bold text-red-800">
          <img src={logo} alt="Logo" />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl">
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white rounded-lg p-4 shadow z-50 text-center">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#photos" onClick={() => setIsOpen(false)}>Photos</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#amenities" onClick={() => setIsOpen(false)}>Amenities</a></li>
            <li><a href="#faq" onClick={() => setIsOpen(false)}>FAQs</a></li>
            <li>
              <a href="tel:0123456789" className="text-[#E30016] border border-[#FF6978] px-4 py-2 rounded-full text-center block">
                <i className="fa fa-phone mr-2"></i> 0123456789
              </a>
            </li>
            <li>
              <a href="https://wa.me/919999999999" className="bg-[#E30016] text-white px-4 py-2 rounded-full text-center block">
                <i className="fab fa-whatsapp mr-2"></i> Book Now on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
