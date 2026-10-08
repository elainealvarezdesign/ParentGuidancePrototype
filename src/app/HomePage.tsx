import { homeFaq, homeHero, homeNewsletter, homePartners, homeResources, homeWhy } from "@/content/home";
import { useNavigate } from "react-router";
import { HomeHero } from "@/sections/HomeHero";
import { ResourceTiles } from "@/sections/ResourceTiles";
import { FeatureRows } from "@/sections/FeatureRows";
import { FaqSection } from "@/sections/FaqSection";
import { PartnersStrip } from "@/sections/PartnersStrip";
import { NewsletterSection } from "@/sections/NewsletterSection";

/* Home ("/"). Recipe: docs/system/pages/home.md. A page is only a list of sections fed with content. */
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <HomeHero
        content={homeHero}
        onSearch={(q) => navigate(q.trim() ? `/search?q=${encodeURIComponent(q.trim())}` : "/search")}
      />
      <ResourceTiles content={homeResources} />
      <FeatureRows content={homeWhy} />
      <FaqSection content={homeFaq} />
      <PartnersStrip content={homePartners} />
      <NewsletterSection content={homeNewsletter} />
    </>
  );
}
