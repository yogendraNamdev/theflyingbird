import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact-form" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 text-left">
          
          <div className="lg:w-1/2">
            <h4 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 italic">Get in Touch</h4>
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              Ready to start your <br/>
              <span className="text-blue-800">Next Big Project?</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need a scalable Enterprise System, an AI Agent, or a custom ERP, our engineering team is ready to deliver.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">📍</div>
                <p className="text-sm font-medium text-gray-700">Banda, Uttar Pradesh, India</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">✉️</div>
                {/* Official Email Added */}
                <p className="text-sm font-medium text-gray-700 break-all">theflyingbirdsofttech@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-xl">
            {/* Formspree ID remains xpqovogg - Just fill form on website to test */}
            <form action="https://formspree.io/f/xpqovogg" method="POST" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none text-sm transition-all" placeholder="Name" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">Email Address</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none text-sm transition-all" placeholder="Email" />
                </div>
              </div>

              <div className="text-left">
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">Message</label>
                <textarea name="message" required rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none text-sm transition-all" placeholder="Tell us about your project requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20 uppercase tracking-widest text-xs">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;