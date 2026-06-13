export default function About() {
  return (
    <div className="w-full px-6 md:px-10 lg:px-16 pb-20 pt-[140px] md:pt-[170px]">
      
      {/* Header section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Mohammed Roshan</h1>
        <p className="text-xl md:text-2xl text-gray-400">Film maker / Director of Photography</p>
      </section>

      {/* Main Image & Stats */}
      <section className="mb-20">
        <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-white/10">
          <img src="/charminar.png" alt="Charminar" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-between items-center max-w-4xl mx-auto text-center border-t border-b border-white/10 py-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">30+</h2>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Years of industry experience</p>
          </div>
          <div className="w-px h-16 bg-white/20"></div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">500+</h2>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Projects delivered Nationwide</p>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-8 max-w-5xl">
        
        {/* Career Highs */}
        <section>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Career Highs</h3>
          <ul className="list-disc pl-10 md:pl-12 text-[15px] font-medium tracking-tight text-gray-300 leading-relaxed space-y-1">
            <li>Covered American President Mr.George Bush's visit to Hyderabad in 2006.</li>
            <li>Covered the Agra Summit and the visit of Pakistan President Mr. Pervez Musharraf to New Delhi in the year 2001.</li>
            <li>Covered American President Mr. Bill Clinton's visit to Hyderabad in 2000.</li>
            <li>Worked for BBC (India Business Report) in NDTV.</li>
            <li>Covered the First Afro Asian Games-2003, in Hyderabad</li>
          </ul>
        </section>

        {/* Key Coverages */}
        <section>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Key Coverages</h3>
          <ul className="list-disc pl-10 md:pl-12 text-[15px] font-medium tracking-tight text-gray-300 leading-relaxed space-y-1">
            <li>Covered India Matters, Village voice in Tamil Nadu, Walk the Talk, Big Fight</li>
            <li>I have also widely covered the disaster "TSUNAMI" in the affected areas of South India.</li>
            <li>Election Coverage in Andhra Pradesh during state & Lok Sabha Elections-2004.</li>
            <li>Covered various Bomb Blasts /Train accidents etc.</li>
          </ul>
        </section>

        {/* Production Projects */}
        <section>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Production Projects</h3>
          <p className="font-medium text-[20px] mb-4">Shot Projects on own Production house from 2015</p>
          <ul className="list-disc pl-10 md:pl-12 text-[15px] font-medium tracking-tight text-gray-300 leading-relaxed space-y-1">
            <li><strong className="text-white">Worked for Telangana Govt</strong> - shot Shadi Mubarak scheme.</li>
            <li><strong className="text-white">NDTV Good Times</strong> - For programming and features.</li>
            <li><strong className="text-white">CNN TV</strong> - Documentary on Water at Raichur.</li>
            <li><strong className="text-white">MTV</strong> - Shot Farhan Akhtar stage show at Bits Pilani.</li>
            <li><strong className="text-white">Ten sports</strong> - Special stories from Hyderabad and special Interviews with sania mirza, martina navaratilova and more.</li>
            <li><strong className="text-white">Documentaries</strong> - for NGO's</li>
            <li><strong className="text-white">ESPN</strong> - Special show On the Road cover city pulse.</li>
            <li><strong className="text-white">Events</strong> - For corporates sector and ex minister Shashi tharoor</li>
            <li><strong className="text-white">Times Now</strong> - corporate videos</li>
            <li><strong className="text-white">Police dept</strong> - shot interviews for the team (victims) etc...</li>
          </ul>
        </section>

        {/* Freelance Projects */}
        <section>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Freelance Projects</h3>
          <p className="text-[17px] tracking-tight font-medium text-gray-300 leading-relaxed mb-4">Corporate film shoot for Indian Passport</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <img src="/nagarjuna.png" alt="Nagarjuna" className="w-full aspect-square object-cover rounded-xl border border-white/10 object-top" />
          </div>
          
          <h4 className="text-xl font-bold mt-10 mb-6">Youtube videos</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             <a href="https://youtube.com/shorts/VCjJIZog3XQ?si=rdfHp9RxvaSVOozY" target="_blank" rel="noopener noreferrer" className="block relative group">
                <img src="/yv-1.png" alt="YouTube 1" className="w-full h-auto object-contain rounded-xl border border-white/10 group-hover:scale-[1.02] transition-transform" />
             </a>
             <a href="https://youtube.com/shorts/gh6NIAGzKE8?si=TanDMee_Cok77Txj" target="_blank" rel="noopener noreferrer" className="block relative group">
                <img src="/vv-2.png" alt="YouTube 2" className="w-full h-auto object-contain rounded-xl border border-white/10 group-hover:scale-[1.02] transition-transform" />
             </a>
          </div>
        </section>

        {/* Corporate works timeline */}
        <section>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Corporate works</h3>
          <div className="relative border-l border-white/20 pl-8 ml-4 space-y-16">
            
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-yellow-400 bg-[#111]"></span>
              <h4 className="text-3xl font-bold mb-1">Big TV</h4>
              <p className="text-yellow-400 font-medium mb-4">2022 - 2024</p>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">As a Senior Cameraperson for the regional Telugu channel Big TV, I captured diverse cultural festivals and on-spot interviews.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <img src="/big-tv-1.png" alt="Big TV Work 1" className="rounded-xl w-full aspect-square object-cover" />
                <img src="/big-tv-2.png" alt="Big TV Work 2" className="rounded-xl w-full aspect-square object-cover" />
                <img src="/big-tv-3.png" alt="Big TV Work 3" className="rounded-xl w-full aspect-square object-cover" />
              </div>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-yellow-400 bg-[#111]"></span>
              <h4 className="text-3xl font-bold mb-1">Sakshi TV</h4>
              <p className="text-yellow-400 font-medium mb-4">2008 - 2015</p>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">During my time as a Senior Cameraperson with Sakshi, India's first high definition regional Telugu channel, I filmed a wide variety of content. Including cultural festivals, professional interviews, and dynamic cookery shows.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <img src="/sakshi-1.png" alt="Sakshi TV 1" className="rounded-xl w-full aspect-square object-cover" />
                <img src="/sakshi-2.png" alt="Sakshi TV 2" className="rounded-xl w-full aspect-square object-cover" />
                <img src="/sakshi-3.png" alt="Sakshi TV 3" className="rounded-xl w-full aspect-square object-cover" />
              </div>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-yellow-400 bg-[#111]"></span>
              <h4 className="text-3xl font-bold mb-1">Times Now</h4>
              <p className="text-yellow-400 font-medium mb-4">2005 - 2008</p>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">As a Principal Video Journalist for English 24-hour national News channel under Times Group. My responsibilities included producing segments for shows, writing scripts, capturing breaking news and major events under demanding deadlines.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <img src="/times-1.png" alt="Times Now 1" className="rounded-xl w-full aspect-square object-cover" />
                <img src="/times-2.png" alt="Times Now 2" className="rounded-xl w-full aspect-square object-cover" />
              </div>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-yellow-400 bg-[#111]"></span>
              <h4 className="text-3xl font-bold mb-1">NDTV</h4>
              <p className="text-yellow-400 font-medium mb-4">2000 - 2005</p>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">The experience of working as a cameraperson in NDTV has been a huge plus for my career. Working in a multi-camera environment taught me how to work in a fast-paced environment.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <img src="/ndtv-1.png" alt="NDTV 1" className="rounded-xl w-full aspect-square object-cover" />
              </div>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-yellow-400 bg-[#111]"></span>
              <h4 className="text-3xl font-bold mb-1">E TV</h4>
              <p className="text-yellow-400 font-medium mb-4">1995 - 2000</p>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">My experience as a video journalist at ETV network has greatly enhanced my visual design skills. Moving to storytelling for a TV channel, I have learned to introduce fast-moving event info quality visuals.</p>
            </div>

          </div>
        </section>

      </div>

      {/* Contact Block */}
      <section className="mt-24 mb-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
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
      </section>

    </div>
  );
}
