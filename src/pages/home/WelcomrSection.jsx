import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 25, suffix: '+', label: 'Years Experience' },
  { number: 5000, suffix: '+', label: 'Happy Clients' },
  { number: 98, suffix: '%', label: 'Success Rate' },
  { number: 24, suffix: '/7', label: 'Support Available' },
];

const Counter = ({ target, suffix, active }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count}{suffix}</>;
};

const WelcomeSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-16 sm:py-20 lg:py-24 bg-white transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#133f77]/8 text-[#133f77] text-[0.68rem] font-[Poppins] font-semibold tracking-[0.15em] uppercase" style={{background:'rgba(19,63,119,0.08)'}}>
            Who We Are
          </span>
          <h2 className="font-[Cormorant_Garamond] font-bold text-[clamp(1.9rem,4vw,3rem)] text-gray-900 tracking-tight mb-4">
            Welcome to Easy To Compliance
          </h2>
          <div className="w-14 h-[3px] mx-auto rounded-full mb-5" style={{background:'linear-gradient(90deg,#133f77,rgba(19,63,119,0.3))'}} />
          <p className="font-[Poppins] font-light text-gray-600 text-[clamp(0.82rem,1.4vw,0.95rem)] leading-[1.9] text-justify max-w-3xl mx-auto">
            With years of experience in tax and regulatory compliance, Easy to Compliance has helped thousands
            of individuals and businesses manage filings, documentation, and legal requirements with ease and
            confidence. Our team provides personalized solutions to ensure accurate filings, timely submissions,
            and complete adherence to all tax and regulatory requirements.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`relative text-center p-6 rounded-2xl border border-[#133f77]/10 bg-gradient-to-br from-[#f8faff] to-white
                hover:-translate-y-1 hover:shadow-xl hover:border-[#133f77]/25 transition-all duration-300 overflow-hidden
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${idx * 120 + 200}ms`, transitionDuration: '500ms' }}
            >
              {/* Top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] transition-transform duration-700 origin-left ${visible ? 'scale-x-100' : 'scale-x-0'}`}
                style={{ background: 'linear-gradient(90deg,#133f77,rgba(19,63,119,0.3))', transitionDelay: `${idx * 120 + 500}ms` }}
              />
              <div className="font-[Cormorant_Garamond] font-bold text-[#133f77] text-[clamp(2rem,4vw,2.8rem)] leading-none mb-1">
                <Counter target={stat.number} suffix={stat.suffix} active={visible} />
              </div>
              <div className="font-[Poppins] font-500 text-gray-500 text-[0.72rem] uppercase tracking-widest">
                {stat.label}
              </div>
              <div className="w-7 h-[2px] mx-auto mt-2 rounded-full bg-[#133f77]/25" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;