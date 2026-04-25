"use client";

const UNIVERSITIES = [
  { name: "IIT Guwahati", programs: 12 },
  { name: "IIT Kanpur", programs: 8 },
  { name: "IIM Lucknow", programs: 10 },
  { name: "IIM Visakhapatnam", programs: 6 },
  { name: "XLRI Jamshedpur", programs: 7 },
  { name: "SP Jain", programs: 5 },
  { name: "IIT Roorkee", programs: 9 },
  { name: "IIM Trichy", programs: 4 },
];

export default function Universities() {
  return (
    <section id="universities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Learn from leading institutions
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Programs delivered in collaboration with top universities and business schools.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-gray-100 rounded-2xl overflow-hidden">
          {UNIVERSITIES.map((uni, i) => (
            <div
              key={uni.name}
              className={`p-6 text-center border-b border-gray-100 ${
                i % 4 !== 3 ? "lg:border-r" : ""
              }`}
            >
              <p className="text-gray-900 font-medium mb-1">
                {uni.name}
              </p>
              <p className="text-gray-400 text-sm">
                {uni.programs} programs
              </p>
            </div>
          ))}
        </div>

        {/* Accreditation row */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            "UGC Recognized",
            "NAAC A++",
            "QS Ranked",
            "AACSB Accredited",
            "AICTE Approved",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              {badge}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}