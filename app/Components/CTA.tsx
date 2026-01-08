'use client';
import React from 'react';
export default function CTA() {
    return (
        <div>
            <section
                className="min-w-full relative bg-[#0B0B0B] overflow-hidden items-center
                  mx-auto 
                   before:content-['']
      before:absolute
      before:inset-0
      before:top-0
      before:left-0
      before:h-[115%]
      before:w-[100%]
      before:bg-gradient-to-b
      before:from-[#0B0B0B]
      before:via-[#0B0B0B]/100
      before:to-transparent
      before:z-9
      
      ">
                <img src="/CTA-bg.png" alt="CTA Inage" className="h-[90vh] xl:h-[90vh] 2xl:h-[90vh] lg:h-[85vh] md:h-[80vh] sm:h-[100vh] w-full object-fill " />

                <div className="absolute w-full flex flex-col t-0 z-10 items-center justify-center px-6 mx-auto ">
                    <div className="absolute container mx-auto text-center ">

                        {/* Main Heading */}
                        <h1 className="text-[#ffffff] font-semibold leading-10 lg:leading-14 xl:leading-16 2xl:leading-20 lg:text-[44px] text-[34px] md:leading-12
                       md:text-[40px] xl:text-[54px] 2xl:text-[64px] w-full mx-auto px-auto">
                            {/* Sovereign Cloud & AI Infrastructure <br className="hidden sm:block" /> For The Modern Enterprise */}
                            Ready to Transform Your Cloud <br className="hidden sm:block" /> Infrastructure?
                        </h1>

                        {/* Subheading */}
                        <p className="text-[#ffffff] leading-[23px] md:leading-[28px] lg:leading-[30px] xl:leading-[30px] 2xl:leading-[35px] lg:text-[20px] text-[14px]
                      md:text-[16px] 2xl:text-[20px] font-normal text-center mx-[16%] my-6">
                            Join leading enterprises leveraging sovereign cloud for secure, scalable operations
                        </p>

                        {/* Buttons Group */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-[120%] pb-[100%] lg:mb-[70%] md:mb-[85%] md:pb-[20%] xl:mb-[50%] 2xl:mb-[38%] pt-6">
                            <button className="px-[28px] py-[13px] bg-[#0095B6] text-white rounded-md  transition-all 2xl:text-base font-medium text-[14px] lg:text-[20px] 2xl:text-[20px] md:text-[16px] ">
                                Request a Demo
                            </button>
                            <button className="px-[28px] py-[13px] border border-[#fff] text-white rounded-md  transition-all 2xl:text-base font-medium text-[14px] lg:text-[20px] 2xl:text-[20px] md:text-[16px] ">
                                Get in Touch
                            </button>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}
