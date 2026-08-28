import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { CtaLink } from "./cta-link";

const links = [
  { href: "/#modules", label: "Modules" },
  { href: "/#horsligne", label: "Hors ligne" },
  { href: "/#sauvegarde", label: "Sauvegarde" },
  { href: "/#licence", label: "Licence" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#DDD9D7] bg-[#F3F2F2]">
      <Container className="flex items-center gap-6 py-3">
        <Link
          href="/"
          className="mr-auto flex flex-none items-center gap-2.5 text-[#201E1D] no-underline"
        >
          <Image
            src="/images/lecolso-logo.png"
            alt="Lecolso"
            width={30}
            height={30}
            className="block h-[30px] w-auto"
          />
          <span className="font-heading text-[21px] font-extrabold tracking-[-0.01em]">
            Lecolso
          </span>
        </Link>
        <nav className="hidden items-center gap-6 min-[820px]:flex">
          {links.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[14px] text-[#201E1D] no-underline hover:text-[#D95300]"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="whitespace-nowrap text-[14px] text-[#201E1D] no-underline hover:text-[#D95300]"
          >
            Contact
          </Link>
        </nav>
        <CtaLink href="/#telecharger">Télécharger</CtaLink>
      </Container>
    </header>
  );
}
