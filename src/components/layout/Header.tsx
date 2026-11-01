import { mainNav } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { whatsappUrl, generalMessage } from "@/lib/whatsapp";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-forest-line/60 bg-forest text-white">
      <div className="shell flex h-[4.25rem] items-center justify-between gap-6">
        <Logo />
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
