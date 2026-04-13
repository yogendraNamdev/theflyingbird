import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Shuryansh Gupta",
      role: "Marketing Specialist",
      desc: "Driving growth and global brand strategy.",
      icon: "📈",
      color: "from-blue-500/20"
    },
    {
      name: "Akansha Tiwari",
      role: "Accountant",
      desc: "Managing financial operations and fiscal planning.",
      icon: "📊",
      color: "from-green-500/20"
    },
    {
      name: "Shivam Gupta",
      role: "Python Developer",
      desc: "Expert in AI automation and backend logic.",
      icon: "🐍",
      color: "from-yellow-500/20"
    },
    {
      name: "Praveen Kumar",
      role: "Dot Net Developer",
      desc: "Specialist in enterprise-grade C# applications.",
      icon: "🔷",
      color: "from-purple-500/20"
    }
  ];

  return (
    <section id="team" className="py-28 bg-[#f8faff] px-6 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">The Core Squad</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tighter">
            Meet the <span className="text-blue-800 italic">Visionaries.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium">
            A diverse team of experts dedicated to pushing the boundaries of technology from the heart of Banda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Animated Background Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${member.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="text-4xl mb-6 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-sm">
                  {member.icon}
                </div>
                
                <h3 className="text-xl font-black text-gray-900 tracking-tighter uppercase mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">
                  {member.desc}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;