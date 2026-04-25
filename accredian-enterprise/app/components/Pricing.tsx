'use client'

const PLANS = [
  {
    name: 'Starter',
    tagline: 'For growing teams',
    price: 'Custom',
    minLearners: '10–50 learners',
    color: 'border-gray-200',
    headerColor: 'bg-gray-50',
    cta: 'Talk to Sales',
    ctaClass: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    features: [
      'Access to 50+ programs',
      'Group enrollment dashboard',
      'Progress tracking',
      'Email support',
      'Certificate of completion',
    ],
    popular: false,
  },
  {
    name: 'Enterprise',
    tagline: 'Most popular for scale',
    price: 'Custom',
    minLearners: '50–500 learners',
    color: 'border-blue-600 shadow-2xl shadow-blue-500/20',
    headerColor: 'bg-brand-navy',
    cta: 'Get a Demo',
    ctaClass: 'bg-blue-600 text-white hover:bg-blue-700',
    features: [
      'Full program library (200+)',
      'Custom curriculum design',
      'Dedicated CSM & mentors',
      'Real-time analytics dashboard',
      'Multi-geography cohorts',
      'University co-certification',
      'API integrations (LMS/HRMS)',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    tagline: 'For large enterprises',
    price: 'Custom',
    minLearners: '500+ learners',
    color: 'border-gray-200',
    headerColor: 'bg-gray-50',
    cta: 'Contact Us',
    ctaClass: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    features: [
      'Everything in Enterprise',
      'Bespoke program creation',
      'On-site bootcamp options',
      'Executive coaching',
      'Dedicated tech infrastructure',
      'White-labeling available',
      'SLA-backed support',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Flexible Plans
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Pricing built for enterprise
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            All plans are custom-quoted based on team size, program selection, and duration. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-200 ${plan.color} ${plan.popular ? '-mt-4 mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center text-xs font-semibold tracking-wide py-2 uppercase">
                  Most Popular
                </div>
              )}
              <div className={`p-6 ${plan.headerColor}`}>
                <h3 className={`font-display text-2xl font-semibold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-300' : 'text-gray-500'}`}>{plan.tagline}</p>
                <div className={`text-3xl font-display font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </div>
                <p className={`text-xs ${plan.popular ? 'text-blue-300' : 'text-gray-400'}`}>{plan.minLearners}</p>
              </div>

              <div className="p-6 bg-white">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block w-full text-center font-semibold py-3 rounded-xl transition-all duration-200 text-sm ${plan.ctaClass}`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
