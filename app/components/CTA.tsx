"use client";

import { useState } from "react";
import Toast from "./Toast";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setToast({
        message: "🎉 Lead submitted successfully!",
        type: "success",
      });

      setForm({ name: "", email: "", company: "" });
    } catch (err: any) {
      setToast({
        message: err.message || "Failed to submit",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="py-24 bg-blue-600 text-white text-center px-6">
      <h2 className="text-4xl font-bold">
        Ready to Transform Your Team?
      </h2>

      <p className="mt-4 opacity-90">
        Talk to our experts and build your growth roadmap
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-md mx-auto space-y-4"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 rounded text-black"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 rounded text-black"
        />

        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full p-3 rounded text-black"
        />

        <button
          disabled={loading}
          className="w-full bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          {loading ? "Submitting..." : "Book a Demo"}
        </button>
      </form>

      {/* TOAST */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}