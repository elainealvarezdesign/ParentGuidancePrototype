import { coachingBenefits, coachingHero, coachingSteps, coachingTestimonials } from "@/content/parentCoaching";
import { SplitHero } from "@/sections/SplitHero";
import { BenefitsBand } from "@/sections/BenefitsBand";
import { ProcessSteps } from "@/sections/ProcessSteps";
import { Testimonials } from "@/sections/Testimonials";

/* Parent Coaching ("/parent-coaching"). Recipe: docs/system/pages/parent-coaching.md.
 * SplitHero (portrait) → BenefitsBand → ProcessSteps → Testimonials. */
export default function ParentCoachingPage() {
  return (
    <>
      <SplitHero content={coachingHero} />
      <BenefitsBand content={coachingBenefits} />
      <ProcessSteps content={coachingSteps} />
      <Testimonials content={coachingTestimonials} />
    </>
  );
}
