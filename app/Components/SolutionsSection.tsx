'use client';
import React from 'react';


const SolutionsSection = () => {
  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-medium leading-[70px] justify-center mb-4 tracking-tight">
            Solutions That Drive Real Outcomes
          </h2>
          <p className="text-sm md:text-base">
            Purpose-built for your industry and use case
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#ffffff]/40 mb-12 md:mb-16" />

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg  rounded-xl overflow-hidden">
              
              <img 
                src="/Solutions.png" 
                alt="AI/ML Visualization"
                className="w-full h-full object-cover"
              />
             
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:border-l lg:border-[#ffffff]/40 lg:pl-16 flex flex-col justify-center">
            <span className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-medium mb-4 leading-[34px]">
              By Use Case
            </span>
            
            <h3 className="text-[45px] md:text-[50px] lg:text-[56px] leading-[66px] font-semibold  mb-6">
              AI/ML Training & Inference
            </h3>
            
            <p className="text-white font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] mb-8 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>

<button className="group flex items-center gap-2 transition-opacity duration-300 hover:opacity-100">
  <img 
    src="/soluarrow.png" 
    alt="Navigate"
    className="w-8 h-8 object-contain group-hover:translate-x-2 transition-transform duration-300" 
  />
</button>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;