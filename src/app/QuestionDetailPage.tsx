import { useState } from "react";
import { Link, useParams } from "react-router";
import { getQuestion, questionDisclaimer, questions, therapists, type Question } from "@/content/askATherapist";
import { Container } from "@/components/layout/Section";
import { PrevNextNav } from "@/components/patterns/PrevNextNav";
import { SubmitQuestionDialog } from "@/components/patterns/SubmitQuestionDialog";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Avatar } from "@/components/ui/Avatar";
import { AccordionItem } from "@/components/ui/Accordion";
import { MediaPlayer } from "@/components/ui/MediaPlayer";
import { AlertCircle, ArrowRight, ChevronRight, MessageCircle } from "@/components/ui/icons";
import NotFoundPage from "./NotFoundPage";

/* Question answer ("/ask-a-therapist/:questionId"). Recipe: docs/system/pages/question-detail.md.
 * Breadcrumb → [title, video, transcript, disclaimer, prev/next | answered-by, submit prompt, related].
 * Unknown ids render a not-found message (audit M04); the body is keyed by id so the player and the
 * transcript reset when moving to another answer (audit M03). */

const RELATED_COUNT = 3;
const SUBMIT_IMAGE =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&h=220&q=80";

export default function QuestionDetailPage() {
  const { questionId } = useParams<{ questionId: string }>();
  const question = getQuestion(Number(questionId));
  if (!question)
    return (
      <NotFoundPage
        eyebrow="Question not found"
        title="We couldn't find that answer"
        body="It may have been removed, or the link may be incomplete."
        actions={[{ label: "Browse all questions", to: "/ask-a-therapist" }]}
      />
    );
  return <QuestionAnswer key={question.id} question={question} />;
}

const card = "rounded-pg-xl border border-pg-line bg-white shadow-pg-card";

function QuestionAnswer({ question }: { question: Question }) {
  const [submitOpen, setSubmitOpen] = useState(false);
  const therapist = therapists[question.answeredBy];
  const index = questions.indexOf(question);
  const prev = questions[index - 1];
  const next = questions[index + 1];
  const sameCategory = questions.filter((q) => q.id !== question.id && q.category === question.category);
  const related = (sameCategory.length ? sameCategory : questions.filter((q) => q.id !== question.id)).slice(
    0,
    RELATED_COUNT,
  );
  const link = (q: Question) => ({ title: q.question, to: `/ask-a-therapist/${q.id}` });

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Ask a Therapist", to: "/ask-a-therapist" },
          { label: question.category, hideOnMobile: true },
          { label: question.question },
        ]}
      />

      <Container className="flex flex-col gap-6 py-8 lg:flex-row">
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <div className="flex flex-col items-start gap-2">
            <Badge tone="tint" shape="label" className="px-2 py-0.5">
              {question.category}
            </Badge>
            <h1 className="text-pg-h1 text-pg-navy">{question.question}</h1>
            <p className="text-xs text-pg-slate">— User Submitted</p>
          </div>

          <MediaPlayer poster={question.poster} duration={question.duration} title={question.question} />

          <AccordionItem title="Read Transcript" headingLevel={2} variant="compact">
            <p className="text-sm text-pg-slate">{question.transcript}</p>
          </AccordionItem>

          <div className="flex gap-3 rounded-pg-lg border border-pg-amber/40 bg-pg-warning-soft px-4 py-3">
            <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-pg-warning" />
            <p className="text-xs text-pg-slate">
              <strong className="text-pg-navy">Important: </strong>
              {questionDisclaimer}
            </p>
          </div>

          <PrevNextNav label="More answers" prev={prev && link(prev)} next={next && link(next)} />
        </div>

        <aside aria-label="About this answer" className="flex w-full shrink-0 flex-col gap-4 lg:w-75">
          <section aria-labelledby="answered-by" className={`${card} flex flex-col gap-3 p-5`}>
            <h2 id="answered-by" className="text-pg-eyebrow text-pg-slate">
              Answered by
            </h2>
            <div className="flex items-center gap-3">
              <Avatar name={therapist.name} size="l" />
              <div>
                <p className="text-sm font-semibold text-pg-navy">{therapist.name}</p>
                <p className="text-xs text-pg-teal-dark">{therapist.credential}</p>
              </div>
            </div>
            <p className="text-xs text-pg-slate">{therapist.bio}</p>
          </section>

          <section aria-labelledby="own-question" className="relative overflow-hidden rounded-pg-xl shadow-pg-card">
            <img src={SUBMIT_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-pg-navy/90 via-pg-navy/70 to-pg-navy/40"
              aria-hidden="true"
            />
            <div className="relative flex flex-col gap-3 p-5">
              <p className="flex items-center gap-2 text-pg-eyebrow text-pg-sage">
                <MessageCircle size={14} aria-hidden="true" /> Ask a Therapist
              </p>
              <h2 id="own-question" className="text-base font-bold text-white">
                Have a question of your own?
              </h2>
              <p className="text-xs text-white/80">
                Submit your parenting question and get a personalized video response from one of our licensed
                therapists.
              </p>
              <Button variant="inverse" size="s" onClick={() => setSubmitOpen(true)} className="self-start">
                Submit Question <ArrowRight size={14} aria-hidden="true" />
              </Button>
            </div>
          </section>

          <section aria-labelledby="related" className={`${card} overflow-hidden`}>
            <h2 id="related" className="border-b border-pg-line p-4 text-sm font-bold text-pg-navy">
              Related Questions
            </h2>
            <ul className="divide-y divide-pg-tint-soft">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/ask-a-therapist/${item.id}`}
                    className="group flex items-start gap-2 p-4 no-underline transition-colors hover:bg-pg-cream"
                  >
                    <Badge tone="tint" shape="label" className="mt-0.5 shrink-0 px-2 py-0.5">
                      {item.category}
                    </Badge>
                    <span className="line-clamp-2 text-xs text-pg-navy group-hover:text-pg-teal-dark">
                      {item.question}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/ask-a-therapist"
              className="flex items-center gap-1 border-t border-pg-line px-4 py-3 text-xs text-pg-teal-dark no-underline hover:underline"
            >
              Browse all questions <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </section>
        </aside>
      </Container>

      <SubmitQuestionDialog open={submitOpen} onClose={() => setSubmitOpen(false)} />
    </>
  );
}
