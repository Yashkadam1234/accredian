'use client'

const UNIVERSITIES = [
  { name: 'IIT Guwahati', abbr: 'IITG', color: 'from-blue-700 to-blue-900', programs: 12 },
  { name: 'IIT Kanpur', abbr: 'IITK', color: 'from-red-700 to-red-900', programs: 8 },
  { name: 'IIM Lucknow', abbr: 'IIML', color: 'from-green-700 to-green-900', programs: 10 },
  { name: 'IIM Visakhapatnam', abbr: 'IIMV', color: 'from-purple-700 to-purple-900', programs: 6 },
  { name: 'XLRI Jamshedpur', abbr: 'XLRI', color: 'from-amber-600 to-amber-800', programs: 7 },
  { name: 'SP Jain', abbr: 'SPJ', color: 'from-cyan-700 to-cyan-900', programs: 5 },
  { name: 'IIT Roorkee', abbr: 'IITR', color: 'from-indigo-700 to-indigo-900', programs: 9 },
  { name: 'IIM Trichy', abbr: 'IIMT', color: 'from-teal-700 to-teal-900', programs: 4 },
]

export default function Universities() {
  return (
    <section id="universities" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Academic Partners
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Certified by India's finest institutions
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every program on our platform carries the credential of a top-tier institution. No fluff. No self-certification.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {UNIVERSITIES.map((uni) => (
            <div
              key={uni.name}
              className="feature-card rounded-2xl overflow-hidden border border-gray-100 cursor-pointer group"
            >
              <div className={`bg-gradient-to-br ${uni.color} p-6 flex items-center justify-center`}>
                <span className="text-white font-display text-2xl font-bold group-hover:scale-110 transition-transform duration-200">
                  {uni.abbr}
                </span>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-800 font-semibold text-sm leading-tight mb-1">{uni.name}</p>
                <p className="text-gray-400 text-xs">{uni.programs} programs</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge row */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-6">
          {['UGC Recognized', 'NAAC A++', 'QS Ranked', 'AACSB Accredited', 'AICTE Approved'].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600 text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
