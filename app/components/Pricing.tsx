'use client'

const PLANS = [
  {
    name: 'Starter',
    learners: '10–50 learners',
    cta: 'Talk to Sales',
    highlight: false,
    features: [
      'Access to 50+ programs',
      'Group enrollment dashboard',
      'Progress tracking',
      'Email support',
      'Certificate of completion',
    ],
  },
  {
    name: 'Enterprise',
    learners: '50–500 learners',
    cta: 'Get a Demo',
    highlight: true,
    features: [
      'Full program library (200+)',
      'Custom curriculum design',
      'Dedicated mentors & CSM',
      'Real-time analytics dashboard',
      'Multi-location cohorts',
      'University co-certification',
      'LMS / HRMS integrations',
    ],
  },
  {
    name: 'Premium',
    learners: '500+ learners',
    cta: 'Contact Us',
    highlight: false,
    features: [
      'Everything in Enterprise',
      'Bespoke program creation',
      'On-site bootcamps',
      'Executive coaching',
      'Dedicated infrastructure',
      'White-label support',
      'SLA-backed services',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Pricing
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Flexible plans for every organization
          </h2>

          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Pricing is customized based on your team size, programs, and duration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border bg-white p-6 flex flex-col justify-between transition ${
                plan.highlight
                  ? 'border-blue-600 shadow-md'
                  : 'border-gray-200'
              }`}
            >

              {/* Top */}
              <div>
                {plan.highlight && (
                  <div className="text-xs font-semibold text-blue-600 mb-2">
                    Most popular
                  </div>
                )}

                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {plan.name}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {plan.learners}
                </p>

                <div className="text-2xl font-bold text-gray-900 mb-4">
                  Custom Pricing
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-600 mt-1">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-lg transition ${
                  plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}