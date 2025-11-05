import "../styles/globals.css";
import React from 'react';
import { siteMeta } from '../lib/siteMeta';

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {siteMeta.gaId ? (
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteMeta.gaId}`}></script>
        ) : null}
        {siteMeta.gaId ? (
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)};gtag('js', new Date()); gtag('config', '${siteMeta.gaId}');` }} />
        ) : null}
        {/* Live chat: replace with your vendor script (Crisp, Tawk.to, Intercom, etc.) */}
        <script dangerouslySetInnerHTML={{ __html: `/* Live chat placeholder - insert vendor script here */` }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
