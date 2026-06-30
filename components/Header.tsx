import Link from 'next/link';
import { Logo } from './Logo';

export function Header() {
  return (
    <div className="w-full px-6 md:px-10 lg:px-16 pt-6 pb-4 relative z-50">
      <header className="flex items-center justify-between bg-white text-black py-2 px-6 md:px-8 w-full rounded-3xl shadow-lg border-2 border-white/10">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <Logo className="w-12 h-12 md:w-16 md:h-16 shrink-0" />
          <span className="font-black text-3xl md:text-4xl tracking-tight">
            <span className="text-red-600">Redstar</span> <span className="text-black">Productions</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 font-bold text-[16px]">
          <Link href="/" className="px-5 py-2 hover:bg-gray-100 rounded-full transition-colors">Home</Link>
          <Link href="/collaborations" className="hover:text-gray-600 transition-colors">Collaborations</Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">About Us</Link>
          <Link href="/contact" className="px-6 py-2.5 bg-[#eab308] text-black rounded-xl hover:bg-yellow-500 transition-colors shadow-sm">
            Contact Us
          </Link>
        </nav>
      </header>
    </div>
  );
}
