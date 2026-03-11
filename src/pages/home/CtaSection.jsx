import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative py-16 sm:py-20 lg:py-24 bg-[#133f77] overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      {/* Background radials */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full opacity-[0.06]" style={{background:'radial-gradient(circle,white,transparent)'}} />
        <div className="absolute bottom-0 right-[15%] w-56 h-56 rounded-full opacity-[0.05]" style={{background:'radial-gradient(circle,white,transparent)'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div className={`text-white text-center lg:text-left transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <span className="inline-block mb-4 px-4 py-1 rounded-full border border-white/20 bg-white/10 text-[0.68rem] font-[Poppins] font-semibold tracking-[0.15em] uppercase text-white/75">
              Free Offer
            </span>
            <h2 className="font-[Cormorant_Garamond] font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.1] tracking-tight mb-4">
              Maximize Your<br />
              <em className="text-white/70 not-italic">Tax Savings</em>
            </h2>
            <p className="font-[Poppins] font-light text-white/80 text-[0.88rem] leading-[1.8] mb-7 max-w-md mx-auto lg:mx-0">
              Get expert tax advice and save more with personalized consultation from our certified professionals.
            </p>
            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <Link to="/about">
                <button className="font-[Poppins] font-semibold text-sm px-6 py-3 bg-white text-[#133f77] rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  About Us
                </button>
              </Link>
              <Link to="/contact">
                <button className="font-[Poppins] font-medium text-sm px-6 py-3 border border-white/50 text-white rounded-lg hover:bg-white/15 hover:border-white hover:-translate-y-1 transition-all duration-300">
                  Call Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`flex justify-center lg:justify-end transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="w-full max-w-sm rounded-2xl p-7 border border-white/20" style={{background:'rgba(255,255,255,0.09)', backdropFilter:'blur(14px)'}}>
              <h3 className="font-[Cormorant_Garamond] font-bold text-white text-2xl mb-1">Free Consultation</h3>
              <p className="font-[Poppins] font-light text-white/60 text-xs mb-6">Fill in your details and we'll reach out</p>

              <div className="flex flex-col gap-3">
                {['Your Name', 'Email Address', 'Phone Number'].map((placeholder, i) => (
                  <input
                    key={i}
                    type={i === 1 ? 'email' : i === 2 ? 'tel' : 'text'}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-lg bg-white/75 text-gray-900 placeholder-gray-400 font-[Poppins] text-sm outline-none border border-transparent focus:border-white/80 focus:bg-white focus:shadow-[0_0_0_3px_rgba(255,255,255,0.18)] transition-all duration-300"
                  />
                ))}
                <button className="w-full py-3 mt-1 bg-white text-[#133f77] font-[Poppins] font-bold text-sm rounded-lg tracking-wide hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;