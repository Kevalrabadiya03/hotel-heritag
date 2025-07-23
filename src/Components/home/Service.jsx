import React from 'react'
import left from "../../assets/left-side.png";
import right from "../../assets/right-side.png";
import serviceOne from "../../assets/serviceone.png";
import serviceIcon1 from "../../assets/service-icon-1.png";
import serviceTwo from "../../assets/servicetwo.png";
import serviceIcon2 from "../../assets/service-icon-2.png";
import serviceThree from "../../assets/servicethree.png";
import serviceIcon3 from "../../assets/service-icon-3.png";




function Service() {
    return (
        <>
            <div className="h-auto servive-main  lg:h-[966px] py-[60px] lg:py-[90px] px-[25px] lg:px-[80px] gap-[8px] bg-[#F7F8F6]">
                <div className=" lg:h-[711px] gap-[60px]">
                    <div className=" lg:h-[142px] gap-[18px] text-center justify-center  m-auto">
                        <div className=" lg:h-[80px] gap-[12px]">
                            <div className="lg:w-[148px] lg:h-[18px] gap-[4px] flex text-center justify-center m-auto mb-[12px]">
                                <span className="w-[26.66px] h-[12px]">
                                    <img src={left} alt="" />
                                </span>
                                <h2 className="lg-w-[80px] lg:h-[18px] font-bold text-[18px] text-[#D9A84E] leading-[18px] uppercase">
                                    Service
                                </h2>
                                <span className="w-[26.66px] h-[12px]">
                                    <img src={right} alt="" />
                                </span>
                            </div>
                            <div className="lg:h-[50px] mb-[18px]">
                                <p className='font-[Grillages] font-semibold text-[35px] lg:text-[50px] leading-[100%] text-center '>Designed for your perfect stay.</p>
                            </div>
                            <div className="w-full flex justify-center">
                                <div className="lg:w-[850px] lg:h-[44px] text-center">
                                    <p className="font-normal text-lg leading-[120%] text-center">
                                        At Heritage, every detail is crafted with your comfort in mind. From elegantly designed rooms to world-class amenities, we ensure a seamless blend of luxury and convenience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg-w-[1281px]  lg:h-[509px] justify-between pt-[55px]">
                        <div className=" flex flex-wrap gap-[24px] text-center justify-center">
                            <div className=" rounded-[20px] bg-[#ffffff] text-center justify-center">
                                <div className=" bg-[#ffffff] rounded-[20px]">
                                    <div className="" >
                                        <img src={serviceOne} alt="" className='rounded-[20px] w-[411px] h-[407px]' />
                                    </div>
                                    <div className="h-[102px] w-full lg:w-[411px] pt-[48px] pb-[24px] px-[8px] gap-[16px] rounded-[20px] bg-[#ffffff]">
                                        <div className="w-full lg:w-[395px] h-[30px]">
                                            <p className='font-semibold text-[30px] leading-[30px] text-center  text-[#000000] '>Luxury Accommodation</p>
                                        </div>
                                    </div>
                                    <div className="relative bottom-35.5 text-center justify-center flex">
                                        <img src={serviceIcon1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[20px] bg-[#ffffff] text-center justify-center">
                                <div className=" bg-[#ffffff] rounded-[20px]">
                                    <div className="" >
                                        <img src={serviceTwo} alt="" className='rounded-[20px] w-[411px] h-[407px]' />
                                    </div>
                                    <div className="h-[102px] w-full lg:w-[411px] pt-[48px] pb-[24px] px-[8px] gap-[16px] rounded-[20px] bg-[#ffffff]">
                                        <div className="w-full lg:w-[395px] h-[30px]">
                                            <p className='font-semibold text-[30px] leading-[30px] text-center  text-[#000000] '>Luxury Accommodation</p>
                                        </div>
                                    </div>
                                    <div className="relative bottom-35.5 text-center justify-center flex">
                                        <img src={serviceIcon2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[20px] bg-[#ffffff] text-center justify-center">
                                <div className=" bg-[#ffffff] rounded-[20px]">
                                    <div className="" >
                                        <img src={serviceThree} alt="" className='rounded-[20px] w-[411px] h-[407px] ' />
                                    </div>
                                    <div className="h-[102px] w-full lg:w-[411px] pt-[48px] pb-[24px] px-[8px] gap-[16px] rounded-[20px] bg-[#ffffff]">
                                        <div className="w-full lg:w-[395px] h-[30px]">
                                            <p className='font-semibold text-[30px] leading-[30px] text-center  text-[#000000] '>Luxury Accommodation</p>
                                        </div>
                                    </div>
                                    <div className="relative bottom-35.5 text-center justify-center flex">
                                        <img src={serviceIcon3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service