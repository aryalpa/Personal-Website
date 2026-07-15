import Container from "@/components/ui/Container";

import ContactHero from "@/components/contact/ContactHero";
import ContactGrid from "@/components/contact/ContactGrid";
import { client } from "@/sanity/client";
import { CONTACT_QUERY } from "@/sanity/queries";

const contact = await client.fetch(CONTACT_QUERY);

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="pt-8 pb-5">

      <Container>

        <ContactHero />

        <ContactGrid contact={contact} />

      </Container>

    </main>
  );
}