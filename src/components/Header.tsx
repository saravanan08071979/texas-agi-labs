// src/components/Header.tsx
import Link from 'next/link'
import LogoHexagon from './LogoHexagon'

export default function Header(){
  return (
    <header className="border-b border-gray-800 backdrop-blur-sm bg-black/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center shadow-lg">
            <LogoHexagon size={34} />
          </div>
          <div>
            <div className="text-lg font-semibold">Texas AGI Labs</div>
            <div className="text-xs text-gray-400">Engineering human-level intelligence responsibly</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/products" className="hover:text-white">Products</Link>
          <Link href="/research" className="hover:text-white">Research</Link>
          <Link href="/careers" className="hover:text-white">Careers</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="bg-gradient-to-tr from-indigo-600 to-pink-500 px-4 py-1 rounded-full text-black font-medium shadow-md">Request Demo</Link>
        </nav>
      </div>
    </header>
  )
}

