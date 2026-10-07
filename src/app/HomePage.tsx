import { homeFaq, homeHero, homeNewsletter, homePartners, homeResources, homeWhy } from "@/content/home";
import { HomeHero } from "@/sections/HomeHero";
import { ResourceTiles } from "@/sections/ResourceTiles";
import { FeatureRows } from "@/sections/FeatureRows";
import { FaqSection } from "@/sections/FaqSection";
import { PartnersStrip } from "@/sections/PartnersStrip";
import { NewsletterSection } from "@/sections/NewsletterSection";

/* Home ("/"). Recipe: docs/system/pages/home.md. A page is only a list of sections fed with content. */
export default function HomePage() {
  return (
    <>
      <HomeHero content={homeHero} />
      <ResourceTiles content={homeResources} />
      <FeatureRows content={homeWhy} />
      <FaqSection content={homeFaq} />
      <PartnersStrip content={homePartners} />
      <NewsletterSection content={homeNewsletter} />
    </>
  );
}
