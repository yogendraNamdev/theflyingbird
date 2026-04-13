const Process = () => {
  const steps = [
    { num: "01", title: "Audit", desc: "Analyzing your manual workflow and pain points." },
    { num: "02", title: "Blueprint", desc: "Creating the architecture & database schema." },
    { num: "03", title: "Development", desc: "Writing clean, scalable code with weekly updates." },
    { num: "04", title: "Deployment", desc: "Launching your system with 24/7 AMC support." }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-black mb-20 uppercase tracking-tighter">Your <span className="text-blue-600">Roadmap</span> to Success.</h2>
        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gray-100 -z-0"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 px-4 text-center group">
              <div className="w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-black border-8 border-white group-hover:bg-blue-600 transition-colors shadow-xl">
                {s.num}
              </div>
              <h4 className="font-black text-sm uppercase mb-3 tracking-widest">{s.title}</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;