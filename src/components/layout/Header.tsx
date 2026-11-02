import { mainNav } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { whatsappUrl, generalMessage } from "@/lib/whatsapp";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 text-ink backdrop-blur-sm">
      <div className="shell flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Logo priority className="h-12 lg:h-[3.75rem]" />
        <NavLinks items={mainNav} className="hidden lg:flex" />
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="/demande-de-devis" className="h-10! px-4! text-[0.9rem]!">
              Parler à un géomètre
            </ButtonLink>
          </div>
          <MobileMenu items={mainNav} whatsappHref={whatsappUrl(generalMessage)} />
        </div>
      </div>
    </header>
  );
}
