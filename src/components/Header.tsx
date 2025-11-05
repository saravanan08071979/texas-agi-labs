import React from 'react';

export default function Header(){
  return (
    <header className="bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="header-logo">
          <img src="/logo.png" alt="TexasAgiLabs logo" />
          <div>
            <div style={{fontWeight:700}}>TexasAgiLabs.com</div>
            <div style={{fontSize:12, color:'var(--ta-muted)'}}>AI · Cloud · Automation</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:opacity-90">Services</a>
          <a href="/careers" className="hover:opacity-90">Careers</a>
          <a href="#contact" className="hover:opacity-90">Contact</a>
          <a href="#" className="btn-accent">Get in touch</a>
        </nav>
      </div>
    </header>
  );
}
