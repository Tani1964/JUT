import { useState } from 'react'
import { images } from '../data/images'
import PageHero from '../components/PageHero'
import Button from '../components/Button'

function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="text-green-600 font-medium text-sm">
        Thank you for subscribing! We'll keep you updated.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="flex-1 bg-white/20 border border-white/40 text-white placeholder-white/70 px-4 py-2.5 text-sm focus:outline-none focus:border-white"
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="flex-1 bg-white/20 border border-white/40 text-white placeholder-white/70 px-4 py-2.5 text-sm focus:outline-none focus:border-white"
      />
      <button
        type="submit"
        className="bg-gray-800 text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-700 transition-colors"
      >
        Submit
      </button>
    </form>
  )
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 text-green-700 text-sm">
        Thank you for reaching out! We'll get back to you within 1 business day.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-green"
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-green"
      />
      <textarea
        placeholder="Message"
        required
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-green resize-none"
      />
      <div>
        <button
          type="submit"
          className="bg-gray-700 text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-600 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <div>
      {/* Newsletter Hero */}
      <section
        className="relative py-20 px-6 sm:px-10"
        style={{
          backgroundImage: `url(${images.contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-3">
            Stay Informed with JUT SFUNDS
          </h1>
          <p className="text-gray-200 text-sm mb-8">
            Sign up for our newsletter to receive the latest updates and insights on recovering your funds.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Visit Our Office */}
      <section className="py-16 px-6 sm:px-10 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Visit Us at Our Office</h2>
            <p className="text-gray-500 text-sm">
              We're here to assist you during our business hours—come see us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact form */}
            <ContactForm />

            {/* Map + info */}
            <div className="flex flex-col gap-6">
              {/* Embedded map */}
              <div className="w-full h-56 bg-gray-200 overflow-hidden">
                <iframe
                  title="Office Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.4!2d-121.97!3d37.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1"
                />
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">123 Sunnyvale Rd, San Jose</p>
                    <p className="text-gray-500 text-sm">California, United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700 text-sm">Mon–Fri 10am–5pm, Sat 1pm–5pm</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-700 text-sm">415-111-2233</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
