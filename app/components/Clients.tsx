'use client'

const CLIENTS = [
  'IIT Kanpur',
  'IIM Lucknow',
  'IIM Kozhikode',
  'XLRI',
  'Microsoft',
  'Amazon',
]

export default function Clients() {
  return (
    <section id="clients" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase block mb-3">
            Partners
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by top institutions & companies
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We collaborate with leading universities and global tech companies.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">

          {CLIENTS.map((client) => (
            <div
              key={client}
              className="bg-white border border-gray-100 rounded-xl py-6 text-center text-gray-700 font-medium hover:shadow-sm transition"
            >
              {client}
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}