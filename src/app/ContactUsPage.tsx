import { useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactUsPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (fullName.trim() && email.trim() && message.trim()) setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-pg-cream">
      <section className="px-6 pb-14 pt-28 md:px-10 lg:px-14">
        <div className="mx-auto max-w-pg-content text-center">
          <p className="mb-3 font-['Poppins',sans-serif] text-sm font-semibold uppercase tracking-[0.14em] text-pg-teal-dark">
            Contact Us
          </p>

          <h1 className="font-['Poppins',sans-serif] text-4xl font-bold text-pg-navy md:text-5xl">
            How can we help?
          </h1>

          <p className="mx-auto mt-4 max-w-[520px] font-['Poppins',sans-serif] text-base leading-7 text-pg-slate">
            Send us a message and our team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[700px] rounded-pg-xl border border-pg-line bg-white p-7 shadow-pg-card md:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Poppins',sans-serif] text-sm font-semibold text-pg-navy">
                    Full name <span className="text-pg-teal">*</span>
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="rounded-pg-md border border-pg-line px-4 py-2.5 font-['Poppins',sans-serif] text-sm text-pg-navy outline-none transition-colors placeholder:text-pg-teal focus:border-pg-sage"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-['Poppins',sans-serif] text-sm font-semibold text-pg-navy">
                    Email <span className="text-pg-teal">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-pg-md border border-pg-line px-4 py-2.5 font-['Poppins',sans-serif] text-sm text-pg-navy outline-none transition-colors placeholder:text-pg-teal focus:border-pg-sage"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Poppins',sans-serif] text-sm font-semibold text-pg-navy">Subject</label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="rounded-pg-md border border-pg-line px-4 py-2.5 font-['Poppins',sans-serif] text-sm text-pg-navy outline-none transition-colors placeholder:text-pg-teal focus:border-pg-sage"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Poppins',sans-serif] text-sm font-semibold text-pg-navy">
                  How can we help? <span className="text-pg-teal">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  required
                  className="resize-none rounded-pg-md border border-pg-line px-4 py-3 font-['Poppins',sans-serif] text-sm text-pg-navy outline-none transition-colors placeholder:text-pg-teal focus:border-pg-sage"
                />
              </div>

              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-pg-md bg-pg-teal py-3 font-['Poppins',sans-serif] text-sm font-semibold text-white"
                whileHover={{ backgroundColor: "var(--pg-teal-dark)" }}
                whileTap={{ scale: 0.97 }}
              >
                Send message
                <ArrowRight size={16} />
              </motion.button>

              <div className="border-t border-pg-line pt-5">
                <div className="flex items-center gap-3 rounded-pg-md bg-pg-tint px-4 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pg-tint">
                    <AlertTriangle size={16} className="text-pg-teal" />
                  </div>
                  <p className="font-['Poppins',sans-serif] text-sm text-pg-navy">
                    If you or someone you know is in immediate danger, <span className="font-bold">call 911.</span>
                  </p>
                </div>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-pg-tint"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <CheckCircle size={28} className="text-pg-teal" />
              </motion.div>

              <h2 className="font-['Poppins',sans-serif] text-xl font-bold text-pg-navy">Message sent!</h2>

              <p className="max-w-xs font-['Poppins',sans-serif] text-sm leading-relaxed text-pg-slate">
                Thank you for reaching out. Our team will get back to you as soon as possible.
              </p>

              <motion.button
                onClick={() => {
                  setSubmitted(false);
                  setFullName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");
                }}
                className="mt-2 rounded-pg-md bg-pg-teal px-8 py-3 font-['Poppins',sans-serif] text-sm font-semibold text-white"
                whileHover={{ backgroundColor: "var(--pg-teal-dark)" }}
                whileTap={{ scale: 0.97 }}
              >
                Done
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
