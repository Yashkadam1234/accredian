'use client'

const COMPANIES = [
  'Infosys', 'Wipro', 'TCS', 'HCL', 'Cognizant',
  'Deloitte', 'HDFC Bank', 'PhonePe', 'Flipkart', 'Zomato'
]

export default function TrustBar() {
  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm font-medium tracking-widest uppercase mb-8">
          Trusted by 500+ leading enterprises
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {COMPANIES.map((company) => (
            <div
              key={company}
              className="text-gray-400 hover:text-blue-600 font-semibold text-base transition-colors duration-200 cursor-default"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
