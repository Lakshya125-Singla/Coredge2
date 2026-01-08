// 'use client';
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

// // Swiper styles are required for the slider to work
// import 'swiper/css';
// import 'swiper/css/navigation';

// const PlatformSuite = () => {
//   // Simple data array for easy editing
//   const cards = [
//     {
//       title: "Sovereign AI",
//       desc: "Lorem Ipsum is simply dummy text of the printing.",
//       img: "/images/ai-platform.jpg"
//     },
//     {
//       title: "Cloud Orbiter",
//       desc: "Lorem Ipsum is simply dummy text of the printing.",
//       img: "/images/cloud-orbiter.jpg"
//     },
//     {
//       title: "Cirrus Cloud Platform",
//       desc: "Lorem Ipsum is simply dummy text of the printing.",
//       img: "/images/cirrus.jpg"
//     },
//     {
//       title: "Kubernetes Platform",
//       desc: "Lorem Ipsum is simply dummy text of the printing.",
//       img: "/images/k8s.jpg"
//     },
//     {
//       title: "Sovereign AI",
//       desc: "Lorem Ipsum is simply dummy text of the printing.",
//       img: "/images/ai-platform.jpg"
//     },
//     {
//       title: "Cloud Orbiter",
//       desc: "Lorem Ipsum is simply dummy text of the printing.",
//       img: "/images/cloud-orbiter.jpg"
//     },
//     {
//       title: "Cirrus Cloud Platform",
//       desc: "Lorem Ipsum is simply dummy text of the printing.",
//       img: "/images/cirrus.jpg"
//     },
    
    
//   ];

//   return (
//     <section className="bg-black py-16 md:py-24 px-4 font-sans">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Area */}
//         <div className="text-center mb-16">
//           <h2 className="text-white text-[3rem] md:text-[3.4rem] lg:text-[4rem] font-medium tracking-tight leading-[70px] mb-4">
//             Comprehensive Platform Suite
//           </h2>
//           <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[30px] max-w-2xl mx-auto">
//             Everything you need to build, deploy, and manage sovereign cloud infrastructure at scale
//           </p>
//         </div>

//         {/* Slider Container */}
//         <div className="relative">
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={20}
//             slidesPerView={1}
//             // Custom arrows setup
//             navigation={{
//               nextEl: '.btn-next',
//               prevEl: '.btn-prev',
//             }}
//             // Responsive break points
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 4 }
//             }}
//           >
//             {cards.map((card, index) => (
//               <SwiperSlide key={index}>
//                 <div className="bg-[#0f0f0f] border border-zinc-800 rounded-2xl p-6 h-full flex flex-col">
//                   {/* Image Placeholder */}
//                   <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-zinc-900">
//                     <img 
//                       src={card.img} 
//                       alt={card.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
                  
//                   {/* Content */}
//                   <h3 className="text-white text-24px font-medium md:text[28px] lg:text-[32px] leading-[44.5px] mb-2">
//                     {card.title}
//                   </h3>
//                   <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[30px] mb-8 flex-grow">
//                     {card.desc}
//                   </p>
                  
//                   {/* Action Button */}
//                   <button className="bg-[#0095b6] text-white py-2.5 px-6 rounded-lg text-[14px] md:text-[16px] lg:text-[18px] font-medium w-fit">
//                     Explore Platform
//                   </button>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation Controls (Bottom Right) */}
//           <div className="flex justify-end gap-3 mt-10">
//             <button className="btn-prev w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-all cursor-pointer">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button className="btn-next w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-all cursor-pointer">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PlatformSuite;

'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const PlatformSuite = () => {
  const cards = [
    {
      title: "Sovereign AI",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
      img: "/images/ai-platform.jpg"
    },
    {
      title: "Cloud Orbiter",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
      img: "/images/cloud-orbiter.jpg"
    },
    {
      title: "Cirrus Cloud Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
      img: "/images/cirrus.jpg"
    },
    {
      title: "Kubernetes Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
      img: "/images/k8s.jpg"
    },
    {
      title: "Sovereign AI",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
      img: "/images/ai-platform.jpg"
    },
    {
      title: "Cloud Orbiter",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
      img: "/images/cloud-orbiter.jpg"
    },
    {
      title: "Cirrus Cloud Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
      img: "/images/cirrus.jpg"
    }
  ];

  return (
    <section className="bg-black py-16 md:py-24 px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <h2 className="text-white text-[3rem] md:text-[3.4rem] lg:text-[4rem] font-medium tracking-tight leading-[70px] mb-4">
            Comprehensive Platform Suite
          </h2>
          <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[30px] max-w-2xl mx-auto">
            Everything you need to build, deploy, and manage sovereign cloud infrastructure at scale
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.2}
            navigation={{
              nextEl: '.btn-next',
              prevEl: '.btn-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 3.5 }
            }}
            className="!overflow-visible"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="group relative rounded-2xl overflow-hidden h-[400px] md:h-[450px] cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={card.img} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-all duration-300">
                    <h3 className="text-white text-24px font-medium md:text[28px] lg:text-[32px] leading-[44.5px] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[30px] mb-8">
                      {card.desc}
                    </p>
                    
                    {/* Action Button */}
                    <button className="bg-[#0095b6] text-white py-2.5 px-6 rounded-lg text-[14px] md:text-[16px] lg:text-[18px] font-medium w-fit transition-all duration-300 transform ">
                      Explore Platform
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls (Bottom Center) */}
          <div className="flex justify-center gap-3 mt-10">
            <button className="btn-prev w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-all cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="btn-next w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-all cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlatformSuite;