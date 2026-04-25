'use client'
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 500, suffix: '+', label: 'Enterprise Clients' },
  { value: 94, suffix: '%', label: 'Completion Rate' },
  { value: 40, suffix: '%', label: 'Avg Productivity Gain' },
  { value: 300, suffix: 'K+', label: 'Learners Trained' },
]

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, started])
  return count
}

function StatItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCountUp(value, 2000, started)
  return (
    <div className="text-center">
      <div className="stat-number text-white font-display">
        {count}{suffix}
      </div>
      <div className="text-blue-300 text-sm mt-1 font-medium">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [statsStarted, setStatsStarted] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Trigger stats after short delay
    const timeout = setTimeout(() => setStatsStarted(true), 800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="hero-gradient hero-grid noise-overlay min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 shimmer-bg backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-xs font-medium tracking-wide uppercase">
              India's #1 Enterprise Learning Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 text-balance">
            Upskill Your Workforce{' '}
            <span className="relative inline-block">
              <span className="gradient-text">at Scale</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C47 1.5 100 1.5 199 5.5" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-blue-100/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Partner with <strong className="text-white">IITs, IIMs, and global universities</strong> to upskill your enterprise teams with curated programs, live mentorship, and real-time analytics that deliver measurable ROI.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/30 hover:shadow-blue-400/40 hover:-translate-y-0.5 text-base"
            >
              Request a Free Demo
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-base flex items-center justify-center gap-2"
            >
              Explore Platform
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            {STATS.map((s) => (
              <StatItem key={s.label} {...s} started={statsStarted} />
            ))}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 52C840 56 960 56 1080 48C1200 40 1320 24 1380 16L1440 8V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
