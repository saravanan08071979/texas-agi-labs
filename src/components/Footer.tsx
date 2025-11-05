import React from 'react';

export default function Footer(){
  return (
    <footer className="mt-12">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm">
        <div>© {new Date().getFullYear()} TexasAgiLabs.com. All rights reserved.</div>
        <div className="mt-4 md:mt-0 flex gap-4 items-center">
          <a href="#" style={{color:'var(--ta-muted)'}}>Privacy</a>
          <a href="#" style={{color:'var(--ta-muted)'}}>Terms</a>
          <a href="mailto:contact@texasagilabs.com" style={{color:'var(--ta-muted)'}}>contact@texasagilabs.com</a>
        </div>
      </div>
    </footer>
  );
}
