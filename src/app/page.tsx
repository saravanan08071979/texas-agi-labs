import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold">Build better software. Faster. Safer.</h1>
        <p className="mt-6 text-lg text-slate-600 max-w-xl">We design, build and scale cloud-native products for startups and enterprises — from idea to production.</p>
      </main>
      <Footer />
    </div>
  );
}
