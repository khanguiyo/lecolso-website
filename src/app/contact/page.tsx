import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { Kicker } from "@/components/site/kicker";
import { CtaLink } from "@/components/site/cta-link";
import { Divider } from "@/components/site/divider";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { ContactForm } from "@/components/site/contact-form";
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactHours,
  contactPhone,
  contactWebsite,
  contactWebsiteLabel,
  contactWhatsapp,
  telHref,
  whatsappHref,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question sur Lecolso, une démonstration à planifier ou un devis pour plusieurs postes : contactez Teiik SARL.",
};

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Container>
          <section className="pt-[84px] pb-14">
            <Kicker className="mb-[18px]">Nous joindre</Kicker>
            <h1 className="m-0 ml-[-0.058em] max-w-[22ch] text-[clamp(36px,4.6vw,64px)] leading-[1.06] tracking-[-0.02em]">
              Parlons de votre établissement.
            </h1>
            <p className="mt-7 max-w-[56ch] text-[17px] leading-[29px]">
              Une question sur le logiciel, une démonstration à planifier, un devis pour
              plusieurs postes ou un problème technique : écrivez-nous, appelez-nous ou laissez
              un message ci-dessous. Nous répondons sous un jour ouvré.
            </p>
          </section>

          <Divider />

          {/* Coordonnées */}
          <section id="coordonnees" className="py-[60px]">
            <div className="grid grid-cols-1 gap-x-[clamp(24px,4vw,56px)] gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border-t-2 border-[#DDD9D7] py-[26px]">
                <h2 className="m-0 text-[17px] leading-[26px]">E-mail</h2>
                <p className="mt-2.5 text-[15px] leading-[27px]">
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </p>
                <p className="m-0 text-[15px] leading-[27px]">
                  <a href={contactWebsite} target="_blank" rel="noopener noreferrer">
                    {contactWebsiteLabel}
                  </a>
                </p>
              </div>
              <div className="border-t-2 border-[#DDD9D7] py-[26px]">
                <h2 className="m-0 text-[17px] leading-[26px]">Téléphone</h2>
                <p className="mt-2.5 text-[15px] leading-[27px]">
                  <a href={telHref(contactPhone)}>{contactPhone}</a>
                </p>
                <p className="m-0 text-[15px] leading-[27px]">
                  <a href={whatsappHref(contactWhatsapp)} target="_blank" rel="noopener noreferrer">
                    {contactWhatsapp}
                  </a>{" "}
                  (WhatsApp)
                </p>
              </div>
              <div className="border-t-2 border-[#DDD9D7] py-[26px]">
                <h2 className="m-0 text-[17px] leading-[26px]">Adresse</h2>
                <p className="mt-2.5 text-[15px] leading-[27px]">{contactAddressLine1}</p>
                <p className="m-0 text-[15px] leading-[27px]">{contactAddressLine2}</p>
              </div>
              <div className="border-t-2 border-[#DDD9D7] py-[26px]">
                <h2 className="m-0 text-[17px] leading-[26px]">Horaires</h2>
                <p className="mt-2.5 text-[15px] leading-[27px]">{contactHours}</p>
                <p className="mt-1.5 text-[13px] leading-5 text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
                  Heure d&apos;Abidjan (GMT)
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* Formulaire */}
          <section id="formulaire" className="py-[76px]">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-[clamp(24px,5vw,96px)]">
              <div>
                <Kicker className="mb-3.5">Formulaire</Kicker>
                <h2 className="m-0 ml-[-0.03em] text-[clamp(26px,3vw,38px)] leading-[1.1] tracking-[-0.015em]">
                  Écrire un message
                </h2>
                <p className="mt-5 max-w-[40ch] border-l-[3px] border-[#D95300] pl-5 text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                  Dites-nous le nombre d&apos;élèves et les niveaux concernés : nous préparons la
                  démonstration sur un cas proche du vôtre.
                </p>
              </div>
              <ContactForm />
            </div>
          </section>
        </Container>

        <section className="bg-[#A33F00] text-white">
          <Container className="py-[76px]">
            <h2 className="m-0 ml-[-0.058em] text-[clamp(30px,3.8vw,50px)] leading-[1.05] tracking-[-0.015em]">
              <span className="block">Plus rapide au téléphone ?</span>
              <span className="block">Appelez-nous.</span>
            </h2>
            <p className="mt-7 max-w-[46ch] text-[17px] leading-[29px]">
              {contactPhone} — du lundi au vendredi, ou par WhatsApp au {contactWhatsapp}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href={whatsappHref(contactWhatsapp)} variant="ghost-white">
                Écrire sur WhatsApp
              </CtaLink>
              <CtaLink href="/" variant="ghost-white">
                Revenir au site
              </CtaLink>
            </div>
          </Container>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
