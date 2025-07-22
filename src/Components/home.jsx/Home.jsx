import React from "react";
import left from "../../assets/left-side.png";
import right from "../../assets/right-side.png";
import whatsapp from "../../assets/whatsapp.png";
import aboutImg from "../../assets/about-image.png";
import aboutLine from "../../assets/about-Line.png";
import checkIcon from "../../assets/check-circle.png";
import galleryOne from "../../assets/gallery-1.png";
import galleryTwo from "../../assets/gallery-2.png";
import galleryThree from "../../assets/gallery-3.png";
import galleryFour from "../../assets/gallery-4.png";
import galleryFive from "../../assets/gallery-5.png";
import gallerySix from "../../assets/gallery-6.png";

function Home() {
  return (
    <>
      {/* Hero Banner Start */}
      <div className="px-0 md:px-[40px] lg:px-[48px]">
      <div className="relative w-full h-[755px] lg:h-[755px] hero-banner lg:rounded-[42px] md:rounded-[42px] rounded-none  ">
        <div className="absolute lg:left-[80px] lg:bottom-[80px]  left-4 inset-0  bg-opacity-40 rounded-[30px] flex flex-col lg:justify-end justify-center  items-start text-white  ">
          <h1 className="lg:text-[72px] md:text-[72px] text-[50px] font-bold  lg:w-[600px] text-start lg:md-[545px] lg:h-[172px]">
            Let’s Explore
            <br />
            Heaven Together
          </h1>
          <p className="text-[20px] lg:my-[30px] md:text-xl mb-6 text-start lg:text-[24px] lg:w-[545px] lg:h-[62px]">
            Experience luxury like never before. Experience comfort like never
            before.
          </p>
          <a
            href="https://wa.me/919999999999"
            className="bg-white text-red-700 px-[16px] py-[24px] lg:w-[268px] lg:h-[52px] text-base rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition"
          >
            <i className="fab fa-whatsapp text-[16px]"></i> Book Now On WhatsApp
          </a>
        </div>
        <div className="absolute bottom-[150px] sm:right-[70px] md:right-[85px]  right-[20px] text-white text-sm border-1 border-white rounded-[4838.71px]">
          <i className="fas fa-angles-up p-[20.84px] sm:p-[29.84px] md:p-[29.84px]"></i>
        </div>
        <div className="absolute bottom-[60px] sm:right-[70px] md:right-[85px]  right-[20px] text-white text-sm border-1 border-white rounded-[4838.71px]">
          <i className="fas fa-angles-down p-[20.84px] sm:p-[29.84px] md:p-[29.84px]"></i>
        </div>
      </div>
      </div>

      {/* Hero Section End */}


          </>
  );
}

export default Home;
