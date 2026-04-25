'use client'
import { useState, useEffect, useRef } from 'react'

type FormData = {
  name: string
  email: string
  company: string
  phone: string
  teamSize: string
  interest: string
  message: string
}

const TEAM_SIZES = ['10–50', '51–200', '201–500', '500+']
const INTERESTS = ['Data Science / AI', 'Product Management', 'Leadership', 'Engineering', 'Custom Program', 'Other']

export default function LeadForm() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', company: '', phone: '',
    teamSize: '', interest: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80)
          })
        }
      })
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.company.trim()) e.company = 'Company is required'
    if (!form.teamSize) e.teamSize = 'Select team size'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setErrors({})
    setStatus('loading')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', phone: '', teamSize: '', interest: '', message: '' })
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="reveal">
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Get in Touch
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
              Ready to upskill your team?
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Fill in your details and our enterprise team will get back to you within 24 hours with a customized proposal.
            </p>

            <div className="space-y-4">
              {[
                'Free skills gap assessment included',
                'Programs co-certified by IITs & IIMs',
                'Real-time ROI tracking dashboard',
                'Dedicated enterprise success manager',
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="text-green-600">✔</span>
                  {text}
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-100 text-sm">
              <p className="text-blue-800 font-semibold">500+ enterprises trust Accredian</p>
              <p className="text-blue-600">Average response time: &lt;4 hours</p>
            </div>
          </div>

          {/* FORM */}
          <div className="reveal bg-white rounded-2xl border border-gray-100 p-8">

            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>
                <h3 className="font-display text-xl text-gray-900 mb-2">We'll be in touch!</h3>
                <p className="text-gray-500 text-sm">
                  Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <h3 className="font-display text-lg text-gray-900 mb-4">
                  Request a Free Demo
                </h3>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={set('name')}
                  />
                  <input
                    type="email"
                    className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                    placeholder="Work Email *"
                    value={form.email}
                    onChange={set('email')}
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className={`form-input ${errors.company ? 'border-red-400' : ''}`}
                    placeholder="Company Name *"
                    value={form.company}
                    onChange={set('company')}
                  />
                  <input
                    className="form-input"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={set('phone')}
                  />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    className={`form-input ${errors.teamSize ? 'border-red-400' : ''}`}
                    value={form.teamSize}
                    onChange={set('teamSize')}
                  >
                    <option value="">Team Size *</option>
                    {TEAM_SIZES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>

                  <select
                    className="form-input"
                    value={form.interest}
                    onChange={set('interest')}
                  >
                    <option value="">Area of Interest</option>
                    {INTERESTS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <textarea
                  className="form-input resize-none"
                  rows={3}
                  placeholder="Tell us about your goals"
                  value={form.message}
                  onChange={set('message')}
                />

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary mt-2"
                >
                  {status === 'loading' ? 'Submitting...' : 'Request Free Demo'}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  No spam. We respect your privacy.
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}