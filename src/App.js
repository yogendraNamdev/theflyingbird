import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Innovation from './components/Innovation';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Portfolio from './components/Portfolio'; 
import FAQ from './components/FAQ';
import TechMarquee from './components/TechMarquee';
import StatusWidget from './components/StatusWidget';
import SocialSidebar from './components/SocialSidebar';

// --- 1. PREMIUM STATS BAR ---
const CompanyStats = () => (
  <section className="py-16 bg-[#001f3f] relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
      {[
        { label: 'Lines of Code', value: '2.5M+', icon: '💻' },
        { label: 'Happy Clients', value: '150+', icon: '🤝' },
        { label: 'Projects Live', value: '45+', icon: '🚀' },
        { label: 'Years Exp', value: '5+', icon: '🏆' }
      ].map((stat, i) => (
        <div key={i} className="text-center group">
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
          <h3 className="text-4xl font-black text-white tracking-tighter mb-1">{stat.value}</h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

// --- 2. THE ENGINEERING GRID ---
const EngineeringExpertise = () => {
  const expertise = [
    { title: 'Java', icon: '☕', color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
    { title: 'SpringBoot', icon: '🍃', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
    { title: 'Hibernate', icon: '💾', color: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-100' },
    { title: 'SQL', icon: '🗄️', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
    { title: 'Microservices', icon: '☁️', color: 'text-cyan-500', bg: 'bg-cyan-50', border: 'border-cyan-100' },
    { title: 'AI Agents', icon: '🤖', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
    { title: 'HLD', icon: '📊', color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' },
    { title: 'LLD', icon: '🧩', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' }
  ];

  return (
    <section className="py-28 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 text-left">
          <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Our Tech Stack</span>
          <h2 className="text-5xl font-black text-gray-900 mb-8 leading-tight">
            High-Performance <br/> <span className="text-blue-800 italic">Architecture.</span>
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-3xl border-l-8 border-blue-900 flex gap-5 items-start">
              <span className="text-2xl">⚙️</span>
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-sm tracking-widest">Multithreaded Systems</h4>
                <p className="text-gray-500 text-sm mt-1">Optimized for high concurrency and enterprise load handling.</p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-3xl border-l-8 border-green-600 flex gap-5 items-start">
              <span className="text-2xl">🏗️</span>
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-sm tracking-widest">Clean Code Design</h4>
                <p className="text-gray-500 text-sm mt-1">Robust LLD and HLD patterns for long-term project scalability.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
          {expertise.map((tech, i) => (
            <div key={i} className={`${tech.bg} ${tech.border} border p-8 rounded-[2rem] hover:shadow-xl transition-all duration-500 group text-center`}>
              <div className={`${tech.color} text-4xl mb-4 group-hover:scale-110 transition-transform`}>{tech.icon}</div>
              <p className="font-black text-gray-800 text-xs uppercase tracking-widest">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 3. PREMIUM TESTIMONIALS ---
const Testimonials = () => {
  const reviews = [
    { name: "Vtel Marketing & Communication", comment: "The Flying Bird Softtech transformed our digital workflow. Their expertise is unparalleled.", loc: "Marketing Partner" },
    { name: "Om Shakti Agri Biotech Pvt. Ltd", comment: "The OMS software has streamlined our operations significantly. Very impressed with the tech.", loc: "Agri-Tech Partner" },
    { name: "Banda Jewellers", comment: "Professional, fast, and reliable. Delivered a high-end solution at an affordable price.", loc: "Retail Partner" },
    { name: "RK Garments", comment: "Great experience! Their software is user-centric and very easy to manage.", loc: "Apparel Partner" }
  ];

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 italic">Trusted by Industry Leaders.</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 text-left">
              <div className="text-yellow-400 mb-4 text-xs font-bold tracking-tighter uppercase">★★★★★ Excellent</div>
              <p className="text-gray-600 italic text-sm mb-8 leading-relaxed">"{rev.comment}"</p>
              <hr className="mb-4 opacity-50" />
              <h5 className="font-black text-blue-900 text-[10px] uppercase tracking-widest">{rev.name}</h5>
              <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">{rev.loc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App font-sans antialiased text-gray-900 bg-[#fcfcfc] selection:bg-blue-900 selection:text-white overflow-x-hidden">
      <Navbar />
      <SocialSidebar /> {/* --- SIDEBAR ADDED --- */}
      <Hero />
      <CompanyStats />
      <About />
      <EngineeringExpertise /> 
      <TechMarquee />
      <Process />
      <Services />
      <Portfolio />
      <Pricing />   {/* --- PRICING SECTION ADDED --- */}
      <FAQ />
      <Team />      {/* --- TEAM SECTION --- */}
      <StatusWidget />
      <Testimonials /> 
      <ContactForm />
      <Innovation />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919554605829" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 bg-[#25D366] text-white px-8 py-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center gap-3 no-underline"
      >
        <span className="font-black text-[10px] uppercase tracking-[0.2em]">Live Consultation</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;