'use client'

const STEPS = [
  {
    number: '01',
    title: 'Skills Gap Assessment',
    desc: 'Our consultants map your team\'s current skill baseline against your business goals and technology roadmap.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Custom Program Design',
    desc: 'We co-design a tailored curriculum with your chosen university partner, specific to your tech stack and industry.',
    icon: '🎨',
  },
  {
    number: '03',
    title: 'Cohort Launch & Mentorship',
    desc: 'Structured cohorts kick off with live mentors, capstone projects, and synchronized learning paths for your teams.',
    icon: '🚀',
  },
  {
    number: '04',
    title: 'Analytics & ROI Reporting',
    desc: 'Track learner progress, engagement, and business impact through a real-time dashboard with ROI visibility.',
    icon: '📊',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            How Accredian Enterprise works
          </h2>
          <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
            From kickoff to measurable outcomes in 4 structured steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent z-10" style={{ width: 'calc(100% - 2rem)', left: '100%' }} />
              )}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200 h-full">
                <div className="text-3xl mb-4">{step.icon}</div>
                <div className="text-blue-400 font-display text-lg font-bold mb-2">{step.number}</div>
                <h3 className="text-white font-semibold text-base mb-3">{step.title}</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 transition-all duration-200 shadow-xl shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Start Your Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
