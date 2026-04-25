'use client'
import { useState } from 'react'

const TESTIMONIALS = [
  {
    quote:
      'Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team\'s velocity improved by 40%. The ROI is undeniable.',
    name: 'Priya Sharma',
    role: 'CHRO',
    company: 'Infosys BPM',
    avatar: 'PS',
    avatarColor: 'bg-blue-600',
    metric: '40% productivity gain',
  },
  {
    quote:
      'The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.',
    name: 'Rahul Mehta',
    role: 'VP Engineering',
    company: 'Flipkart',
    avatar: 'RM',
    avatarColor: 'bg-emerald-600',
    metric: '3x ML project velocity',
  },
  {
    quote:
      'We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.',
    name: 'Sunita Agarwal',
    role: 'Head of L&D',
    company: 'HCL Technologies',
    avatar: 'SA',
    avatarColor: 'bg-purple-600',
    metric: '96% completion rate',
  },
  {
    quote:
      'What impressed us most was the depth of customization. Accredian built a program around our actual codebase and product challenges. Our team hit the ground running.',
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
  const t = TESTIMONIALS[active]

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Customer Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900">
            Hear from L&D leaders
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/80 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left sidebar — testimonials list */}
              <div className="lg:col-span-2 bg-brand-navy p-6 lg:p-8 flex lg:flex-col gap-3">
                {TESTIMONIALS.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 flex-1 lg:flex-none ${
                      i === active ? 'bg-white/15' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className={`w-9 h-9 flex-shrink-0 ${item.avatarColor} rounded-full flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{item.avatar}</span>
                    </div>
                    <div className="hidden lg:block">
                      <p className={`font-medium text-sm ${i === active ? 'text-white' : 'text-blue-200/70'}`}>
                        {item.name}
                      </p>
                      <p className="text-blue-300/50 text-xs">{item.company}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right — active testimonial */}
              <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex mb-5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-gray-500 text-sm">
                        {t.role} · {t.company}
                      </p>
                    </div>
                    <div className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-xl">
                      {t.metric}
                    </div>
                  </div>

                  {/* Dots */}
                  <div className="flex items-center gap-2 mt-6">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === active ? 'dot-active bg-blue-600 w-6' : 'dot-inactive bg-gray-200 w-2'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
