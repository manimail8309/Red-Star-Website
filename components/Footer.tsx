import Link from 'next/link';
import { Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="w-full mt-16 px-4 md:px-8 mb-8">
      <div className="bg-white text-black pt-16 pb-6 px-10 rounded-t-[32px] rounded-b-[32px] w-full flex flex-col">
        <div className="flex flex-col md:flex-row mb-16 gap-10 md:gap-8 lg:gap-20">

          <div className="flex flex-col w-full md:w-[45%]">
            <div className="flex items-center gap-2 md:gap-3 mb-4">
              <Logo className="w-16 h-16 shrink-0" />
              <span className="font-black text-2xl tracking-tight">
                <span className="text-red-600">Redstar</span> <span className="text-black">Productions</span>
              </span>
            </div>
            <p className="font-extrabold text-[19px] mb-6 tracking-tight text-gray-900">Create. Captivate. Convert.</p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/mohammed-roshan-4a56b415?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] text-white p-2.5 rounded-lg flex items-center justify-center hover:bg-[#005582] hover:scale-110 shadow-[0_4px_14px_rgba(0,119,181,0.3)] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.25 6.5a1.78 1.78 0 01-1.75 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/roshan_dop?utm_source=qr&igsh=aWk4dzY3OTJ0OWIx" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-2.5 rounded-lg flex items-center justify-center hover:scale-110 shadow-[0_4px_14px_rgba(238,42,123,0.3)] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="https://youtube.com/@roshandop?feature=shared" target="_blank" rel="noopener noreferrer" className="bg-[#ff0000] text-white p-2.5 rounded-lg flex items-center justify-center hover:bg-[#cc0000] hover:scale-110 shadow-[0_4px_14px_rgba(255,0,0,0.3)] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link href="https://www.facebook.com/share/1Bv1pCNtvg" target="_blank" rel="noopener noreferrer" className="bg-[#1877f2] text-white p-2.5 rounded-lg flex items-center justify-center hover:bg-[#0f62d1] hover:scale-110 shadow-[0_4px_14px_rgba(24,119,242,0.3)] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[35%] lg:w-[30%]">
            <h4 className="font-bold text-[18px] mb-6">Reach us</h4>
            <div className="flex flex-col gap-4 text-[16px] text-gray-700 font-medium tracking-tight">
              <a href="tel:+919603937000" className="flex items-center gap-4 hover:text-black transition-colors cursor-pointer w-fit">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-[#222]"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.14-3.76-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 2h-2c0 3.86-3.14 7-7 7v2c4.96 0 9-4.04 9-9zM15 2h-2c0 1.65-1.35 3-3 3v2c2.76 0 5-2.24 5-5z" /></svg>
                +91 960 393 7000
              </a>
              <a href="tel:+918328335565" className="flex items-center gap-4 hover:text-black transition-colors cursor-pointer w-fit">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-[#222]"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.14-3.76-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 2h-2c0 3.86-3.14 7-7 7v2c4.96 0 9-4.04 9-9zM15 2h-2c0 1.65-1.35 3-3 3v2c2.76 0 5-2.24 5-5z" /></svg>
                +91 832 833 5565
              </a>
              <a href="mailto:roshan@redstardop.com" className="flex items-center gap-4 hover:text-black transition-colors cursor-pointer w-fit">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-[#222]"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                roshan@redstardop.com
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=T-Hub,+Hyderabad,+Telangana,+India" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-black transition-colors cursor-pointer w-fit">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#222] shrink-0 mt-0.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                <span>T-Hub Hyderabad,<br />Telangana, India</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[20%] lg:w-[25%] lg:pl-12">
            <h4 className="font-bold text-[18px] mb-6">Company</h4>
            <div className="flex flex-col gap-5 text-[16px] font-medium text-gray-700 tracking-tight">
              <Link href="/collaborations" className="hover:text-black">Collaborations</Link>
              <Link href="/about" className="hover:text-black">About Us</Link>
              <Link href="/contact" className="hover:text-black">Contact Us</Link>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-600 gap-4 md:gap-0">
          <div className="flex flex-col items-center md:items-start">
            <p>© 2026 Red Star Productions. All rights reserved.</p>
            <a 
              href="https://good2great.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-black transition-colors mt-1"
            >
              Powered by <span className="underline">Good2Great AI services</span>.
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p>Designed and developed by TecTranz</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
