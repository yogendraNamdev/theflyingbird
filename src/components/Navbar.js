import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-[100] transition-all duration-500 px-6 py-5 ${
        scrolled ? 'translate-y-0' : 'translate-y-0'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 px-8 py-4 rounded-[2.5rem] ${
          scrolled 
          /* Changed bg-white/10 to bg-black/70 and added shadow-black/50 for visibility on white background */
          ? 'bg-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent'
        }`}
      >
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img 
              src={logoImg} 
              alt="Logo" 
              className="h-10 w-auto transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-110" 
            />
            <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="text-left">
            <h1 className="text-lg font-[1000] tracking-tighter leading-none text-white">
              THE FLYING BIRD
            </h1>
            <p className="text-[9px] tracking-[0.4em] font-black text-blue-400 uppercase">SOFTTECH</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="group relative text-[10px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <a 
            href="#contact"
            className="relative bg-blue-600 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest overflow-hidden group transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20"></div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 w-full h-screen bg-[#000d1a]/95 backdrop-blur-3xl transition-all duration-500 md:hidden z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-10 px-10">
          {navLinks.map((link, i) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black text-white uppercase tracking-tighter transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="mt-6 w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-600/30">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;