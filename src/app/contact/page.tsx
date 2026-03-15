'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

const SUBJECTS = ['General', 'Support', 'Partnership', 'Press'] as const;

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function update(fields: Partial<typeof form>) {
    setForm((prev) => ({ ...prev, ...fields }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('--- TurboCharity Contact Form ---');
    console.log(JSON.stringify(form, null, 2));
    setSubmitted(true);
  }

  const isValid =
    form.name.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.subject.length > 0 &&
    form.message.trim().length > 0;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16">
        <Container>
          {/* Hero */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dark">
              Get in Touch
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Have a question or want to partner with us? We&apos;d love to hear from&nbsp;you.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-3">
            {/* ── Sidebar info ────────────────────── */}
            <div className="space-y-8 lg:col-span-1">
              {/* Email */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-dark">Email us</h3>
                <a
                  href="mailto:hello@turbocharity.com"
                  className="mt-1 block text-sm text-primary hover:underline"
                >
                  hello@turbocharity.com
                </a>
              </div>

              {/* Response time */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-dark">Response time</h3>
                <p className="mt-1 text-sm text-gray-600">
                  We respond within 24&nbsp;hours
                </p>
              </div>

              {/* Office hours */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-dark">Office hours</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Monday &ndash; Friday<br />
                  9:00 AM &ndash; 6:00 PM ET
                </p>
              </div>
            </div>

            {/* ── Contact form ────────────────────── */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-dark">Message sent!</h2>
                    <p className="mt-2 text-sm text-gray-600">
                      Thanks for reaching out. We&apos;ll get back to you within 24&nbsp;hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <label className="block">
                      <span className="text-sm font-medium text-gray-700">Name *</span>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update({ name: e.target.value })}
                        placeholder="Your full name"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-gray-700">Email *</span>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update({ email: e.target.value })}
                        placeholder="you@example.com"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-gray-700">Subject *</span>
                      <select
                        required
                        value={form.subject}
                        onChange={(e) => update({ subject: e.target.value })}
                        className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a subject</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-gray-700">Message *</span>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => update({ message: e.target.value })}
                        placeholder="How can we help?"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </label>

                    <button
                      type="submit"
                      disabled={!isValid}
                      className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
