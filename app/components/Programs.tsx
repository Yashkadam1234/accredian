"use client";
import { useState } from "react";

const CATEGORIES = ["All", "Data Science", "AI / ML", "Product", "Leadership", "Engineering"];

const PROGRAMS = [
  {
    category: "Data Science",
    title: "PG Program in Data Science & AI",
    university: "IIT Guwahati",
    duration: "11 Months",
    level: "Advanced",
    badge: "Most Popular",
    topics: ["Python", "ML", "Deep Learning", "NLP"],
  },
  {
    category: "AI / ML",
    title: "Executive Program in ML Engineering",
    university: "IIT Kanpur",
    duration: "9 Months",
    level: "Expert",
    badge: "New",
    topics: ["LLMs", "MLOps", "PyTorch", "AWS"],
  },
  {
    category: "Product",
    title: "Product Management Program",
    university: "IIM Lucknow",
    duration: "8 Months",
    level: "Intermediate",
    badge: "",
    topics: ["Strategy", "Roadmapping", "Analytics", "UX"],
  },
  {
    category: "Leadership",
    title: "Senior Leadership Programme",
    university: "IIM Visakhapatnam",
    duration: "12 Months",
    level: "Executive",
    badge: "CXO Track",
    topics: ["Strategy", "Finance", "Operations", "People"],
  },
  {
    category: "Engineering",
    title: "Full Stack Engineering Bootcamp",
    university: "IIT Roorkee",
    duration: "6 Months",
    level: "Intermediate",
    badge: "",
    topics: ["React", "Node.js", "Databases", "Cloud"],
  },
  {
    category: "Data Science",
    title: "Business Analytics Program",
    university: "XLRI Jamshedpur",
    duration: "7 Months",
    level: "Intermediate",
    badge: "High ROI",
    topics: ["SQL", "Tableau", "Statistics", "Excel"],
  },
];

const LEVELS: Record<string, string> = {
  Intermediate: "bg-gray-100 text-gray-700",
  Advanced: "bg-gray-100 text-gray-700",
  Expert: "bg-gray-100 text-gray-700",
  Executive: "bg-gray-100 text-gray-700",
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All" ? PROGRAMS : PROGRAMS.filter((p) => p.category === activeTab);

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Programs for enterprise teams
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Industry-aligned programs co-created with leading institutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTab === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-sm transition"
            >
              {/* Badge */}
              {p.badge && (
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="text-gray-900 font-semibold mt-3 mb-1">
                {p.title}
              </h3>

              <p className="text-sm text-gray-500 mb-3">
                {p.university}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                <span>{p.duration}</span>
                <span className={`px-2 py-0.5 rounded-full ${LEVELS[p.level]}`}>
                  {p.level}
                </span>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.topics.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="block text-center bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                Explore Program
              </a>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="text-blue-600 font-medium text-sm hover:underline"
          >
            View all programs →
          </a>
        </div>
      </div>
    </section>
  );
}