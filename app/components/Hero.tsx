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

function StatItem({
  value,
  suffix,
  label,
  started,
}: {
  value: number
  suffix: string
  label: string
  started: boolean
}) {
  const count = useCountUp(value, 2000, started)

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-gray-900">
        {count}
        {suffix}
      </div>
      <div className="text-gray-500 text-sm mt-1">{label}</div>
    </div>
  )
}

export default function Hero() {

  const [statsStarted, setStatsStarted] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeout = setTimeout(() => setStatsStarted(true), 800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      
      {/* subtle glow */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-gray-600 text-xs font-medium uppercase tracking-wide">
              India's #1 Enterprise Learning Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build High-Impact Teams{' '}
            <span className="text-blue-600 relative inline-block">
              at Scale
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C47 1.5 100 1.5 199 5.5"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
  Upskill your enterprise teams with programs from <strong className="text-gray-900">IITs, IIMs, and global universities</strong>—backed by mentorship and measurable ROI.
</p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg"
            >
              Request a Free Demo
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto border border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Explore Platform
            </a>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-gray-200"
          >
            {STATS.map((s) => (
              <StatItem key={s.label} {...s} started={statsStarted} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}