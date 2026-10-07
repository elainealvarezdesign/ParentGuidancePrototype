import { useRef, useState, type FormEvent } from "react";
import { contactForm, contactIntro } from "@/content/contact";
import { PageIntro } from "@/sections/PageIntro";
import { Section, Container } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Field, TextArea, TextInput } from "@/components/ui/Field";
import { CrisisNotice } from "@/components/ui/Notice";
import { SuccessMessage } from "@/components/ui/SuccessMessage";
import { ArrowRight } from "@/components/ui/icons";

/* Contact Us ("/contact-us"). Recipe: docs/system/pages/contact-us.md.
 * PageIntro → form card (fields, crisis notice) that becomes a SuccessMessage once sent.
 * Prototype only: nothing is sent. */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type Errors = Partial<Record<"name" | "email" | "message", string>>;
const empty = { name: "", email: "", subject: "", message: "" };

export default function ContactUsPage() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };
  const set = (key: keyof typeof empty) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!EMAIL.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Tell us how we can help.";
    setErrors(next);
    const first = (["name", "email", "message"] as const).find((k) => next[k]);
    if (first) refs[first].current?.focus();
    else setSubmitted(true);
  }

  function reset() {
    setValues(empty);
    setSubmitted(false);
  }

  return (
    <>
      <PageIntro content={contactIntro} />
      <Section spacing="none" className="pb-20">
        <Container width="reading">
          <div className="rounded-pg-xl border border-pg-line bg-white p-7 shadow-pg-card md:p-10">
            {submitted ? (
              <SuccessMessage
                title={contactForm.successTitle}
                className="py-8"
                action={<Button onClick={reset}>Done</Button>}
              >
                {contactForm.successBody}
              </SuccessMessage>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" required error={errors.name}>
                    <TextInput ref={refs.name} value={values.name} onChange={set("name")} autoComplete="name" />
                  </Field>
                  <Field label="Email" required error={errors.email}>
                    <TextInput
                      ref={refs.email}
                      type="email"
                      value={values.email}
                      onChange={set("email")}
                      autoComplete="email"
                    />
                  </Field>
                </div>
                <Field label="Subject">
                  <TextInput value={values.subject} onChange={set("subject")} />
                </Field>
                <Field label="How can we help?" required error={errors.message}>
                  <TextArea ref={refs.message} rows={5} value={values.message} onChange={set("message")} />
                </Field>
                <Button type="submit" className="w-full">
                  {contactForm.submitLabel}
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <CrisisNotice className="mt-1" />
              </form>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
