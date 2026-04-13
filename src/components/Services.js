import React from 'react';

const services = [
  {
    title: "OMS (Office Management System)",
    subtitle: "Tally Integrated & User Friendly",
    description: "Our flagship ERP solution designed for seamless business operations. Manage your entire office, from employee attendance to client databases, all from a single dashboard.",
    features: ["Real-time Attendance Management", "Automated Payroll Processing", "Advanced Client Management", "Seamless Tally Integration"],
    price: "₹11,000",
    unit: "/year",
    tag: "Best Seller",
    icon: "🏢",
    color: "blue"
  },
  {
    title: "Salary Management Pro",
    subtitle: "Precision & Export Ready",
    description: "A dedicated tool for flawless payroll management. Designed to eliminate manual errors and save time for HR departments. Track every penny with individual data insights.",
    features: ["Attendance & Overtime Tracking", "Auto Salary Slip Generation", "Individual Data Export", "Advance & Deduction Tracking"],
    price: "₹5,999",
    unit: "/year",
    tag: "Essential",
    icon: "💰",
    color: "green"
  },
  {
    title: "GIS Survey Solutions",
    subtitle: "Government Grade Technology",
    description: "Currently under development for high-impact Government of India survey projects. Utilizes advanced mapping and geo-spatial data analysis with 100% precision.",
    features: ["Real-time Geo-tagging", "Interactive Map Layers", "Digital Survey Forms", "Secure Cloud Storage"],
    price: "Govt. Grade",
    unit: "PROJ",
    tag: "In Development",
    icon: "🌍",
    color: "red"
  },
  {
    title: "Smart Property Finder",
    subtitle: "Real Estate Digitalization",
    description: "A revolutionary mobile platform. Users can find land details, calculate square footage, and check surrounding facilities like schools and hospitals in real-time.",
    features: ["Area & Sq. Ft Calculator", "Nearby Facility Discovery", "Satellite View Integration", "Dealer Dashboard"],
    price: "Upcoming",
    unit: "APP",
    tag: "Mobile App",
    icon: "🏠",
    color: "purple"
  },
  {
    title: "AI Mental Health Companion",
    subtitle: "The Future of Empathy",
    description: "An innovative AI platform designed to fight loneliness. Our custom AI agent provides a safe, empathetic conversational space to feel heard and supported 24/7.",
    features: ["Empathetic Conversational AI", "24/7 Emotional Support", "Total User Privacy", "Wellness Tracking"],
    price: "Innovation",
    unit: "LAB",
    tag: "Special Project",
    icon: "🧠",
    color: "cyan"
  },
  {
    title: "Hospital Management ERP",
    subtitle: "Digital Healthcare",
    description: "Comprehensive digital solution for healthcare providers to manage patient records, billing, and pharmacy operations with maximum efficiency.",
    features: ["Patient Records Management", "OPD & IPD Billing", "Pharmacy Integration", "Doctor Schedule Sync"],
    price: "₹15,000",
    unit: "START",
    tag: "New Launch",
    icon: "🏥",
    color: "emerald"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-[#f8faff] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-blue-600"></div>
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Our Portfolio</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tighter">
            Innovative <span className="text-blue-800 italic">Software Solutions.</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl text-lg font-medium">
            Empowering your business with high-end technology, engineered by <span className="text-blue-600">Yogendra Namdev</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,40,100,0.1)] transition-all duration-500 border border-gray-100 flex flex-col hover:-translate-y-2">
              
              <div className="p-10 flex-grow relative">
                {/* Floating Icon */}
                <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-blue-700 transition-colors uppercase tracking-tighter">
                      {item.title}
                    </h3>
                    <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="bg-blue-50 text-blue-700 text-[9px] font-black px-3 py-1 rounded-lg uppercase tracking-widest border border-blue-100">
                    {item.tag}
                  </span>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-8 font-medium">
                  {item.description}
                </p>

                <div className="space-y-3 mb-4">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span className="text-[11px] text-gray-600 font-bold uppercase tracking-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-10 py-8 bg-gray-50/50 border-t border-gray-50 flex justify-between items-center group-hover:bg-blue-900 transition-colors duration-500">
                <div className="flex items-baseline">
                  <span className="text-2xl font-black text-blue-900 group-hover:text-white transition-colors">{item.price}</span>
                  <span className="text-[10px] font-bold text-gray-400 ml-1 uppercase group-hover:text-blue-300">{item.unit}</span>
                </div>
                <button className="bg-white text-blue-900 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:scale-105 transition-transform active:scale-95">
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;