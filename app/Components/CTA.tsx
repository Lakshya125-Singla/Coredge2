'use client';
import React from 'react';
export default function CTA() {
    return (
        <div>
            <header>
                <div className="relative min-h-screen w-auto overflow-hidden bg-[#020202] flex flex-col justify-center items-center">

                    {/* CONTENT */}

                    {/* IMAGE BACKGROUND (WAVE IMAGE) */}
                    <picture>
                        <img
                            src="/CTA-bg.png"
                            alt="CTA Background"
                            className="mx-auto
            w-[100%]
            sm:w-[400px]
            md:w-[800px]
            lg:w-[1000px]
            xl:w-[100%]
            max-w-[1500px]
            object-cover"
                        />
                    </picture>

                    <div className="flex flex-col absolute z-10 w-auto text-center">
                        <div className='w-auto '>
                            <h1 className="w-[1000px] lg:w-[800px] xl:w-[1000px] text-auto lg:text-[44px] md:text-[44px] md:w-[700px] md:mx-auto xl:text-[64px] sm:text-[12px] sm:w-[300px] font-semibold leading-tight text-[#fff]">
                                Ready to Transform Your Cloud Infrastructure?

                            </h1>

                        </div>
                        <div className='w-auto'>
                            <p className="pt-[24px] text-auto sm:text-[12px] sm:w-[300px] md:text-[16px] md:w-[750px] lg:text-[20px] lg:w-[800px] xl:text-[20px] xl:w-[1200px] text-[#fff] mx-auto">
                                Join leading enterprises leveraging sovereign cloud for secure, scalable operations

                            </p>
                        </div>
                        <div className="pt-[46px] lg:mb-60 md:mb-52 sm:mb-80 pb-6 flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-[28px] py-[13px] text-auto sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[20px]  rounded-[8px] bg-[#0095B6D9] text-white font-medium hover:opacity-90 transition ">
                                Request a Demo

                            </button>

                            <button className="px-[28px] py-[13px] text-auto sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[20px] rounded-[8px] border border-[#fff] text-[#fff] font-medium hover:bg-gray-100 transition w-full sm:w-auto">
                                Get in Touch

                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {/* <section className="py-24 text-center">
      <h2 className="text-5xl font-bold">
        Ready to Transform Your Cloud <br/>Infrastructure?
      </h2>
      <p className="text-lg text-black-800 mt-4">
        Join enterprises leveraging sovereign cloud for secure, scalable operations.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-blue-500 text-white text-sm px-6 py-0 rounded-xl">
          Request a Demo
        </button>
        <button className="border text-sm bg-black text-white px-6 py-3 rounded-xl">
          Contact Us
        </button>
      </div>
    </section> */}
        </div>
    );
}
