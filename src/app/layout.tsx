import "../styles/globals.css";
import React from 'react';

export const metadata = {
  title: 'Skyward Analytics',
  description: 'Build better software. Faster. Safer.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
