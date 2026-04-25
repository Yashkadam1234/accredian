'use client'

const STATS = [
  {
    value: '500+',
    label: 'Enterprise Clients',
    icon: '🏢',
  },
  {
    value: '10,000+',
    label: 'Professionals Trained',
    icon: '👨‍🎓',
  },
  {
    value: '94%',
    label: 'Completion Rate',
    icon: '📈',
  },
  {
    value: '60%',
    label: 'Average Skill Improvement',
    icon: '⚡',
  },
]

export default function Stats() {
  return (
    <section id="stats" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase block mb-3">
            Impact
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Measurable outcomes that matter
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We focus on real business impact, not just learning completion.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{stat.icon}</div>

              {/* Value */}
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-gray-600 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}