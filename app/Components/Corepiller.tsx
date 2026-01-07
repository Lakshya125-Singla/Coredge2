'use client';
import React from 'react';


interface PillarItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Corepiller: React.FC = () => {
  
  //  (Pillars)
  const pillars: PillarItem[] = [
    {
      title: "Sovereign AI",
      description: "Geo-fenced AI infra with data sovereignty and regulatory compliance.",
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="63" height="64" viewBox="0 0 63 64" fill="none">
<mask id="mask0_1290_2360" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="63" height="64">
<rect x="0.5" y="0.5" width="62" height="63" rx="7.5" fill="#060606" stroke="#3F3F3F"/>
</mask>
<g mask="url(#mask0_1290_2360)">
<rect width="63" height="64" rx="8" fill="#060606"/>
<rect x="0.5" y="0.5" width="62" height="63" rx="7.5" stroke="#3F3F3F" stroke-opacity="0.5"/>
<g filter="url(#filter0_f_1290_2360)">
<circle cx="32.5" cy="32.5" r="21.5" fill="#0095B6" fill-opacity="0.5"/>
</g>
</g>
<path d="M38.2619 48.8364H28.9855C27.7221 48.8364 26.6969 47.8058 26.6969 46.5437V45.7759C25.1071 46.3203 23.7555 46.6778 22.5908 46.866C21.6741 47.0095 20.7383 46.7428 20.0355 46.1334C19.3218 45.524 18.9155 44.6329 18.9155 43.6972V39.7048C18.9155 39.3527 18.7476 39.0264 18.4605 38.8287L16.8801 37.7142C16.3804 37.3621 16.0635 36.8122 16.008 36.2042C15.9539 35.5948 16.176 34.9962 16.608 34.5602L18.1179 33.0502C18.321 32.8471 18.4348 32.5695 18.4348 32.2824V29.593C18.4348 27.0322 18.9941 24.5866 20.0598 22.5103C21.4262 19.8412 23.4819 17.8302 26.1808 16.5329C31.0897 14.1739 37.0932 14.9065 41.4752 18.3977C44.8038 21.0573 46.5224 24.2371 46.5859 27.8419C46.6847 33.7 44.2783 37.9794 42.243 40.5348C41.1529 41.8971 40.5489 43.575 40.5489 45.2541V46.5419C40.5489 47.8054 39.5184 48.8346 38.2563 48.8346L38.2619 48.8364ZM27.1925 44.5826C27.2914 44.5826 27.3902 44.6124 27.4796 44.672C27.6137 44.7655 27.6881 44.9144 27.6881 45.0783V46.5449C27.6881 47.2626 28.2732 47.8477 28.9855 47.8477H38.2619C38.9796 47.8477 39.5646 47.2626 39.5646 46.5449V45.2571C39.5646 43.3503 40.2431 41.453 41.4714 39.9189C43.4079 37.4922 45.6911 33.4257 45.5961 27.8598C45.5365 24.5609 43.9426 21.6345 40.8563 19.1724C36.7708 15.9182 31.1792 15.2358 26.6072 17.4241C24.1114 18.628 22.2047 20.49 20.9411 22.9615C19.9512 24.8981 19.4257 27.1907 19.4257 29.5931V32.2826C19.4257 32.827 19.2023 33.3619 18.8164 33.7492L17.3064 35.2592C17.0789 35.4867 16.9651 35.7995 16.9895 36.1164C17.0139 36.4333 17.1832 36.7204 17.4445 36.9032L19.0195 38.0177C19.5693 38.3996 19.8956 39.0333 19.8956 39.7064V43.6987C19.8956 44.3474 20.1773 44.9622 20.6689 45.3874C21.1537 45.8032 21.7983 45.9873 22.4267 45.8925C23.6847 45.6894 25.1906 45.2736 27.0132 44.6196C27.0674 44.5993 27.1215 44.5898 27.1811 44.5898L27.1925 44.5826Z" fill="#0095B6" stroke="#0095B6"/>
<path d="M27.1869 45.573C26.9838 45.573 26.7901 45.4444 26.721 45.2413C26.6317 44.984 26.7657 44.7009 27.023 44.6075C28.3745 44.1322 29.7572 43.5729 31.049 43.038C31.3022 42.9337 31.5893 43.0529 31.6977 43.3048C31.8019 43.558 31.6828 43.8451 31.4309 43.9534C30.1281 44.4938 28.7265 45.0585 27.3546 45.5433C27.3005 45.5636 27.2463 45.5731 27.1908 45.5731L27.1869 45.573Z" fill="#0095B6" stroke="#0095B6"/>
<path d="M30.1488 36.4661C29.9308 36.4661 29.7371 36.3225 29.6735 36.114C28.9558 33.7523 27.1127 31.9147 24.751 31.1915C24.5425 31.1265 24.3989 30.9342 24.3989 30.7162C24.3989 30.4982 24.5425 30.3045 24.751 30.2409C27.1128 29.5231 28.9503 27.6801 29.6697 25.3184C29.7347 25.1098 29.927 24.9663 30.145 24.9663C30.363 24.9663 30.5567 25.1099 30.6203 25.3184C31.3381 27.6801 33.1811 29.5177 35.539 30.2409C35.7475 30.3059 35.8911 30.4982 35.8911 30.7162C35.8911 30.9342 35.7475 31.1279 35.539 31.1915C33.1773 31.9093 31.3397 33.7523 30.6165 36.114C30.5515 36.3226 30.3592 36.4661 30.1412 36.4661H30.1488ZM26.2556 30.7216C27.9538 31.5437 29.3256 32.9155 30.1488 34.619C30.9708 32.9208 32.3426 31.5436 34.042 30.7216C32.3438 29.8996 30.972 28.5278 30.1488 26.8285C29.3268 28.5321 27.955 29.9039 26.2556 30.7216Z" fill="#0095B6" stroke="#0095B6"/>
<path d="M34.4783 27.1204C34.2602 27.1204 34.0666 26.9768 34.0029 26.7683C33.5669 25.3423 32.4578 24.2278 31.0264 23.7917C30.8179 23.7267 30.6743 23.5344 30.6743 23.3164C30.6743 23.0984 30.8179 22.9047 31.0264 22.8411C32.4524 22.405 33.5669 21.2959 34.0029 19.8645C34.0679 19.656 34.2602 19.5125 34.4783 19.5125C34.6963 19.5125 34.89 19.656 34.9536 19.8645C35.3897 21.2905 36.4987 22.405 37.9301 22.8411C38.1387 22.9061 38.2822 23.0984 38.2822 23.3164C38.2822 23.5344 38.1387 23.7281 37.9301 23.7917C36.5041 24.2278 35.3897 25.3369 34.9536 26.7683C34.8886 26.9768 34.6963 27.1204 34.4783 27.1204ZM32.4226 23.3218C33.2839 23.8066 33.9921 24.5203 34.4783 25.3775C34.9631 24.5162 35.6767 23.808 36.534 23.3218C35.6727 22.837 34.9645 22.1233 34.4783 21.2661C33.9935 22.1274 33.2798 22.8356 32.4226 23.3218Z" fill="#0095B6" stroke="#0095B6"/>
<defs>
<filter id="filter0_f_1290_2360" x="-38.2" y="-38.2" width="141.4" height="141.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="24.6" result="effect1_foregroundBlur_1290_2360"/>
</filter>
</defs>
</svg>
      )
    },
    {
      title: "GPU Efficiency",
      description: "Optimize AI/ML workloads with dynamic GPU provisioning.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      )
    },
    {
      title: "Multi-Cloud Freedom",
      description: "Break free from vendor lock-in with true hybrid orchestration.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      )
    },
    {
      title: "Edge Readiness",
      description: "Deploy workloads closer to users with ultra-low latency.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-black text-white selection:bg-cyan-500/30">
    
      {/* SECTION 2: */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-medium lg:text-[64px] ">Built on Four Core Pillars</h2>
          <p className="text-white text-lg lg:text-[20px] font-normal">What sets Coredge apart in the sovereign cloud landscape</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div 
              key={i} 
              className="bg-[#060606] border border-[#3f3f3f]/50 rounded-xl p-8 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-[#060606] rounded-lg flex items-center justify-center mb-10 border border-[#3f3f3f]/50 transition-colors">
                {/* <svg className="w-6 h-6 text-cyan-400 fill-current" viewBox="0 0 24 24">
                  {pillar.icon}
                </svg> */}
              </div>
              <h3 className="text-2xl font-semibold lg:text-[32px] text-white mb-4">{pillar.title}</h3>
              <p className="text-white font-normal lg:text-[20px] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Corepiller;