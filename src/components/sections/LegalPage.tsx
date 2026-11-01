import { Breadcrumbs, DraftNote } from "@/components/ui/primitives";

/** Gabarit des pages juridiques. */
export function LegalPage({
  title,
  href,
  sections,
  note,
}: {
  title: string;
  href: string;
  sections: { heading: string; body: string[] }[];
  note: string;
}) {
  return (
    <div className="shell grid gap-10 pt-8 pb-20 md:pt-10 md:pb-28">
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: title, href },
        ]}
      />
      <h1 className="text-h1 max-w-[20ch] pt-4">{title}</h1>
      <DraftNote className="max-w-[65ch]">{note}</DraftNote>
      <div className="grid max-w-[65ch] gap-10">
        {sections.map((section) => (
          <section key={section.heading} className="grid gap-3">
            <h2 className="text-h3">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-slate">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
