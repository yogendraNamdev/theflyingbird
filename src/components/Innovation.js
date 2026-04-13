import React from 'react';

const Innovation = () => {
  const techStack = [
    { name: "Java / SpringBoot", icon: "☕" },
    { name: "React / TypeScript", icon: "⚛️" },
    { name: "SQL / Hibernate", icon: "💾" },
    { name: "AI / ML Agents", icon: "🤖" },
    { name: "System Design", icon: "🏗️" },
    { name: "Multithreading", icon: "⚙️" },
    { name: "LLD / HLD", icon: "📊" },
    { name: "Cloud Architect", icon: "☁️" },
    { name: "Microservices", icon: "🔌" }
  ];

  return (
    <section id="innovation" className="py-28 bg-[#000d1a] text-white relative overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 italic">
                Innovation & Engineering
              </span>
            </div>
            
            <h2 className="text-5xl font-black mb-8 leading-[1.1] tracking-tighter">
              Architecting Scalable <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100 italic">
                Enterprise Solutions.
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
              We specialize in <strong className="text-white">High-Level (HLD)</strong> and <strong className="text-white">Low-Level Design (LLD)</strong> to build robust systems that handle millions of requests. Our expertise in <span className="text-blue-400">Multithreading</span> ensures that your software is world-class in performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 font-black mb-4 group-hover:scale-110 transition-transform">AI</div>
                <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Autonomous AI Agents</h5>
                <p className="text-[11px] text-gray-500 leading-relaxed">Building next-gen agents for empathetic conversations and complex automation.</p>
              </div>
              
              <div className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-500">
                <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400 font-black mb-4 group-hover:scale-110 transition-transform">DS</div>
                <h5 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">System Architecture</h5>
                <p className="text-[11px] text-gray-500 leading-relaxed">Scalable backend structures using Java, SpringBoot, and Microservices architecture.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Tech Stack Bento Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, i) => (
              <div 
                key={i} 
                className="group relative bg-gradient-to-br from-white/5 to-transparent p-6 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 text-center overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500"></div>
                
                <div className="text-3xl mb-4 relative z-10 group-hover:scale-125 transition-transform duration-500">
                  {tech.icon}
                </div>
                <p className="text-[10px] font-black text-blue-200/60 group-hover:text-blue-200 uppercase tracking-widest relative z-10">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Innovation;