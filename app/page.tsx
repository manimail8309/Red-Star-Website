export default function Home() {
  return (
    <>
      {/* Hero Container */}
      <div className="relative w-full flex flex-col md:flex-row bg-black overflow-hidden pt-[100px] md:pt-[120px] lg:pt-[140px] px-6 md:px-10 lg:px-16 items-center lg:items-end justify-between min-h-[750px] md:min-h-[850px]">
        
        {/* Hero Text Content */}
        <div className="relative z-10 w-full lg:w-[55%] flex flex-col justify-center h-full pb-[100px] md:pb-[150px] lg:pb-[200px] pt-10">
          <div className="max-w-full drop-shadow-md">
            <h2 className="text-xl md:text-[28px] font-semibold mb-4 text-white shadow-black/50 drop-shadow-lg">
              Hi, I&apos;m Mohammed Roshan
            </h2>
            <h1 className="text-[2.5rem] md:text-[60px] lg:text-[72px] font-bold leading-[1.05] mb-8 tracking-tight drop-shadow-xl">
              <span className="text-[#eab308]">Film maker /</span><br/>
              <span className="text-white">Director of Photography</span>
            </h1>
            <p className="text-gray-100 text-base md:text-[20px] mb-10 leading-relaxed max-w-[600px] font-medium drop-shadow-lg pb-2">
              Capturing documentaries, corporate films, promotional
              videos, 360 VR, Aerial Cinematography, product shoots,
              AI Films, Insta reels that connect with people.
            </p>
            <a href="/about" className="inline-block px-10 py-3.5 md:px-12 md:py-4 bg-[#eab308] text-black font-black text-[17px] md:text-[19px] rounded-xl hover:bg-yellow-400 transition-colors shadow-lg">
              About Us
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute right-0 bottom-0 w-full md:w-[70%] lg:w-[60%] h-[80%] md:h-[95%] lg:h-[105%] flex justify-end items-end z-[0] pointer-events-none pr-0 sm:pr-4 md:pr-10 lg:pr-16">
           <img 
            src="/Camera Man.png" 
            alt="Mohammed Roshan Background" 
            className="w-full h-full object-contain object-right-bottom scale-110 md:scale-110 lg:scale-[1.15] origin-bottom-right" 
          />
          {/* Subtle gradient to fade nicely into the dark background below if needed */}
          <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-black to-transparent"></div>
        </div>

      </div>

      <div className="w-full px-6 md:px-10 lg:px-16 pb-20 pt-16">
        {/* Worked with */}
        <section className="mb-24 overflow-hidden relative mt-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Worked with</h3>
          <div className="bg-[#1c1c1c] p-6 rounded-2xl border border-white/5 relative overflow-hidden flex group">
            
            {/* Fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1c1c1c] to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1c1c1c] to-transparent z-10 pointer-events-none rounded-r-2xl"></div>

            <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            
            {/* First Set */}
            <div className="flex gap-8 items-center px-6 shrink-0">
              <div className="bg-[#8b0000] px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-32 h-[72px]">
                <img src="/NDTV-logo-7695noll0a3o77rdn1v1rwygourz0x52k2w4poe7o00.png" alt="NDTV" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-32 h-[72px]">
                <img src="/ETVnewLogo.png" alt="ETV" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-40 h-[72px]">
                <img src="/TEN_GOLF_HD_logo.png" alt="TEN GOLF HD" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white px-2 py-2 rounded-lg flex items-center justify-center shrink-0 w-48 h-[72px]">
                <img src="/Corteva-Agriscience-Logo.png" alt="Corteva agriscience" className="max-h-full max-w-full object-contain scale-[1.35]" />
              </div>
              <div className="bg-white px-2 py-2 rounded-lg flex items-center justify-center shrink-0 w-40 h-[72px]">
                <img src="/infoedge logo.png" alt="infoedge" className="max-h-full max-w-full object-contain scale-[1.3]" />
              </div>
              <div className="bg-white px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-32 h-[72px]">
                <img src="/forbes logo.png" alt="Forbes" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white px-2 py-2 rounded-lg flex items-center justify-center shrink-0 w-40 h-[72px]">
                <img src="/nava limited logo.png" alt="NAVA LIMITED" className="max-h-full max-w-full object-contain scale-[1.2]" />
              </div>
              <div className="bg-white px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-40 h-[72px]">
                <img src="/Accenture-logo.png" alt="accenture" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-32 h-[72px]">
                <img src="/Times now-logo-.png" alt="TIMES NOW" className="max-h-full max-w-full object-contain" />
              </div>
            </div>

            {/* Second Set (Duplicate for seamless scroll) */}
            <div className="flex gap-8 items-center px-6 shrink-0">
              <div className="bg-[#8b0000] px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-32 h-[72px]">
                <img src="/NDTV-logo-7695noll0a3o77rdn1v1rwygourz0x52k2w4poe7o00.png" alt="NDTV" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-32 h-[72px]">
                <img src="/ETVnewLogo.png" alt="ETV" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-40 h-[72px]">
                <img src="/TEN_GOLF_HD_logo.png" alt="TEN GOLF HD" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white px-2 py-2 rounded-lg flex items-center justify-center shrink-0 w-48 h-[72px]">
                <img src="/Corteva-Agriscience-Logo.png" alt="Corteva agriscience" className="max-h-full max-w-full object-contain scale-[1.35]" />
              </div>
              <div className="bg-white px-2 py-2 rounded-lg flex items-center justify-center shrink-0 w-40 h-[72px]">
                <img src="/infoedge logo.png" alt="infoedge" className="max-h-full max-w-full object-contain scale-[1.3]" />
              </div>
              <div className="bg-white px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-32 h-[72px]">
                <img src="/forbes logo.png" alt="Forbes" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white px-2 py-2 rounded-lg flex items-center justify-center shrink-0 w-40 h-[72px]">
                <img src="/nava limited logo.png" alt="NAVA LIMITED" className="max-h-full max-w-full object-contain scale-[1.2]" />
              </div>
              <div className="bg-white px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-40 h-[72px]">
                <img src="/Accenture-logo.png" alt="accenture" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white px-5 py-3 rounded-lg flex items-center justify-center shrink-0 w-32 h-[72px]">
                <img src="/Times now-logo-.png" alt="TIMES NOW" className="max-h-full max-w-full object-contain" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Box - Placed ABOVE Shoot.Story.Screen as requested */}
      <section className="mb-24">
        <div className="w-full bg-[#1c1c1c] rounded-3xl p-3 border border-white/5">
          <div className="w-full aspect-[21/9] bg-[#eab308] rounded-[20px] flex items-center justify-center p-[2px]">
             <div className="w-full h-full bg-[#111] rounded-[18px] flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <span className="text-4xl font-bold tracking-widest absolute z-10 group-hover:scale-110 transition-transform duration-300">Video</span>
                <div className="absolute inset-0 bg-[#eab308]/10 group-hover:bg-[#eab308]/20 transition-colors"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Shoot. Story. Screen */}
      <section className="mb-24">
        <h3 className="text-5xl md:text-[56px] font-black mb-10 tracking-tighter">Shoot. Story.Screen</h3>
        <div className="grid grid-cols-1 gap-10">
          
          <div className="flex flex-col md:flex-row bg-[#2b2b2b] rounded-[24px] overflow-hidden border border-[#eab308] items-stretch min-h-[400px]">
             <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-[auto]">
               <img src="/industrial-visuals-1.png" alt="Industrial Visuals" className="absolute inset-0 w-full h-full object-cover object-center" />
             </div>
             <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center">
               <h4 className="text-4xl md:text-[44px] font-black mb-4 text-white tracking-tight">Industrial Visuals</h4>
               <p className="text-[#d1d1d1] mb-5 leading-relaxed text-[15px]">
                 Factory shoots, manufacturing stories, machinery visuals, corporate films, and process based storytelling.
               </p>
               <div className="space-y-3 mb-8 text-[#d1d1d1] text-[15px] leading-relaxed">
                 <p>
                   <span className="text-white font-black">• Manufacturing Stories:</span> We tell the human and technical history behind your products.
                 </p>
                 <p>
                   <span className="text-white font-black">• Machinery Visuals:</span> We create sharp, clear footage of your equipment working.
                 </p>
                 <p>
                   <span className="text-white font-black">• Process Storytelling:</span> We explain step-by-step how raw materials become finished goods.
                 </p>
               </div>
               <div>
                  <button className="px-8 py-2.5 bg-[#eab308] text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors text-[15px]">View</button>
               </div>
             </div>
          </div>

          <div className="flex flex-col md:flex-row bg-[#2b2b2b] rounded-[24px] overflow-hidden border border-[#eab308] items-stretch min-h-[400px]">
             <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-[auto] bg-white">
               <img src="/industrial-visuals-2.png" alt="Product Visuals" className="absolute inset-0 w-full h-full object-cover" />
             </div>
             <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center">
               <h4 className="text-4xl md:text-[44px] font-black mb-4 text-white tracking-tight">Industrial Visuals</h4>
               <p className="text-[#d1d1d1] mb-5 leading-relaxed text-[15px]">
                 Factory shoots, manufacturing stories, machinery visuals, corporate films, and process based storytelling.
               </p>
               <div className="space-y-3 mb-8 text-[#d1d1d1] text-[15px] leading-relaxed">
                 <p>
                   <span className="text-white font-black">• Product Visuals:</span> We capture the fine details and textures of your goods to build instant trust with buyers.
                 </p>
                 <p>
                   <span className="text-white font-black">• Campaign Content:</span> We turn your marketing ideas into striking visuals that tell a memorable brand story.
                 </p>
                 <p>
                   <span className="text-white font-black">• Launch Media:</span> We craft a powerful visual experience that makes your next big announcement unforgettable.
                 </p>
               </div>
               <div>
                  <button className="px-8 py-2.5 bg-[#eab308] text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors text-[15px]">View</button>
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* Frames from different worlds */}
      <section className="mb-24 mt-20">
        <h3 className="text-5xl md:text-[56px] font-black mb-16 tracking-tighter text-white">Frames from different worlds.</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[24px] flex flex-col overflow-hidden items-start h-full">
            <div className="w-full overflow-hidden shrink-0">
               <img src="/fashion.png" alt="Fashion" className="object-contain w-full h-auto" />
            </div>
            <div className="p-6 flex flex-col flex-grow w-full">
              <h4 className="text-[28px] font-black tracking-tight mb-2 text-black">Fashion</h4>
              <p className="text-[#333] text-[13px] mb-4 flex-grow leading-relaxed max-w-[90%]">Editorial shoots, designer campaigns, studio setups, outdoor fashion films, and creative portraits.</p>
              <div>
                <button className="px-5 py-2 bg-[#eab308] text-black text-sm font-bold rounded-lg hover:bg-yellow-500 transition-colors">View Work</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] flex flex-col overflow-hidden items-start h-full">
            <div className="w-full overflow-hidden shrink-0">
               <img src="/sports.png" alt="Sports" className="object-contain w-full h-auto" />
            </div>
            <div className="p-6 flex flex-col flex-grow w-full">
              <h4 className="text-[28px] font-black tracking-tight mb-2 text-black">Sports</h4>
              <p className="text-[#333] text-[13px] mb-4 flex-grow leading-relaxed max-w-[90%]">Fast paced visuals capturing energy, movement, focus, and the spirit of competition.</p>
              <div>
                <button className="px-5 py-2 bg-[#eab308] text-black text-sm font-bold rounded-lg hover:bg-yellow-500 transition-colors">View Work</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] flex flex-col overflow-hidden items-start h-full">
            <div className="w-full overflow-hidden shrink-0">
               <img src="/working-scenes.png" alt="Working Scenes" className="object-contain w-full h-auto" />
            </div>
            <div className="p-6 flex flex-col flex-grow w-full">
              <h4 className="text-[28px] font-black tracking-tight mb-2 text-black">Working Scenes</h4>
              <p className="text-[#333] text-[13px] mb-4 flex-grow leading-relaxed max-w-[90%]">Behind the scenes moments from shoots, sets, travel, direction, and on ground production work.</p>
              <div>
                <button className="px-5 py-2 bg-[#eab308] text-black text-sm font-bold rounded-lg hover:bg-yellow-500 transition-colors">View Work</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="mb-24">
        <h3 className="text-5xl md:text-[56px] font-black mb-10 tracking-tighter">Podcast</h3>
        
        {/* Main Featured Video */}
        <a href="https://youtu.be/_m2Z_g8Ko8k?si=Le4_xgpiSLZxGY8o" target="_blank" rel="noopener noreferrer" className="block w-full rounded-[24px] overflow-hidden relative group cursor-pointer mb-8 aspect-video border border-white/10">
           <img src="/podcast-image.png" alt="The Climate Smart Crop" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" />
        </a>

        {/* Thumbnails Row */}
        <div className="relative overflow-hidden w-full flex group my-12">
           <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>
           
           <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
             {/* First Set */}
             <div className="flex gap-4 md:gap-5 px-2 md:px-2.5 shrink-0">
               {/* Thumb 1 */}
               <a href="https://youtu.be/B6l_RTMWejE?si=ZuEWR6tJm7vdFUxq" target="_blank" rel="noopener noreferrer" className="block w-[280px] md:w-[400px] lg:w-[480px] rounded-[16px] overflow-hidden relative aspect-[16/9] cursor-pointer border border-white/10 shrink-0">
                  <img src="/oscar.png" alt="Podcast 1" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500" />
               </a>
               
               {/* Thumb 2 */}
               <a href="https://youtu.be/apO2P2eJF14?si=KV77nMYbuLiJ3zs6" target="_blank" rel="noopener noreferrer" className="block w-[280px] md:w-[400px] lg:w-[480px] rounded-[16px] overflow-hidden relative aspect-[16/9] cursor-pointer border border-white/10 shrink-0">
                  <img src="/2-lakh.png" alt="Podcast 2" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500" />
               </a>

               {/* Thumb 3 */}
               <a href="https://youtu.be/FAJzXUdAd9w?si=D6qWwxA_t1y_qkc4" target="_blank" rel="noopener noreferrer" className="block w-[280px] md:w-[400px] lg:w-[480px] rounded-[16px] overflow-hidden relative aspect-[16/9] cursor-pointer border border-white/10 shrink-0">
                  <img src="/1-lakh.png" alt="Podcast 3" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500" />
               </a>
             </div>
             
             {/* Second Set (Duplicate for seamless scroll) */}
             <div className="flex gap-4 md:gap-5 px-2 md:px-2.5 shrink-0">
               {/* Thumb 1 */}
               <a href="https://youtu.be/B6l_RTMWejE?si=ZuEWR6tJm7vdFUxq" target="_blank" rel="noopener noreferrer" className="block w-[280px] md:w-[400px] lg:w-[480px] rounded-[16px] overflow-hidden relative aspect-[16/9] cursor-pointer border border-white/10 shrink-0">
                  <img src="/oscar.png" alt="Podcast 1" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500" />
               </a>
               
               {/* Thumb 2 */}
               <a href="https://youtu.be/apO2P2eJF14?si=KV77nMYbuLiJ3zs6" target="_blank" rel="noopener noreferrer" className="block w-[280px] md:w-[400px] lg:w-[480px] rounded-[16px] overflow-hidden relative aspect-[16/9] cursor-pointer border border-white/10 shrink-0">
                  <img src="/2-lakh.png" alt="Podcast 2" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500" />
               </a>

               {/* Thumb 3 */}
               <a href="https://youtu.be/FAJzXUdAd9w?si=D6qWwxA_t1y_qkc4" target="_blank" rel="noopener noreferrer" className="block w-[280px] md:w-[400px] lg:w-[480px] rounded-[16px] overflow-hidden relative aspect-[16/9] cursor-pointer border border-white/10 shrink-0">
                  <img src="/1-lakh.png" alt="Podcast 3" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500" />
               </a>
             </div>
           </div>
        </div>
      </section>

      {/* Meet Mohammed Roshan */}
      <section className="mb-24 bg-white text-black rounded-3xl p-12 flex flex-col md:flex-row items-stretch gap-12 border-b-[16px] border-b-gray-200">
         <div className="w-full md:w-3/5 flex flex-col justify-center">
            <h3 className="text-5xl font-bold mb-2">Meet Mohammed<br/>Roshan</h3>
            <p className="font-bold text-gray-500 tracking-wider mb-6">Director of Photography & Cinematographer</p>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
              With over a decade of experience, I am a versatile cinematographer specializing in documentaries, television shows, advertising films and government projects. Renowned for a keen eye for visual storytelling and technical precision, I have successfully navigated a wide spectrum of genres adapting my approach to suit each unique narrative. Whether capturing raw, intimate moments in documentaries, crafting visually dynamic sequences for television, or developing compelling visual language for advertisements, I consistently blend creativity with a deep narrative understanding to deliver emotionally resonant and visually striking content.
            </p>
            <div className="flex gap-4">
              <a href="#" className="border-2 border-gray-200 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                <span className="text-red-600 text-xl">▶</span> Youtube
              </a>
              <a href="#" className="border-2 border-gray-200 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                 <span className="text-blue-600 font-serif font-black text-lg">in</span> Linkedin
              </a>
            </div>
         </div>
         <div className="w-full md:w-2/5 relative rounded-2xl overflow-hidden bg-gray-100 min-h-[400px]">
            <img src="/meet-roshan.png" alt="Mohammed Roshan Portrait" className="w-full h-full object-cover" />
         </div>
      </section>

      {/* Camera movement quote */}
      <section className="text-center pt-24 pb-8 w-full">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          Camera movement is now<br/>driving the narrative, not<br/>just following the actors.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-20">
          I believe movement should make people feel something before a single word is spoken. Every camera move is planned to carry emotion and energy through the frame. The camera is not just watching the story, it is becoming part of it.
        </p>
        <a href="/contact" className="inline-block px-8 py-3 bg-[#ffca28] text-black font-extrabold rounded-lg hover:bg-yellow-500 transition-colors text-[22px] tracking-tight">
          Contact Us
        </a>
      </section>

    </div>
    </>
  );
}
