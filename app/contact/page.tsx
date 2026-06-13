export default function Contact() {
  return (
    <div className="w-full px-6 md:px-10 lg:px-16 pb-20 pt-[140px] md:pt-[170px] text-white">
      
      <h1 className="text-4xl md:text-[40px] lg:text-[46px] mb-8 font-black tracking-tight leading-tight max-w-2xl">
        Crafting visual stories that move people.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
        {/* Image Block */}
        <div className="w-full rounded-[24px] md:rounded-[32px] overflow-hidden relative border border-white/10 min-h-[400px] md:min-h-[500px]">
          <img src="/contact-us.png" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover object-top md:object-center" />
        </div>

        {/* Floating Form Container */}
        <div className="w-full">
          <div className="bg-[#facc15] text-black rounded-[24px] md:rounded-[32px] p-8 md:p-10 shadow-2xl flex flex-col justify-center h-full">
            <h2 className="text-[28px] md:text-[32px] font-extrabold mb-2 text-center md:text-left tracking-tight">Let us tell your story</h2>
            <p className="text-center md:text-left font-medium mb-8 text-[14px] opacity-80">Fill out the form below and I&apos;ll be in touch within 48 hours.</p>

            <form className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-[13px] font-bold mb-2 opacity-90">First Name</label>
                  <input type="text" placeholder="Rahul" className="w-full px-4 py-3 rounded-[10px] border-none focus:outline-none focus:ring-2 focus:ring-black/50 bg-white placeholder-gray-400 text-black shadow-sm font-medium" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold mb-2 opacity-90">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-[10px] border-none focus:outline-none focus:ring-2 focus:ring-black/50 bg-white placeholder-gray-400 text-black shadow-sm font-medium" />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold mb-2 opacity-90">Email Address</label>
                <input type="email" placeholder="jane@example.com" className="w-full px-4 py-3 rounded-[10px] border-none focus:outline-none focus:ring-2 focus:ring-black/50 bg-white placeholder-gray-400 text-black shadow-sm font-medium" />
              </div>

              <div>
                <label className="block text-[13px] font-bold mb-2 opacity-90">Tell me about your vision</label>
                <textarea 
                  rows={4} 
                  placeholder="I'm interested in collaborating with you on my project." 
                  className="w-full px-4 py-3 rounded-[10px] border-none focus:outline-none focus:ring-2 focus:ring-black/50 bg-white placeholder-gray-400 text-black resize-none shadow-sm font-medium"
                ></textarea>
              </div>

              <div className="pt-2 flex md:justify-center">
                <button type="submit" className="w-full md:w-auto px-8 md:px-12 py-3.5 bg-[#1a1a1a] text-white font-bold rounded-[10px] hover:bg-black transition-colors shadow-md">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#1c1c1c] rounded-[24px] px-8 py-10 md:px-12 md:py-10 mx-auto w-full mb-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 text-left">
          <div>
            <h2 className="text-[40px] md:text-[44px] font-bold mb-1 tracking-tight text-white">30+</h2>
            <p className="text-[14px] text-gray-300">Years of industry experience</p>
          </div>
          <div>
            <h2 className="text-[40px] md:text-[44px] font-bold mb-1 tracking-tight text-white">50+</h2>
            <p className="text-[14px] text-gray-300">Global clients</p>
          </div>
          <div>
            <h2 className="text-[40px] md:text-[44px] font-bold mb-1 tracking-tight text-white">500+</h2>
            <p className="text-[14px] text-gray-300">Projects delivered Nationwide</p>
          </div>
          <div>
            <h2 className="text-[40px] md:text-[44px] font-bold mb-1 tracking-tight text-white">10+</h2>
            <p className="text-[14px] text-gray-300 max-w-[150px]">Govt Strategic Partnerships</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-12 w-full">
        <a href="https://www.google.com/maps/search/?api=1&query=410,+Madhapur,+Hyderabad,+Telangana,+India" target="_blank" rel="noopener noreferrer" className="bg-[#f2f2f2] text-black rounded-[24px] p-10 md:p-12 flex flex-col items-start border border-gray-200 shadow-sm min-h-[240px] hover:bg-[#e8e8e8] transition-colors cursor-pointer block">
          <svg className="w-12 h-12 mb-6 text-[#222]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <h3 className="text-[28px] md:text-[32px] font-black tracking-tight mb-2">Location</h3>
          <p className="text-[16px] md:text-[17px] font-medium text-[#444] leading-relaxed">410, Madhapur, Hyderabad, Telangana,<br className="hidden md:block"/> India</p>
        </a>
        
        <a href="mailto:redstarproductionshyd@gmail.com" className="bg-[#f2f2f2] text-black rounded-[24px] p-10 md:p-12 flex flex-col items-start border border-gray-200 shadow-sm min-h-[240px] hover:bg-[#e8e8e8] transition-colors cursor-pointer block">
          <svg className="w-12 h-12 mb-6 text-[#222]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <h3 className="text-[28px] md:text-[32px] font-black tracking-tight mb-2">Email</h3>
          <p className="text-[16px] md:text-[17px] font-medium text-[#444] leading-relaxed">redstarproductionshyd@gmail.com</p>
        </a>
        
        <a href="tel:+919603937000" className="bg-[#f2f2f2] text-black rounded-[24px] p-10 md:p-12 flex flex-col items-start border border-gray-200 shadow-sm min-h-[240px] hover:bg-[#e8e8e8] transition-colors cursor-pointer block">
          <svg className="w-11 h-11 mb-6 text-[#222] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
          <h3 className="text-[28px] md:text-[32px] font-black tracking-tight mb-2">Phone number</h3>
          <p className="text-[16px] md:text-[17px] font-medium text-[#444] leading-relaxed">+91 960 393 7000</p>
        </a>
      </div>

    </div>
  );
}
