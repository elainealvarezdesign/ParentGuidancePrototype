import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Field, TextArea, TextInput } from "@/components/ui/Field";
import { SuccessMessage } from "@/components/ui/SuccessMessage";
import { MessageCircle, Send } from "@/components/ui/icons";
import { submitQuestionCopy as copy } from "@/content/askATherapist";
import { prototypeNotice } from "@/content/site";

/* SubmitQuestionDialog (docs/system/components/dialog.md#submit-question). The "Ask a Therapist" form,
 * opened from the list page sidebar and from the answer page. Built from <Dialog> + <Field>.
 * Errors are tied to their fields; the success view is announced and receives focus (audit M06).
 * Prototype only: nothing is sent. Wire `onSubmit` to the API when it exists. */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"question" | "email", string>>;

export function SubmitQuestionDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onClose={onClose} title={copy.title} description={copy.description} icon={<MessageCircle />}>
      <SubmitQuestionForm onClose={onClose} />
    </Dialog>
  );
}

function SubmitQuestionForm({ onClose }: { onClose: () => void }) {
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const questionRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!question.trim()) next.question = "Write your question.";
    if (!EMAIL.test(email.trim())) next.email = "Enter a valid email address.";
    setErrors(next);
    if (next.question) questionRef.current?.focus();
    else if (next.email) emailRef.current?.focus();
    else setSubmitted(true);
  }

  if (submitted)
    return (
      <SuccessMessage
        notice={prototypeNotice}
        title={copy.successTitle}
        headingLevel="h3"
        className="px-8 py-12"
        action={<Button onClick={onClose}>Done</Button>}
      >
        {copy.successBody}
      </SuccessMessage>
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 p-6 md:p-8">
      <Field label="Your question" required error={errors.question}>
        <TextArea
          ref={questionRef}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="What would you like to ask our therapists about your child's mental health?"
        />
      </Field>
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-4">
        <Field label="Your name" hint="Optional" className="flex-1">
          <TextInput value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </Field>
        <Field label="Email" required error={errors.email} className="flex-1">
          <TextInput
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="your@email.com"
          />
        </Field>
      </div>
      <p className="text-xs text-pg-slate">{copy.privacy}</p>
      <Button type="submit" className="w-full">
        <Send size={14} aria-hidden="true" />
        Submit Question
      </Button>
    </form>
  );
}
