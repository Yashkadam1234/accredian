"use client";
import { useEffect, useRef } from "react";

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253M12 6.253C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "IIT & IIM Curriculum",
    desc: "Programs co-created with top-tier universities for real-world business impact.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M9 19V6m6 13V10m-3 9V4" />
      </svg>
    ),
    title: "Real-Time Analytics",
    desc: "Track progress, engagement, and ROI with a unified analytics dashboard.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20h10" />
      </svg>
    ),
    title: "Live Mentorship",
    desc: "Learn directly from industry experts through guided sessions and feedback.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Cohort Learning",
    desc: "Structured peer learning that drives accountability and higher completion.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z" />
      </svg>
    ),
    title: "Custom Curriculum",
    desc: "Tailored learning journeys aligned with your business goals and teams.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M12 9v6" />
      </svg>
    ),
    title: "AI-Adaptive Paths",
    desc: "Personalized learning powered by AI to match pace, skill level, and goals.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="reveal text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Built for enterprise learning teams
          </h2>
          <p className="reveal text-gray-500 text-lg max-w-2xl mx-auto">
            A complete platform to design, deliver, and measure learning at scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-100 rounded-2xl overflow-hidden">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`reveal p-6 border-b border-gray-100 ${
                i % 3 !== 2 ? "lg:border-r" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}