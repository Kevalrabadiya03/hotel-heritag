import React from 'react'
import left from "../../assets/left-side.png";
import right from "../../assets/right-side.png";    
import galleryOne from "../../assets/gallery-1.png";
import galleryTwo from "../../assets/gallery-2.png";
import galleryThree from "../../assets/gallery-3.png";
import galleryFour from "../../assets/gallery-4.png";
import galleryFive from "../../assets/gallery-5.png";
import gallerySix from "../../assets/gallery-6.png";

function Gallery() {
  return (
    <>
    {/* gallery Section start */}
      <div className="px-[25px] lg:px-[48px]">
      <div className="py-[60px] lg:py-[90px] gap-[60px]">
        <div className="lg:w-[964px] lg:h-[80px] gap-[12px] m-auto">
          <div className="lg:w-[141.32px] lg:h-[18px] gap-[4px] flex text-center justify-center m-auto mb-[12px]">
            <span className="w-[26.66px] h-[12px]">
              <img src={left} alt="" />
            </span>
            <h2 className="lg-w-[80px] lg:h-[18px] font-bold text-[18px] text-[#D9A84E] leading-[18px] uppercase">
              Gallery
            </h2>
            <span className="w-[26.66px] h-[12px]">
              <img src={right} alt="" />
            </span>
          </div>
          <div className="lg:w-[964px] lg:h-[50px] font-[Grillages] font-normal text-center text-[35px] lg:text-[50px] leading-[100%] ">
            Discover the Beauty of Our Timeless Retreat
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* 1st column */}
        <div className="grid grid-col gap-5">
          <img
            src={galleryOne}
            alt="Gallery 1"
            className="h-[257px] w-full lg:w-[413px] object-cover rounded-[24px]"
          />
          <img
            src={galleryTwo}
            alt="Gallery 4"
            className="h-[430px] lg:w-[413px] w-full object-cover rounded-[24px]"
          />
        </div>

        {/* 2nd column */}
        <div className="grid grid-col gap-5">
          <img
            src={galleryThree}
            alt="Gallery 2"
            className="h-[472px] lg:w-[413px] w-full object-cover rounded-[24px]"
          />
          <img
            src={galleryFour}
            alt="Gallery 5"
            className="h-[215px] lg:w-[413px] w-full object-cover rounded-[24px]"
          />
        </div>

        {/* 3rd column */}
        <div className="grid grid-col gap-5">
          <img
            src={galleryFive}
            alt="Gallery 3"
            className="h-[298px] lg:w-[413px] w-full object-cover rounded-[24px]"
          />
          <img
            src={gallerySix}
            alt="Gallery 6"
            className="h-[389px] lg:w-[413px] w-full object-cover rounded-[24px]"
          />
        </div>
      </div>
      </div>
      <div className="pt-[60px] pb-[90px] ">
      <div className="w-[175px] h-[48px] rounded-[600px] m-auto py-[16px] px-[24px] flex gap-[10px] bg-[#E30016]">
        <p className="uppercase text-[#ffffff] w-[127px] h-[16px] items-center flex  text-base font-bold ">See all Image</p>
      </div>
      </div>
      </div>
      
      
      {/* gallery Section end */}

    </>
  )
}

export default Gallery