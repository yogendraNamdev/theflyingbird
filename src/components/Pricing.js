import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Support",
      price: "1,499",
      period: "One Time",
      desc: "Perfect for single installation & basic setup.",
      features: ["Standard Installation", "System Configuration", "Basic Training", "7-Day Support Call"],
      button: "Buy Setup",
      popular: false
    },
    {
      name: "Salary Pro",
      price: "5,999",
      period: "Yearly",
      desc: "Advanced payroll & attendance for SMEs.",
      features: ["Automated Salary Slips", "Excel/PDF Exports", "Overtime Tracking", "Priority WhatsApp Support"],
      button: "Get Started",
      popular: true
    },
    {
      name: "OMS Enterprise",
      price: "11,000",
      period: "Yearly",
      desc: "Full Tally integrated ERP for big offices.",
      features: ["Full Tally Integration", "Employee Portal", "Advanced CRM", "Dedicated Manager Support"],
      button: "Go Enterprise",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-28 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Transparent Pricing</h4>
          <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-6">
            Invest in <span className="text-blue-800 italic">Growth.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm font-medium">
            No hidden costs. Enterprise-grade software solutions designed for global standards.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-[3rem] transition-all duration-500 ${
                plan.popular 
                ? 'bg-[#001f3f] text-white shadow-2xl scale-105 z-10 border-4 border-blue-500' 
                : 'bg-gray-50 text-gray-900 border border-gray-100 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h5 className={`text-xs font-black uppercase tracking-[0.2em] mb-4 ${plan.popular ? 'text-blue-400' : 'text-blue-600'}`}>
                  {plan.name}
                </h5>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter">₹{plan.price}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${plan.popular ? 'text-gray-400' : 'text-gray-400'}`}>
                    / {plan.period}
                  </span>
                </div>
                <p className={`mt-4 text-xs font-medium leading-relaxed ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className={`text-lg ${plan.popular ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                    <span className={`text-[11px] font-bold uppercase tracking-tight ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                plan.popular 
                ? 'bg-blue-500 text-white hover:bg-blue-400 shadow-[0_10px_30px_rgba(59,130,246,0.4)]' 
                : 'bg-blue-900 text-white hover:bg-black'
              }`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h6 className="text-blue-900 font-black text-xs uppercase tracking-widest">Need a Custom Solution?</h6>
            <p className="text-gray-500 text-[11px] mt-1">We build tailored GIS, Hospital ERP, and AI Agents for your specific needs.</p>
          </div>
          <a href="tel:9554605829" className="bg-white text-blue-900 px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-200 hover:bg-blue-900 hover:text-white transition-all">
            Call for Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;