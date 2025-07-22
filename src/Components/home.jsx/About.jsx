import React from "react";
import left from "../../assets/left-side.png";
import right from "../../assets/right-side.png";
import whatsapp from "../../assets/whatsapp.png";
import aboutImg from "../../assets/about-image.png";
import aboutLine from "../../assets/about-Line.png";
import checkIcon from "../../assets/check-circle.png";

function About() {
    return (
        <>
            {/* About Section start */}
            <div className="h-auto w-full max-w-[1440px] mx-auto py-[60px] lg:py-[90px] px-5 md:px-[40px] lg:px-[80px] gap-[30px]">
  <div className="h-auto w-full max-w-[1280px] about-main lg:h-[557px] flex flex-wrap justify-between gap-y-10 gap-x-[10px] items-center m-autox">

                    {/* Left Section */}
                    <div className="w-full lg:w-[491px] lg:h-[346px] gap-[60px]">
                        <div className="lg:h-[18px] gap-[4px] flex items-center">
                            <span className="w-[26.66px] h-[12px]">
                                <img src={left} alt="" />
                            </span>
                            <h2 className="w-auto font-bold text-[18px] text-start text-[#D9A84E] leading-[18px] uppercase">
                                About Us
                            </h2>
                            <span className="w-[26.66px] h-[12px]">
                                <img src={right} alt="" />
                            </span>
                        </div>

                        <div className="text-semibold text-[50px] leading-[120%] text-[#000000] text-start mt-4">
                            Welcome to Our Heritage
                        </div>

                        <div className="h-[66px] text-[18px] leading-[120%] text-[#434343] text-start mt-4">
                            Nestled in the heart of is designed to offer a perfect blend of luxury,
                            comfort, and personalized hospitality. Whether you’re here for business,
                            leisure, or a romantic getaway.
                        </div>

                        <div className="w-[280px] h-[52px] rounded-[600px] px-[16px] py-[18px] bg-[#E30016] gap-[10px] flex items-center mt-16">
                            <span className="w-[20px] h-[20px]">
                                <img src={whatsapp} alt="" />
                            </span>
                            <p className="text-[16px] font-bold uppercase text-white">Book Now On WhatsApp</p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="w-full lg:w-[393px] lg:h-[557px] mt-10 lg:mt-0">
                        <img src={aboutImg} alt="" className="rounded-[30px] w-full h-auto" />
                    </div>

                    {/* Right List Section */}
                    <div className="w-full lg:w-[337px] lg:h-[292px] gap-[50px] mt-10 lg:mt-0">
                        <span className="w-full lg:w-[337px] block">
                            <img src={aboutLine} alt="" className="h-[3px]" />
                        </span>
                        <div className="gap-[30px] mt-6">
                            {[
                                "Stay close to major attractions, business hubs, and entertainment spots.",
                                "Elegantly designed rooms & suites with modern comforts.",
                                "Savor exquisite flavors at our in-house restaurant & bar.",
                            ].map((text, i) => (
                                <div key={i} className="flex gap-[6px] mb-4">
                                    <p className="w-[50px] h-[18px]">
                                        <img src={checkIcon} alt="" />
                                    </p>
                                    <p className="text-[18px] leading-[120%] text-[#434343] text-start">{text}</p>
                                </div>
                            ))}
                        </div>
                        <span className="w-full lg:w-[337px] block">
                            <img src={aboutLine} alt="" className="h-[3px]" />
                        </span>
                    </div>
                </div>
            </div>

            {/* About Section end */}
        </>
    );
}

export default About;
