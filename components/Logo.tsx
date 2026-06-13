import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className || ''}`}>
      <Image 
        src="/logo.png" 
        alt="Logo" 
        width={100} 
        height={100}
        className="object-contain w-full h-full"
      />
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b715027c0b9f39f7394205a50e80caeb84e2a9d2
