import PublicationsPageClient from "./PublicationsClient";

import { client } from "@/sanity/client";
import { PUBLICATION_QUERY } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export default async function PublicationsPage() {
  const publications = await client.fetch(PUBLICATION_QUERY);

  return (
    <PublicationsPageClient
      publications={publications}
    />
  );
}