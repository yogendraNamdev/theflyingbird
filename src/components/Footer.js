import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#000d1a] text-white pt-24 pb-12 px-8 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[150px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-12 text-left">
          
          {/* 1. Brand Identity Section */}
          <div className="space-y-8">
            <h4 className="text-3xl font-black tracking-tighter italic">
              THE FLYING BIRD <br/>
              <span className="text-blue-500 not-italic uppercase text-sm tracking-[0.3em]">Softtech</span>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading engineering firm specializing in High-Performance Systems and Scalable Architecture for businesses in Banda.
            </p>
          </div>

          {/* 2. Contact Hub */}
          <div className="space-y-8">
            <h5 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Contact Hub</h5>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4 group">
                <span className="text-xl">📍</span>
                <span className="text-gray-300 leading-snug">Dheeraj Nagar, Banda, <br/><span className="text-white font-bold">Uttar Pradesh</span></span>
              </li>
              <li className="flex gap-4 items-center group">
                <span className="text-xl">📞</span>
                <a href="tel:9554605829" className="text-gray-300 hover:text-white transition-colors font-medium">+91 9554605829</a>
              </li>
              <li className="flex gap-4 items-center group">
  <span className="text-xl">📧</span>
  <a 
    href="mailto:theflyingbirdsofttech@gmail.com" 
    className="text-gray-300 hover:text-white transition-colors text-[13px] font-semibold lowercase break-all tracking-wide"
  >
    theflyingbirdsofttech@gmail.com
  </a>
</li>
            </ul>
          </div>

          {/* 3. Leadership Section */}
          <div className="space-y-8">
            <h5 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Leadership</h5>
            <div className="group">
              <p className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-blue-400 transition-colors">Yogendra Namdev</p>
              <p className="text-blue-500 text-[10px] font-black tracking-widest uppercase mt-1">Senior Software Engineer</p>
              <div className="w-12 h-1 bg-blue-900 mt-4 group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>

          {/* 4. Support Offer */}
          <div className="space-y-6">
            <h5 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Quick Start</h5>
            <div className="bg-gradient-to-br from-blue-900/40 to-black p-6 rounded-[2rem] border border-blue-800/50 shadow-2xl relative group overflow-hidden">
              <p className="text-[10px] text-blue-300 uppercase font-black tracking-widest mb-2">Support Rate</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">₹1,499</span>
                <span className="text-[10px] text-gray-500 line-through">₹2,999</span>
              </div>
              <p className="text-[9px] text-gray-400 mt-3 italic">Enterprise-grade setup support.</p>
            </div>
          </div>

        </div>

        {/* --- GOOGLE MAP (Full Width) --- */}
        <div className="w-full mb-16 rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 h-64 relative z-10 shadow-2xl">
          <iframe 
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115160.2783281223!2d80.25206275!3d25.48151275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990370000000001%3A0xc3f9f468200f6815!2sBanda%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712880000000!5m2!1sen!2sin" 
            className="w-full h-full border-0"
            allowFullScreen="" 
            loading="lazy" 
          ></iframe>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-gray-500 font-black uppercase tracking-[0.3em]">
            © 2026 THE FLYING BIRD SOFTTECH. <span className="text-blue-900 mx-2">|</span> ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Sitemap'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[9px] text-gray-400 font-black uppercase hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;