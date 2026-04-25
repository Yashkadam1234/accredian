"use client";

const COMPANIES = [
  "Infosys",
  "Wipro",
  "TCS",
  "HCL",
  "Cognizant",
  "Deloitte",
  "HDFC Bank",
  "PhonePe",
  "Flipkart",
  "Zomato",
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-center text-gray-500 text-sm mb-8">
          Trusted by 500+ leading enterprises
        </p>

        {/* Company Names */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {COMPANIES.map((company) => (
            <div
              key={company}
              className="text-gray-400 text-sm font-medium transition duration-200 hover:text-gray-700"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}