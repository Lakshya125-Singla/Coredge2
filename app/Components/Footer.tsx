'use client'
import React from 'react';
const logos = [
    "Footer-Facebook.png",
    "Footer-Linkdin.png",
    "Footer-X.png",
]
export default function Footer() {
    return (
        <footer className="relative bg-black text-white overflow-hidden ">
            {/* Main Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14 sm:pb-16">

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* Platforms */}
                    <div>
                        <h3 className="text-[32px] lg:text-[32px] md:text-[32px] xl:text-[36px] font-semibold mb-5 sm:mb-6 ">
                            Platforms
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-auto font-normal font-inter  lg:text-[20px] text-[#fff] ">
                            <li>Sovereign AI</li>
                            <li>Cloud Orbiter</li>
                            <li>Cirrus Cloud Platform</li>
                            <li>Coredge Kubernetes</li>
                            <li>Cirrus Cloud Suite</li>
                            <li>Corobots</li>
                            <li>Dflare AI</li>
                        </ul>
                    </div>

                    {/* Industry */}
                    <div>
                        <h3 className="text-[32px] lg:text-[32px] md:text-[32px] xl:text-[36px] font-semibold mb-5 sm:mb-6">
                            Industry
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-auto font-normal font-inter  lg:text-[20px] text-[#fff]">
                            <li>Telecom</li>
                            <li>Healthcare</li>
                            <li>Finance</li>
                            <li>Private Sector</li>
                            <li>Mid-Size Enterprise</li>
                            <li>Government</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-[32px] lg:text-[32px] md:text-[32px] xl:text-[36px] font-semibold mb-5 sm:mb-6">
                            Company
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-auto font-normal font-inter  lg:text-[20px] text-[#fff]">
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Company</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h3 className="text-[32px] lg:text-[32px] md:text-[32px] xl:text-[36px] lg:w-[250px] font-semibold mb-5 sm:mb-6">
                            Get in Touch
                        </h3>
                                    <div className="flex gap-3 sm:gap-4 w-[250px] ">
                            {logos.map((logo,i) => (
                               <div key={i} className="flex items-center justify-center w-[42px] h-[42px] pl-1">
                                <img
                                    src={logo}
                                    alt={logo}
                                    className="h-auto w-auto object-fill gap-[10px] cursor-pointer rounded-[8px]"
                                />
                               </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-12 flex flex-col lg:flex-row justify-between items-center gap-6 text-auto text-[#fff]">



                    <div className="flex gap-6 sm:gap-20 md:gap-[100px]">
                        <p className="text-center lg:text-left font-medium  sm:text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] ">
                            © 2025 Coredge. All Rights Reserved
                        </p>
                        <p className="cursor-pointer hover:text-white font-medium font-inter sm:text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] ">
                            Terms & Conditions
                        </p>
                        <p className="cursor-pointer hover:text-white font-medium sm:text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] ">
                            Privacy Policy
                        </p>
                    </div>


                </div>
            </div>

            {/* Background Watermark */}
            <div className="relative pb-6 sm:pb-8 lg:pb-10 text-center select-none pointer-events-none w-full">
                <img
                    src="Footer-logo.png"
                    alt="Coredge Watermark"
                    className="
            mx-auto
            w-[100%]
            sm:w-[100%]
            md:w-[750px]
            lg:w-[1000px]
            xl:w-[90%]

            max-w-[1440px]
            object-contain"
                />
            </div>
            {/* <div className="relative pb-6 sm:pb-8 lg:pb-10 text-center select-none pointer-events-none w-full">
  <img
    src="Footer-logo.png"
    alt="Footer Logo"
    className="
      mx-auto
      w-[85%]
      sm:w-[70%]
      md:w-[60%]
      lg:w-[50%]
      xl:w-[100%]
      max-w-[1400px]
      object-contain
    "
  />
</div> */}

        </footer>
    );
}
