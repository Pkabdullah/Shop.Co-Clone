"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
const ScrollCounter = ({ end, label }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [shouldCount, setShouldCount] = useState(false);

  useEffect(() => {
    if (inView) setShouldCount(true);
    else setShouldCount(false);
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-col justify-center items-center">
      <div className="text-4xl font-semibold text-black md:text-[35px]">
        {shouldCount ? <CountUp end={end} duration={2.5} /> : '0'}+
      </div>
      <div className="mt-1 text-sm font-medium text-gray-500">{label}</div>
    </div>
  );
};

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="overflow-hidden relative pt-10 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[600px] py-8 lg:py-0">


          <div className="z-10 flex-1 mb-12 lg:pr-16 lg:mb-0" data-aos="fade-right" >


            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-[0.9] mb-6 tracking-tight">
              FIND CLOTHES<br />
              THAT MATCHES<br />
              YOUR STYLE
            </h1>


            <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-500 lg:text-lg">
              Browse through our diverse range of meticulously crafted garments, designed
              to bring out your individuality and cater to your sense of style.
            </p>


            <button className="px-10 py-3 mb-12 w-full text-base font-medium text-white bg-black rounded-full transition-colors hover:bg-gray-800 sm:w-auto">
              Shop Now
            </button>


            <div className="flex flex-col gap-6 sm:flex-row lg:gap-8">
              <div className="text-center sm:text-left">
                <div className="mb-1 text-3xl font-bold text-black lg:text-4xl">

                  <ScrollCounter end={200} label="" />
                </div>
                <div className="text-sm text-gray-500">International Brands</div>
              </div>
              <div className="hidden mx-4 w-px bg-gray-300 sm:block"></div>
              <div className="text-center sm:text-left">
                <div className="mb-1 text-3xl font-bold text-black lg:text-4xl">                  <ScrollCounter end={2000} label="" /></div>
                <div className="text-sm text-gray-500">High-Quality Products</div>
              </div>
              <div className="hidden mx-4 w-px bg-gray-300 sm:block"></div>
              <div className="text-center sm:text-left">
                <div className="mb-1 text-3xl font-bold text-black lg:text-4xl">                  <ScrollCounter end={3000} label="" /></div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image and Decorations */}
          <div className="relative flex-1 w-full lg:w-auto">

            {/* Star - Top Right */}
            <div className="absolute top-4 right-4 z-20 lg:top-10 lg:right-10 animate-spinSlow">
              <div className="w-12 h-12 lg:w-16 lg:h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                  <path d="M50,0 L61.8,38.2 L100,50 L61.8,61.8 L50,100 L38.2,61.8 L0,50 L38.2,38.2 Z" />
                </svg>
              </div>
            </div>


            {/* Star - Left Middle */}
            <div className="absolute -left-4 top-1/2 z-20 transform -translate-y-1/2 lg:-left-8 lg:top-1/2 animate-spinReverse">
              <div className="w-8 h-8 lg:w-10 lg:h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                  <path d="M50,0 L61.8,38.2 L100,50 L61.8,61.8 L50,100 L38.2,61.8 L0,50 L38.2,38.2 Z" />
                </svg>
              </div>
            </div>


            {/* Hero Image */}
            <div className="relative mx-auto max-w-md lg:max-w-lg xl:max-w-xl" data-aos="fade-up-left">
              <div className="aspect-[4/5]  overflow-hidden ">

                <img src="/images/header-homepage.png" alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between p-10 bg-black">
        <img src="/icons/versace-logo.svg" alt="" />
        <img src="/icons/zara-logo.svg" alt="" />
        <img src="/icons/gucci-logo.svg" alt="" />
        <img src="/icons/prada-logo.svg" alt="" />
        <img src="/icons/calvin-klein-logo.svg" alt="" />

      </div> */}
      <div className="overflow-hidden py-4 bg-black">
  <div className="flex animate-marquee w-[200%]">
    <div className="flex gap-12 items-center w-1/2">
      <img src="/icons/versace-logo.svg" alt="Versace" className="h-8" />
      <img src="/icons/zara-logo.svg" alt="Zara" className="h-8" />
      <img src="/icons/gucci-logo.svg" alt="Gucci" className="h-8" />
      <img src="/icons/prada-logo.svg" alt="Prada" className="h-8" />
      <img src="/icons/calvin-klein-logo.svg" alt="CK" className="h-8" />
    </div>
    {/* Same content visually duplicated */}
    <div className="flex gap-12 items-center w-1/2">
      <img src="/icons/versace-logo.svg" alt="Versace" className="h-8" />
      <img src="/icons/zara-logo.svg" alt="Zara" className="h-8" />
      <img src="/icons/gucci-logo.svg" alt="Gucci" className="h-8" />
      <img src="/icons/prada-logo.svg" alt="Prada" className="h-8" />
      <img src="/icons/calvin-klein-logo.svg" alt="CK" className="h-8" />
    </div>
  </div>

  <style jsx>{`
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }

    .animate-marquee:hover {
      animation-play-state: paused;
    }

    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</div>

    </section>
  );
};

export default Hero;
