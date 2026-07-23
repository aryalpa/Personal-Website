import PublicationsPageClient from "./PublicationsClient";

import { client } from "@/sanity/client";
import {
  PUBLICATION_PAGE_SETTINGS_QUERY,
  PUBLICATION_QUERY,
} from "@/sanity/queries";

export const dynamic = "force-dynamic";

export default async function PublicationsPage() {
  const [publications, publicationPageSettings] = await Promise.all([
    client.fetch(PUBLICATION_QUERY),
    client.fetch(PUBLICATION_PAGE_SETTINGS_QUERY),
  ]);

  return (
    <PublicationsPageClient
      publications={publications}
      citationCount={publicationPageSettings?.citationCount ?? 414}
    />
  );
}
