'use client'

const FAQS = [
  {
    q: 'What is Accredian?',
    a: 'An enterprise upskilling platform that partners with top universities to train teams at scale.',
  },
  {
    q: 'Who are the learning partners?',
    a: 'We work with IITs, IIMs, and global universities to design industry-relevant programs.',
  },
  {
    q: 'How does the learning process work?',
    a: 'Structured cohorts, live mentorship, projects, and real-world learning outcomes.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQS.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 bg-gray-50 hover:shadow-sm transition"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.q}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}