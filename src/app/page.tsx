import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-20">
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">Innovating AI for the Future</h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">TexasAgiLabs builds AI-driven software and cloud solutions that help organizations automate operations, unlock insights from data, and scale safely.</p>
            <div className="mt-8 flex gap-4">
              <a className="btn-accent" href="#contact">Contact sales</a>
              <a className="inline-flex items-center px-4 py-2 rounded-md border text-sm" href="/careers">We're hiring</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-500">
              <div>
                <div className="font-semibold text-xl">150+</div>
                <div>Projects delivered</div>
              </div>
              <div>
                <div className="font-semibold text-xl">4.9/5</div>
                <div>Client rating</div>
              </div>
              <div>
                <div className="font-semibold text-xl">99.99%</div>
                <div>Uptime support</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="card" style={{width: '100%', maxWidth: 640}}>
              <img src="/logo.png" alt="logo" style={{maxWidth:'300px'}} />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 bg-transparent rounded-md border">Realtime metrics</div>
                <div className="p-3 bg-transparent rounded-md border">Secure auth</div>
                <div className="p-3 bg-transparent rounded-md border">CI/CD</div>
                <div className="p-3 bg-transparent rounded-md border">Multi-cloud</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mt-16">
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <p className="mt-2 text-slate-400">End-to-end AI, cloud and automation services tailored to your outcomes.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-semibold">AI Development</h3>
              <p className="text-slate-400 text-sm mt-2">Custom models, MLOps and inference platforms.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Cloud Engineering</h3>
              <p className="text-slate-400 text-sm mt-2">Multi-cloud, serverless and platform architecture.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">DevOps & Automation</h3>
              <p className="text-slate-400 text-sm mt-2">CI/CD, infra-as-code, and secure pipelines.</p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16">
          <h2 className="text-2xl font-semibold">About TexasAgiLabs</h2>
          <p className="mt-2 text-slate-400 max-w-2xl">TexasAgiLabs is a team of engineers and product experts building AI-first solutions for enterprises and startups. We combine product thinking with engineering excellence to deliver measurable outcomes, from prototype to production.</p>
        </section>

        <section id="contact" className="mt-16 grid lg:grid-cols-2 gap-8">
          <div>
            <form action="/api/contact" method="post" className="space-y-4 bg-transparent p-6 rounded-lg border">
              <div>
                <label className="block text-sm">Name</label>
                <input name="name" className="mt-1 w-full border rounded-md px-3 py-2 bg-transparent" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm">Email</label>
                <input name="email" type="email" className="mt-1 w-full border rounded-md px-3 py-2 bg-transparent" placeholder="you@company.com" required />
              </div>
              <div>
                <label className="block text-sm">Message</label>
                <textarea name="message" className="mt-1 w-full border rounded-md px-3 py-2 bg-transparent" rows={4} placeholder="Tell us about your project" required></textarea>
              </div>
              <div>
                <button className="btn-accent" type="submit">Send message</button>
              </div>
            </form>
          </div>
          <div className="space-y-4">
            <div className="card">
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm text-slate-400 mt-2">contact@texasagilabs.com<br/>Remote-first · HQ: Texas, USA</p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Live Chat</h4>
              <p className="text-sm text-slate-400 mt-2">Enable your live chat provider script in <code>src/app/layout.tsx</code> to show the chat widget.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
