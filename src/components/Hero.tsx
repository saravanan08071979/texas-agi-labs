// src/components/Hero.tsx
import Link from 'next/link'
import LogoHexagon from './LogoHexagon'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle animated gradient lines */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -left-20 -top-24 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#0f172a]/20 via-[#7c3aed]/15 to-[#06b6d4]/10 blur-3xl animate-blob"></div>
        <div className="absolute -right-24 -bottom-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#fb7185]/12 via-[#f472b6]/18 to-[#7c3aed]/6 blur-2xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-700 to-pink-500/80 shadow-inner">
              <LogoHexagon size={44} />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Texas AGI Labs</div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight neon-title">
            Building the Future of Artificial General Intelligence
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl">
            Machines that learn, reason & adapt like humans. Enterprise-grade AGI systems focused on safety,
            interpretability, and real-world scale.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-tr from-indigo-600 to-pink-500 text-black font-semibold shadow-lg hover:scale-[0.995] transition transform">
              Get Started
            </Link>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-200 hover:bg-gray-800 transition">
              Contact Us
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            Trusted by enterprise teams — Secure enclaves, audit trails, and SLA-backed deployments.
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-tr from-gray-850 to-gray-900 border border-gray-800 shadow-xl">
          <div className="font-mono text-sm text-green-300 bg-black/30 p-4 rounded-md">
            <div className="opacity-80">$ python run_pipeline.py --model "tx-agi-v1"</div>
            <div className="mt-3 text-xs text-gray-400">Initializing distributed shards… <span className="inline-block animate-pulse">●</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

