'use client'

const STEPS = [
  {
    number: '01',
    title: 'Skills Gap Assessment',
    desc: "We evaluate your team's current capabilities and align them with your business goals.",
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Custom Program Design',
    desc: 'Programs are tailored with top universities based on your industry and tech stack.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Cohort-Based Learning',
    desc: 'Structured cohorts with mentorship ensure high engagement and completion rates.',
    icon: '👥',
  },
  {
    number: '04',
    title: 'Track Impact & ROI',
    desc: 'Measure outcomes with dashboards tracking performance and business impact.',
    icon: '📊',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            How it works
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A simple, structured approach to upskilling
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From assessment to measurable outcomes — we handle the entire learning journey.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">

              {/* Connector line (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gray-200 z-0" />
              )}

              {/* Card */}
              <div className="relative z-10 bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition">

                {/* Icon */}
                <div className="text-3xl mb-4">{step.icon}</div>

                {/* Step number */}
                <div className="text-blue-600 font-semibold text-sm mb-2">
                  Step {step.number}
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-semibold text-base mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Talk to our team
          </a>
        </div>

      </div>
    </section>
  )
}