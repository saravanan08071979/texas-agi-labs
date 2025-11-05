import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Careers() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold">Careers at TexasAgiLabs</h1>
        <p className="mt-4 text-slate-400 max-w-2xl">We're growing. Join us to build AI products that matter.</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Open roles</h2>
          <div className="mt-4 grid gap-4">
            <div className="card">
              <h3 className="font-semibold">Senior ML Engineer</h3>
              <p className="text-slate-400">Full-time · Remote · US</p>
              <a className="mt-3 inline-block" href="/careers/apply?role=Senior%20ML%20Engineer">Apply →</a>
            </div>
            <div className="card">
              <h3 className="font-semibold">Cloud Platform Engineer</h3>
              <p className="text-slate-400">Full-time · Remote · US</p>
              <a className="mt-3 inline-block" href="/careers/apply?role=Cloud%20Platform%20Engineer">Apply →</a>
            </div>
          </div>
        </section>

        <section id="apply" className="mt-12">
          <h2 className="text-2xl font-semibold">General application</h2>
          <p className="text-slate-400">Can't find the perfect match? Send us your resume and we will reach out.</p>
          <form action="/api/careers/apply" method="post" encType="multipart/form-data" className="mt-4 space-y-4 bg-transparent p-6 rounded-lg border">
            <div>
              <label className="block text-sm">Full name</label>
              <input name="name" className="mt-1 w-full border rounded-md px-3 py-2 bg-transparent" required />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input name="email" type="email" className="mt-1 w-full border rounded-md px-3 py-2 bg-transparent" required />
            </div>
            <div>
              <label className="block text-sm">Role</label>
              <input name="role" className="mt-1 w-full border rounded-md px-3 py-2 bg-transparent" />
            </div>
            <div>
              <label className="block text-sm">Resume (PDF)</label>
              <input name="resume" type="file" className="mt-1 w-full" />
            </div>
            <div>
              <button className="btn-accent" type="submit">Submit application</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
