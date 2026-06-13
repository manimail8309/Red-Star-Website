import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CollaborationsOptions() {
  return (
    <div className="w-full px-6 md:px-10 lg:px-16 pb-20 pt-[140px] md:pt-[170px] mb-24 min-h-[50vh] flex flex-col justify-center">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-16 text-center">
        Our Collaborations
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
        <Link 
          href="/collaborations/ngo-and-csr" 
          className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] p-10 hover:bg-[#222] transition-colors border border-white/5 flex flex-col h-full items-center text-center"
        >
          <div className="mb-6 bg-[#2a2a2a] p-5 rounded-full group-hover:scale-110 transition-transform duration-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-yellow-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">NGO and CSR Documentaries</h2>
          <p className="text-gray-400 mb-8 max-w-sm">
            Impactful storytelling for social causes, non-profits, and corporate social responsibility initiatives.
          </p>
          <div className="mt-auto flex items-center text-yellow-500 font-bold tracking-wide group-hover:translate-x-2 transition-transform">
            EXPLORE <ArrowRight className="w-5 h-5 ml-2" />
          </div>
        </Link>
        
        <Link 
          href="/collaborations/brands-and-corporates" 
          className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] p-10 hover:bg-[#222] transition-colors border border-white/5 flex flex-col h-full items-center text-center"
        >
          <div className="mb-6 bg-[#2a2a2a] p-5 rounded-full group-hover:scale-110 transition-transform duration-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-yellow-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Brands and Corporates</h2>
          <p className="text-gray-400 mb-8 max-w-sm">
            High-end, cinematic visual campaigns for global brands and corporate visions.
          </p>
          <div className="mt-auto flex items-center text-yellow-500 font-bold tracking-wide group-hover:translate-x-2 transition-transform">
            EXPLORE <ArrowRight className="w-5 h-5 ml-2" />
          </div>
        </Link>
      </div>
    </div>
  );
}
