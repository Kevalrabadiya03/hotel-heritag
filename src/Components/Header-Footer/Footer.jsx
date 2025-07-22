import React from 'react';
import logo from '../../assets/logo.png';

const FooterSection = () => {
  return (
    <div className="w-full">
      {/* Subscription Section */}
      <div className="bg-subscription text-white px-6 text-center rounded-t-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'Grillages', width: '100%', height: '58px', lineHeight: '120%' }}>
          Unlock Exclusive Offers at Heritage Hotel!
        </h2>
        <p className=" mb-6 font-normal " style={{fontFamily:'Satoshi', lineHeight:'26px'}} >
          Book now to enjoy special rates and create unforgettable memories.
        </p>
        <form className="flex flex-col md:flex-row justify-center text-center m-auto items-center gap-4  bg-amber-50 w-fit rounded-[120px] p-[6px]">
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 rounded-full text-black w-full md:w-[350px] outline-none"
          />
          <div className="submit-footer-btn pr-1">
          <button
            type="submit"
            className="bg-red-600 btn-sub hover:bg-red-700 transition text-white font-semibold text-center  rounded-full"
          >
            SUBMIT NOW
          </button>
          </div>
          
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e1e1e] text-white px-6 py-10 text-sm md:text-base">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 w-2xl">
          {/* Logo & Social */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-white"><img src={logo} alt="" /></div>
            <div className="flex justify-center md:justify-start gap-4 text-lg social-icons-footer">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fas fa-envelope"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Contact Info */}
          {/*<div className="text-center md:text-left">
            <h4 className="font-semibold mb-2">Our Address</h4>
            <p>📍 Junagadh Rd, Opp. Saibaba Temple,</p>
            <p>Veraval, Gujarat 362266</p>
            <p>📞 973-790-3638</p>
            <p>📧 example1231@gmail.com</p>
          </div>*/}
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-gray-400 text-xs">
          <p>©2010–2025 <span className="text-white font-semibold">Hotel Heritage</span></p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">All Rights Reserved</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;