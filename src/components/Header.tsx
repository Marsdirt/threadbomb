import { Plane } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/new-logo.png" // Path relative to the public folder
            alt="ThreadBomb Logo"
            width={200} // Adjust width as needed
            height={60} // Adjust height as needed
            priority
          />
          <h1 className="text-3xl font-headline font-bold text-primary">
            Sky-Seeker
          </h1>
        </Link>
        {/* Navigation items can be added here if needed */}
      </div>
    </header>
  );
}
