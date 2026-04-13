import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Text Content Area */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Our Identity</span>
            </div>
            
            <h2 className="text-5xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight text-left">
              Leading the Digital Revolution <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 italic">
                from the Heart of Banda.
              </span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl text-left">
              <p>
                <strong className="text-blue-900">The Flying Bird Softtech</strong> is a forward-thinking technology firm dedicated to empowering businesses with smart digital solutions.<strong className="text-gray-900 font-bold underline decoration-blue-500 decoration-4"></strong>, we bridge the gap between complex business problems and intuitive software design.
              </p>
              
              <p className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-900 text-sm italic">
                We specialize in creating tools for growth, from automating office operations with our <strong>Tally-integrated OMS</strong> to developing high-impact <strong>Government GIS Survey applications</strong> and <strong>Smart Property Finder</strong> tools.
              </p>

              <p className="text-base">
                Our current focus includes a groundbreaking <span className="text-blue-700 font-bold">AI Mental Health Companion</span>, designed to provide empathetic support and fight loneliness through conversational intelligence. 
              </p>
            </div>

            {/* Vision & Mission Mini-Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white mb-4">🔭</div>
                <h5 className="font-black text-gray-900 text-xs uppercase tracking-widest">Our Vision</h5>
                <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                  To become a global leader in providing innovative and empathetic AI-driven solutions that solve real human problems.
                </p>
              </div>
              <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white mb-4">🎯</div>
                <h5 className="font-black text-gray-900 text-xs uppercase tracking-widest">Our Mission</h5>
                <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                  Delivering customizable, fast, and reliable software that improves productivity and simplifies complex operations.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual/Stats Section (Premium Bento Card) */}
          <div className="relative">
            <div className="bg-[#001f3f] rounded-[3rem] p-12 text-white relative z-10 shadow-[0_30px_60px_-15px_rgba(0,31,63,0.3)] border border-blue-800 overflow-hidden">
              {/* Abstract pattern bg */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              <h3 className="text-3xl font-bold mb-12 italic leading-tight relative z-10 text-left">
                "Innovation is not just about technology; it's about solving <span className="text-blue-400 underline">real human problems</span>."
              </h3>
              
              <div className="space-y-10 relative z-10">
                <div className="flex items-center gap-6 group">
                  <div className="text-5xl font-black text-blue-500/80 group-hover:text-blue-400 transition-colors">100%</div>
                  <div className="text-left">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">Client Focus</div>
                    <p className="text-[10px] opacity-60 font-medium">Reliable support & precision delivery.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="text-5xl font-black text-blue-500/80 group-hover:text-blue-400 transition-colors italic">Banda</div>
                  <div className="text-left">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">Our Roots</div>
                    <p className="text-[10px] opacity-60 font-medium">Proudly engineered in Uttar Pradesh, India.</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="text-5xl font-black text-blue-500/80 group-hover:text-blue-400 transition-colors">Expert</div>
                  <div className="text-left">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">Tech-Led</div>
                    <p className="text-[10px] opacity-60 font-medium">Driven by professional Software Engineers.</p>
                  </div>
                </div>
              </div>

              {/* Decorative badge */}
              <div className="mt-12 pt-8 border-t border-blue-800/50 flex justify-between items-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-blue-500">Established 2026</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-700"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                </div>
              </div>
            </div>

            {/* Background Decorative Box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-100 rounded-[3rem] -z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;