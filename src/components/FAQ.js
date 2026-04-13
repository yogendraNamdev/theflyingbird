import React from 'react';

const FAQ = () => {
  const faqs = [
    { q: "Do you provide AMC for software?", a: "Yes, we offer yearly maintenance contracts (AMC) to ensure 99.9% uptime and immediate technical support." },
    { q: "Can your OMS sync with Tally?", a: "Absolutely. Our Office Management Systems are built with seamless Tally and Excel integration for effortless accounting." },
    { q: "Do you build custom Android/iOS apps?", a: "Yes, we specialize in high-performance native and cross-platform mobile applications tailored to your business needs." },
    { q: "What is your typical project timeline?", a: "Depending on complexity, most enterprise projects go live within 4 to 8 weeks with agile weekly updates." }
  ];

  return (
    <section id="faq" className="py-24 bg-[#fcfcfc] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Help Center</span>
          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter italic">Common <span className="text-blue-600">Queries.</span></h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <summary className="font-black text-sm uppercase tracking-widest list-none flex justify-between items-center text-gray-800">
                {faq.q} 
                <span className="text-blue-600 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="mt-6 pt-6 border-t border-gray-50">
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;