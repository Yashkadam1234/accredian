'use client'
import { useState } from 'react'

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
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
              Ready to upskill your team?
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Fill in your details and our enterprise team will get back to you within 24 hours with a customized proposal.
            </p>

            <div className="space-y-5">
              {[
                { icon: '✅', text: 'Free skills gap assessment included' },
                { icon: '🎓', text: 'Programs co-certified by IITs & IIMs' },
                { icon: '📊', text: 'Real-time ROI tracking dashboard' },
                { icon: '🤝', text: 'Dedicated enterprise success manager' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-blue-800 font-semibold text-sm mb-1">500+ enterprises trust Accredian</p>
              <p className="text-blue-600 text-sm">Average response time: &lt;4 hours on business days</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-gray-900 mb-2">We'll be in touch!</h3>
                <p className="text-gray-500 text-sm">
                  Our enterprise team will contact you within 24 hours with a customized proposal.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-blue-600 font-medium text-sm hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl text-gray-900 mb-6">Request a Free Demo</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={set('name')}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                      placeholder="priya@company.com"
                      value={form.email}
                      onChange={set('email')}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Company Name *</label>
                    <input
                      className={`form-input ${errors.company ? 'border-red-400' : ''}`}
                      placeholder="Infosys Ltd."
                      value={form.company}
                      onChange={set('company')}
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+91 9876543210"
                      value={form.phone}
                      onChange={set('phone')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Team Size *</label>
                    <select
                      className={`form-input ${errors.teamSize ? 'border-red-400' : ''}`}
                      value={form.teamSize}
                      onChange={set('teamSize')}
                    >
                      <option value="">Select size</option>
                      {TEAM_SIZES.map((s) => (
                        <option key={s} value={s}>{s} employees</option>
                      ))}
                    </select>
                    {errors.teamSize && <p className="text-red-500 text-xs mt-1">{errors.teamSize}</p>}
                  </div>
                  <div>
                    <label className="form-label">Area of Interest</label>
                    <select className="form-input" value={form.interest} onChange={set('interest')}>
                      <option value="">Select interest</option>
                      {INTERESTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Tell us about your goals</label>
                  <textarea
                    className="form-input resize-none"
                    rows={3}
                    placeholder="We're looking to upskill our data engineering team on ML..."
                    value={form.message}
                    onChange={set('message')}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Request Free Demo →'
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  By submitting, you agree to our Privacy Policy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
