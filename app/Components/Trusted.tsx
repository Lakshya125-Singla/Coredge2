'use client';

const logos = [
  "/Trusted-logo1.png",
  "/Trusted-logo2.png",
  "/Trusted-logo3.png",
  "/Trusted-logo4.png",
  "/Trusted-logo5.png",
];

export default function Trusted() {
  return (
    <section className="py-20 border-t bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="lg:text-[44px] text-[34px] md:leading-12
                       md:text-[40px] xl:text-[54px] 2xl:text-[64px] font-semibold  text-[#fff]">
                 Trusted by leading enterprises
        </h2>

        <div className="mt-16 flex flex-wrap md:flex-wrap lg:flex-wrap gap-10  size-lg justify-center items-center">
          {logos.map((logo) => (
            <img
              key={logo}
              src={logo}
              alt=""
              className="h-20 md:h-16 lg:h-20 xl:h-24 2xl:h-32 w-auto hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
