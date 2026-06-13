import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NgoAndCsr() {
  return (
    <div className="w-full px-6 md:px-10 lg:px-16 pb-20 pt-[140px] md:pt-[170px] min-h-[50vh]">
      
      {/* Header section */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight">
            Stories that create<br/>awareness
          </h1>
          <h2 className="text-[22px] font-bold mb-6">CSR Campaigns and NGO Documentaries</h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-[15px]">
            Social impact work is about more than just numbers and annual reports. To get people to care about your cause, they need to see the real human lives and communities you are helping on the ground.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed text-[15px]">
            We work with non-profits and companies to turn their charity and sustainability projects into powerful, honest documentaries. Our focus is on showing real human strength rather than just sadness. We capture the true story of your work with deep respect for the people we film. Whether we are shooting in a remote village or a local community centre. Let's work together to tell a story that builds trust, inspires volunteers, and moves people to take action.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-[#eab308] text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
            Contact Us
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden">
             <img src="/story-1.png" alt="Stories that create awareness" className="w-full h-auto object-contain shadow-2xl" />
          </div>
        </div>
      </section>

      <div className="space-y-16">
        
        {/* India Times */}
        <section>
           <h3 className="text-[28px] font-bold mb-8">India Times - Telangana and Andhra Pradesh village stories</h3>
           <div className="columns-2 lg:columns-3 gap-6 space-y-6">
             <img src="/india-1.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Village Story 1" />
             <img src="/india-2.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Village Story 2" />
             <img src="/india-3.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Village Story 3" />
             <img src="/india-4.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Village Story 4" />
             <img src="/india-5.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Village Story 5" />
             <img src="/india-6.png" className="w-full h-auto object-contain rounded-xl border border-white/10" alt="Village Story 6" />
           </div>
        </section>

        {/* Nava Shoots */}
        <section>
           <h3 className="text-[28px] font-bold mb-8">Nava Shoots</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <img src="/nava-1.png" className="w-full aspect-[4/3] object-cover rounded-xl border border-white/10" alt="Nava Shoot 1" />
             <img src="/nava-2.png" className="w-full aspect-[4/3] object-cover rounded-xl border border-white/10" alt="Nava Shoot 2" />
             <img src="/nava-3.png" className="w-full aspect-[4/3] object-cover rounded-xl border border-white/10" alt="Nava Shoot 3" />
           </div>
        </section>

      </div>
    </div>
  );
}
