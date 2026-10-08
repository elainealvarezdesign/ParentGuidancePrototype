import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { searchIndex, searchPage } from "@/content/search";
import { searchSite } from "@/lib/search";
import { PageIntro } from "@/sections/PageIntro";
import { SiteSearch } from "@/sections/SiteSearch";

/* Search ("/search?q=…"). Recipe: docs/system/pages/search.md. The Home hero search sends people here. */
export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q")?.trim() ?? "";
  const results = useMemo(() => searchSite(query, searchIndex), [query]);
  const { intro, ...content } = searchPage;

  return (
    <>
      <PageIntro content={intro} />
      <SiteSearch content={content} query={query} results={results} onSearch={(q) => setParams(q ? { q } : {})} />
    </>
  );
}
