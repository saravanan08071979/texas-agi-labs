import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between text-sm">
        <div>© {new Date().getFullYear()} Skyward Analytics. All rights reserved.</div>
      </div>
    </footer>
  );
}
