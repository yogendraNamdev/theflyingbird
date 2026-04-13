import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#00050a] overflow-hidden px-6 pt-20">
      
      {/* 1. Floating Tech Orbit & Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/20 blur-[150px] rounded-full animate-bounce duration-[15s]"></div>
        
        {/* Floating Particles (Orbits) */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-indigo-500 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`, 
                      backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto text-center lg:text-left relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1">
          {/* Futuristic Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-10 shadow-2xl transition-all hover:bg-white/10 cursor-default">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-300">
              Engineering the Future
            </span>
          </div>

          {/* Ultra Bold Heading with Motion */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-[1000] leading-[0.95] tracking-[-0.05em] mb-10">
            <span className="text-white inline-block transform hover:translate-x-3 transition-transform duration-700 ease-out">Empowering</span> <br/>
            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 bg-clip-text text-transparent italic">Your business With Smart Digital Solution.</span>
          </h1>

          <p className="max-w-xl text-blue-100/50 text-lg md:text-xl font-medium leading-relaxed mb-12 lg:mx-0 mx-auto">
            We don't just build software; we engineer <span className="text-white">scalable digital legacies</span> from the heart of Banda.
          </p>

          {/* Magnetic-style Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-8">
            <a href="#services" className="magnetic-btn relative px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-full overflow-hidden group shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all duration-500 hover:scale-110 active:scale-95">
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            
            <a href="#portfolio" className="text-white font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-4 group transition-all">
              View Work 
              <span className="w-12 h-[1px] bg-blue-500 group-hover:w-24 group-hover:bg-white transition-all duration-500"></span>
            </a>
          </div>
        </div>

        {/* Visual "Code Box" Element */}
        <div className="flex-1 hidden lg:block perspective-1000">
          <div className="bg-white/5 border border-white/10 backdrop-blur-3xl p-8 rounded-[3rem] shadow-3xl relative overflow-hidden group transition-all duration-700 hover:rotate-y-12 hover:-translate-y-4">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.3)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
            </div>
            <code className="text-blue-200 text-sm font-mono block space-y-3">
              <p className="opacity-40 italic">{"// Local Innovation, Global Standards"}</p>
              <p><span className="text-pink-400">const</span> location = <span className="text-yellow-300">'Banda, UP'</span>;</p>
              <p><span className="text-pink-400">async function</span> buildSuccess() {"{"}</p>
              <p className="ml-4 text-white">await integrateAI();</p>
              <p className="ml-4 text-white">scaleArchitecture();</p>
              <p>{"}"}</p>
            </code>
            
            {/* Inner Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full group-hover:bg-blue-600/40 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;