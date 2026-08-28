import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <Container>
      <footer className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-14 text-[13px] leading-7 text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
        <span className="flex items-center gap-2.5">
          <Image
            src="/images/lecolso-logo.png"
            alt=""
            width={22}
            height={22}
            className="block h-[22px] w-auto"
          />
          Lecolso — la gestion scolaire, hors ligne d&apos;abord.
        </span>
        <span className="flex flex-wrap gap-6">
          <Link href="/informations#mentions">Mentions légales</Link>
          <Link href="/informations#confidentialite">Confidentialité</Link>
          <Link href="/contact">Contact</Link>
        </span>
      </footer>
    </Container>
  );
}
