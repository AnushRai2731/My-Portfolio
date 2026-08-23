import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 23;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform pointer-events-none ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'
      }`}
    >
      <button 
        onClick={scrollToTop}
        aria-label="Scroll to top" 
        className="group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer active:scale-95 transition-transform duration-200 pointer-events-auto"
      >
        <svg viewBox="0 0 52 52" className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
          <circle cx="26" cy="26" r={radius} className="stroke-white/15 fill-none" strokeWidth="3"></circle>
          <circle 
            cx="26" 
            cy="26" 
            r={radius} 
            className="stroke-[#00d2ff] fill-none transition-all duration-150 ease-out" 
            strokeWidth="3" 
            strokeDasharray={circumference} 
            strokeDashoffset={strokeDashoffset} 
            strokeLinecap="round"
          ></circle>
        </svg>
        <div className="w-9 h-9 rounded-full bg-[#070B14] backdrop-blur-md border border-white/20 flex items-center justify-center text-[#00d2ff] group-hover:bg-[#00d2ff] group-hover:text-black group-hover:shadow-[0_0_20px_#00d2ff] transition-all duration-300 relative z-10 shadow-lg">
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
        <span className="absolute right-14 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-black/80 text-[10px] font-bold text-white uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-white/10 shadow-lg">
          Back to Top ({Math.round(scrollProgress)}%)
        </span>
      </button>
    </div>
  );
}
