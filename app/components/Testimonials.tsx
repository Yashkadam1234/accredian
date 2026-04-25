'use client'

import { useEffect, useState } from 'react'

const TESTIMONIALS = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%.",
    name: 'Priya Sharma',
    role: 'CHRO',
    company: 'Infosys BPM',
    avatar: 'PS',
    avatarColor: 'bg-blue-600',
    metric: '40% productivity gain',
  },
  {
    quote:
      'The combination of IIT-quality curriculum and live mentorship is unmatched. Our engineers now lead ML projects independently.',
    name: 'Rahul Mehta',
    role: 'VP Engineering',
    company: 'Flipkart',
    avatar: 'RM',
    avatarColor: 'bg-emerald-600',
    metric: '3x ML velocity',
  },
  {
    quote:
      'We onboarded 300 managers across geographies. Completion rates hit 96% — something we never achieved before.',
    name: 'Sunita Agarwal',
    role: 'Head of L&D',
    company: 'HCL Technologies',
    avatar: 'SA',
    avatarColor: 'bg-purple-600',
    metric: '96% completion rate',
  },
  {
    quote:
      'Accredian built a program tailored to our actual product challenges. Our team became productive almost immediately.',
    name: 'Arjun Nair',
    role: 'CTO',
    company: 'PhonePe',
    avatar: 'AN',
    avatarColor: 'bg-amber-600',
    metric: '60% faster onboarding',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  // Auto-play (subtle)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const t = TESTIMONIALS[active]

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Customer Stories
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Trusted by enterprise leaders
          </h2>
        </div>

        {/* Card */}
        <div className="relative bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm transition-all duration-500">

          {/* Quote */}
          <div className="transition-opacity duration-500">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              “{t.quote}”
            </p>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

            {/* User */}
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 ${t.avatarColor} rounded-full flex items-center justify-center`}>
                <span className="text-white text-sm font-semibold">
                  {t.avatar}
                </span>
              </div>

              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-sm">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>

            {/* Metric */}
            <div className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-lg">
              {t.metric}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}