import { describe, expect, it } from "vitest";
import { questions, therapists, questionCategories } from "./askATherapist";
import { courses, courseTopics, detailSlugFor } from "./courses";
import { coursePrograms } from "./coursePrograms";
import { EVENTS, eventCategories } from "./events";
import { seriesResources, topicHref } from "./mentalHealthSeries";
import { TOPICS, getTopic } from "./topics";
import { homeFaq } from "./home";
import { supportResources } from "./getHelp";

/* Content integrity: the data a CMS would send must keep these invariants, or pages break. */

const unique = <T>(xs: T[]) => new Set(xs).size === xs.length;

describe("content integrity", () => {
  it("questions have unique ids, known categories and known therapists", () => {
    expect(unique(questions.map((q) => q.id))).toBe(true);
    for (const q of questions) {
      expect(questionCategories).toContain(q.category);
      expect(therapists[q.answeredBy], q.question).toBeDefined();
      expect(q.duration).toMatch(/^\d+:\d{2}$/);
    }
  });

  it("courses use known topics and every card opens an existing course page", () => {
    expect(unique(courses.map((c) => c.id))).toBe(true);
    for (const c of courses) {
      expect(courseTopics).toContain(c.topic);
      expect(coursePrograms[detailSlugFor(c)], c.title).toBeDefined();
    }
  });

  it("course programs number their lessons 1..n and reference real modules", () => {
    for (const p of Object.values(coursePrograms)) {
      expect(p.lessons.map((l) => l.id)).toEqual(p.lessons.map((_, i) => i + 1));
      for (const l of p.lessons) if (l.module !== undefined) expect(p.modules?.[l.module], l.title).toBeDefined();
      for (const r of p.recommendations) if (r.slug) expect(coursePrograms[r.slug], r.title).toBeDefined();
    }
  });

  it("events have unique ids, valid dates and known categories", () => {
    expect(unique(EVENTS.map((e) => e.id))).toBe(true);
    for (const e of EVENTS) {
      expect(e.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(eventCategories[e.category]).toBeDefined();
      if (e.start || e.end) expect(e.start! < e.end!, e.id).toBe(true);
    }
  });

  it("every library resource opens an existing topic", () => {
    for (const r of seriesResources) {
      const slug = topicHref(r).split("/").pop();
      expect(getTopic(slug), r.title).toBeDefined();
    }
    expect(unique(TOPICS.map((t) => t.slug))).toBe(true);
  });

  it("FAQ questions are unique and support resources link out over https", () => {
    expect(unique(homeFaq.items.map((i) => i.question))).toBe(true);
    for (const r of supportResources) expect(r.href).toMatch(/^https:\/\//);
  });
});
