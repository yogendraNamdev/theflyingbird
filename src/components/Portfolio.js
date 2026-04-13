import React from 'react';

const Portfolio = () => {
  const projects = [
    { name: "OMS Enterprise", client: "Agri-Tech Partner", tags: ["ERP", "Tally Sync"] },
    { name: "Jewel-Track", client: "Banda Jewellers", tags: ["Inventory", "POS"] },
    { name: "Salary Pro", client: "RK Garments", tags: ["Payroll", "Attendance"] },
    { name: "V-Marketing CRM", client: "Vtel Marketing", tags: ["Leads", "Automation"] },
    { name: "Stock-Sync", client: "Aggarwal Traders", tags: ["Warehouse", "Stock"] },
    { name: "Clinic-Flow", client: "LifeCare Hospital", tags: ["HMS", "Billing"] },
    { name: "Daily Register", client: "Modern Book Store", tags: ["Accounts", "GST"] },
    { name: "Dairy-Tech", client: "Banda Milk Union", tags: ["Collection", "ERP"] }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Our Impact</span>
        <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Selected <span className="text-blue-600 italic">Works.</span></h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex w-max animate-portfolio-scroll whitespace-nowrap gap-8 px-4">
        {/* Double the array for seamless looping */}
        {[...projects, ...projects].map((p, i) => (
          <div key={i} className="inline-block w-[350px] bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-3xl group-hover:scale-110 transition-transform">📁</span>
              <span className="text-[10px] bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-black uppercase tracking-widest">Active Project</span>
            </div>
            <h4 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">{p.name}</h4>
            <p className="text-blue-600 text-[10px] font-black uppercase mb-6 tracking-widest">{p.client}</p>
            
            <div className="flex gap-2 flex-wrap">
              {p.tags.map(t => (
                <span key={t} className="text-[9px] bg-gray-100 text-gray-500 px-3 py-1 rounded-md font-bold uppercase border border-gray-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Keyframes for Portfolio Scroll */}
      <style jsx>{`
        @keyframes portfolio-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-portfolio-scroll {
          animation: portfolio-scroll 40s linear infinite;
        }
        .animate-portfolio-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;