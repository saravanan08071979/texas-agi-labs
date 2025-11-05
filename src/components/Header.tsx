import React from 'react';

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">SA</div>
          <span className="font-semibold text-lg">Skyward Analytics</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-indigo-600">Services</a>
          <a href="#work" className="hover:text-indigo-600">Work</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
