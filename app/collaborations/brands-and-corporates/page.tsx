export default function Collaborations() {
  return (
    <div className="w-full px-6 md:px-10 lg:px-16 pb-20 pt-[140px] md:pt-[170px]">
      
      {/* Header section */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Elevate your brand with us.
          </h1>
          <h2 className="text-2xl font-bold mb-6">Brands and Corporate collaborations.</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We partner with global brands and companies to translate complex achievements and corporate visions into high-end, cinematic visual campaigns.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Our style is clean, modern, and highly professional, but we never lose sight of the human side of the story. We know how to film inside a spotless laboratory just as well as we capture the emotional journey of a patient. The result is a video that respects industry rules while building deep trust with your audience. Let's work together to make your work feel human, clear, and unforgettable.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-[#eab308] text-black font-semibold rounded hover:bg-yellow-500 transition-colors">
            Contact Us
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
             <img src="/brand-1.png" alt="Brand Collaboration" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <div className="space-y-24">
        
        {/* Blenders Pride */}
        <section>
           <h3 className="text-3xl font-bold mb-8">Blenders Pride Fashion Show Falaknuma Palace (2018)</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
             <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
               <img src="/blender-1.png" className="w-full h-auto object-contain rounded-xl border border-white/10 shadow-lg" alt="Fashion" />
             </div>
             <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
               <img src="/blender-2.png" className="w-full h-auto object-contain rounded-xl border border-white/10 shadow-lg" alt="Fashion" />
             </div>
             <div className="col-span-2 md:col-span-2 flex flex-col justify-center">
               <img src="/blender-5.png" className="w-full h-auto object-contain rounded-xl border border-white/10 shadow-lg" alt="Fashion" />
             </div>
             <div className="col-span-2 md:col-span-3 flex flex-col justify-center">
               <img src="/blender-3.png" className="w-full h-auto object-contain rounded-xl border border-white/10 shadow-lg" alt="Fashion" />
             </div>
             <div className="col-span-2 md:col-span-3 flex flex-col justify-center">
               <img src="/blender-4.png" className="w-full h-auto object-contain rounded-xl border border-white/10 shadow-lg" alt="Fashion" />
             </div>
           </div>
        </section>

        {/* Dukes */}
        <section>
           <h3 className="text-3xl font-bold mb-8">Dukes</h3>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             <img src="/duke-1.png" className="w-full h-auto aspect-[4/3] object-cover rounded-xl border border-white/10" alt="Cookies" />
             <img src="/duke-2.png" className="w-full h-auto aspect-[4/3] object-cover rounded-xl border border-white/10" alt="Cookies" />
             <img src="/duke-3.png" className="w-full h-auto aspect-[4/3] object-cover rounded-xl border border-white/10" alt="Cookies" />
             <img src="/duke-5.png" className="w-full h-auto aspect-[4/3] object-cover rounded-xl border border-white/10" alt="Cookies" />
             <img src="/duke-6.png" className="w-full h-auto aspect-[4/3] object-cover rounded-xl border border-white/10" alt="Cookies" />
             <img src="/duke-7.png" className="w-full h-auto aspect-[4/3] object-cover rounded-xl border border-white/10" alt="Cookies" />
           </div>
        </section>

        {/* Fashion Shoots */}
        <section>
           <h3 className="text-3xl font-bold mb-8">Fashion Shoots</h3>
           <div className="columns-2 md:columns-5 gap-4 space-y-4">
             <img src="/shoot-1.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Model" />
             <img src="/shoot-2.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Model" />
             <img src="/shoot-3.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Model" />
             <img src="/shoot-4.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Model" />
             <img src="/shoot-5.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Model" />
           </div>
        </section>

        {/* Industrial Shoots */}
        <section>
           <h3 className="text-3xl font-bold mb-8">Industrial Shoots</h3>
           <div className="columns-2 md:columns-3 gap-4 space-y-4">
             <img src="/industry-1.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Industrial" />
             <img src="/industry-2.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Industrial" />
             <img src="/industry-3.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Industrial" />
             <img src="/industry-4.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Industrial" />
             <img src="/industry-5.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Industrial" />
             <img src="/industry-6.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Industrial" />
             <img src="/industry-7.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Industrial" />
             <img src="/industry-8.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Industrial" />
             <img src="/industry-9.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Industrial" />
           </div>
        </section>
        
      </div>
    </div>
  );
}
