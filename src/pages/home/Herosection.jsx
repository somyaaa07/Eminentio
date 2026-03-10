import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      textRef.current?.classList.remove('opacity-0', 'translate-x-[-40px]');
      textRef.current?.classList.add('opacity-100', 'translate-x-0');
      imgRef.current?.classList.remove('scale-105');
      imgRef.current?.classList.add('scale-100');
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative w-full h-[360px] sm:h-[460px] md:h-[560px] lg:h-[640px] overflow-hidden">
      {/* BG Image */}
      <img
        ref={imgRef}
        src="/banner.png"
        alt="Tax consulting hero"
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#133f77]/90 via-[#133f77]/60 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div
            ref={textRef}
            className="text-white max-w-2xl opacity-0 translate-x-[-40px] transition-all duration-700 ease-out"
            style={{ transitionDelay: '200ms' }}
          >
            {/* Badge */}
            <span className="inline-block mb-4 px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-[0.68rem] font-semibold tracking-[0.15em] uppercase font-[Poppins]">
              Trusted Since 1999
            </span>

            {/* Title */}
            <h1 className="font-[Cormorant_Garamond] font-bold leading-[1.1] mb-5 text-[clamp(2rem,5vw,4rem)] tracking-tight">
              Expert Tax Solutions<br />
              <em className="text-white/70 not-italic">for Your Financial</em>
              <br />Success
            </h1>

            {/* Subtitle */}
            <p className="font-[Poppins] font-light text-white/85 leading-relaxed mb-7 text-[clamp(0.82rem,1.5vw,1rem)] max-w-md">
              Maximize your returns with professional tax planning and preparation services tailored to your needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <button className="group flex items-center gap-2 bg-white text-[#133f77] font-[Poppins] font-semibold text-sm px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link to="/about">
                <button className="font-[Poppins] font-medium text-sm px-6 py-3 rounded-lg border border-white/50 text-white hover:bg-white/15 hover:border-white hover:-translate-y-1 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;