'use client'
import { useState } from 'react'

const CATEGORIES = ['All', 'Data Science', 'AI / ML', 'Product', 'Leadership', 'Engineering']

const PROGRAMS = [
  {
    category: 'Data Science',
    title: 'PG Program in Data Science & AI',
    university: 'IIT Guwahati',
    duration: '11 Months',
    level: 'Advanced',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-500',
    topics: ['Python', 'ML', 'Deep Learning', 'NLP'],
  },
  {
    category: 'AI / ML',
    title: 'Executive Program in ML Engineering',
    university: 'IIT Kanpur',
    duration: '9 Months',
    level: 'Expert',
    badge: 'New',
    badgeColor: 'bg-emerald-500',
    topics: ['LLMs', 'MLOps', 'PyTorch', 'AWS'],
  },
  {
    category: 'Product',
    title: 'Product Management Program',
    university: 'IIM Lucknow',
    duration: '8 Months',
    level: 'Intermediate',
    badge: '',
    badgeColor: '',
    topics: ['Strategy', 'Roadmapping', 'Analytics', 'UX'],
  },
  {
    category: 'Leadership',
    title: 'Senior Leadership Programme',
    university: 'IIM Visakhapatnam',
    duration: '12 Months',
    level: 'Executive',
    badge: 'CXO Track',
    badgeColor: 'bg-purple-500',
    topics: ['Strategy', 'Finance', 'Operations', 'People'],
  },
  {
    category: 'Engineering',
    title: 'Full Stack Engineering Bootcamp',
    university: 'IIT Roorkee',
    duration: '6 Months',
    level: 'Intermediate',
    badge: '',
    badgeColor: '',
    topics: ['React', 'Node.js', 'Databases', 'Cloud'],
  },
  {
    category: 'Data Science',
    title: 'Business Analytics Program',
    university: 'XLRI Jamshedpur',
    duration: '7 Months',
    level: 'Intermediate',
    badge: 'High ROI',
    badgeColor: 'bg-amber-500',
    topics: ['SQL', 'Tableau', 'Statistics', 'Excel'],
  },
]

const LEVELS: Record<string, string> = {
  Intermediate: 'bg-blue-50 text-blue-700',
  Advanced: 'bg-purple-50 text-purple-700',
  Expert: 'bg-rose-50 text-rose-700',
  Executive: 'bg-amber-50 text-amber-700',
}

export default function Programs() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered =
    activeTab === 'All' ? PROGRAMS : PROGRAMS.filter((p) => p.category === activeTab)

  return (
    <section id="programs" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Program Library
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Programs built for enterprise teams
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Co-created with India's most prestigious institutions. Every program earns a credential that your employees will be proud of.
          </p>
        </div>

        {/* Tab filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`tab-pill ${activeTab === cat ? 'tab-pill-active' : 'tab-pill-inactive'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="feature-card bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-5 relative">
                {p.badge && (
                  <span className={`absolute top-4 right-4 text-white text-xs font-semibold px-2.5 py-1 rounded-full ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{p.university.split(' ')[0]}</span>
                  </div>
                  <span className="text-blue-200 text-xs font-medium">{p.university}</span>
                </div>
                <h3 className="text-white font-semibold text-base leading-snug">{p.title}</h3>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {p.duration}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${LEVELS[p.level]}`}>
                    {p.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.topics.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="block w-full text-center border-2 border-blue-600 text-blue-600 font-semibold py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm"
                >
                  Explore for Your Team
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm"
          >
            View all 200+ programs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
