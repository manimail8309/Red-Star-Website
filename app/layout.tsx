import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mohammed Roshan - Filmmaker',
  description: 'Director of Photography',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white min-h-screen flex flex-col font-sans relative overflow-x-hidden" suppressHydrationWarning>
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <main className="flex-grow z-10 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
