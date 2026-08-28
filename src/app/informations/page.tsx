import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { Kicker } from "@/components/site/kicker";
import { CtaLink } from "@/components/site/cta-link";
import { Divider } from "@/components/site/divider";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import {
  contactEmail,
  contactPhone,
  contactWebsiteLabel,
  legalAdresse,
  legalCc,
  legalFormeJuridique,
  legalMajDate,
  legalRaisonSociale,
  legalRccm,
  legalResponsable,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales et confidentialité",
  description:
    "Mentions légales de Lecolso, édité par Teiik SARL, et informations sur la protection des données scolaires.",
};

const legalRows: [string, string][] = [
  ["Dénomination", legalRaisonSociale],
  ["Forme juridique", legalFormeJuridique],
  ["Siège social", legalAdresse],
  ["RCCM", legalRccm],
  ["Compte contribuable", legalCc],
  ["Directeur de la publication", legalResponsable],
  ["Contact", `${contactEmail} · ${contactPhone}`],
  ["Site web", contactWebsiteLabel],
];

const localData = [
  {
    title: "Base de données locale",
    body: "Un fichier unique sur la machine : fiches élèves et parents, classes, notes, bulletins, écritures de caisse, paie.",
  },
  {
    title: "Comptes utilisateurs",
    body: "Les mots de passe sont enregistrés sous forme de hachage, jamais en clair, et ne sortent jamais du poste.",
  },
  {
    title: "Fichier de licence",
    body: "Stocké chiffré sur la machine ; la clé n'est jamais conservée en clair.",
  },
  {
    title: "Archives de sauvegarde",
    body: "Toujours chiffrées avant d'être écrites sur le disque, sur une clé USB ou envoyées à distance.",
  },
];

const outboundConnections = [
  {
    n: "01",
    strong: "Activation de la licence.",
    rest: "Au premier lancement, la clé de licence et un identifiant technique de la machine sont transmis au serveur de licence. Aucune donnée d'élève n'est envoyée.",
  },
  {
    n: "02",
    strong: "Mises à jour.",
    rest: "L'application vérifie la disponibilité d'une nouvelle version et la télécharge. Cet échange ne contient aucune donnée de l'établissement.",
  },
  {
    n: "03",
    strong: "Sauvegarde à distance, si vous l'activez.",
    rest: "Vous choisissez la destination — Google Drive ou votre serveur SFTP. L'archive part chiffrée et les jetons d'accès sont conservés chiffrés sur le poste. Sans activation de votre part, rien ne sort.",
  },
];

export default function InformationsPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Container>
          <section className="pt-[84px] pb-14">
            <Kicker className="mb-[18px]">Informations légales</Kicker>
            <h1 className="m-0 ml-[-0.058em] max-w-[24ch] text-[clamp(36px,4.6vw,64px)] leading-[1.06] tracking-[-0.02em]">
              Mentions légales et protection des données.
            </h1>
            <p className="mt-7 max-w-[56ch] text-[17px] leading-[29px]">
              Lecolso est un logiciel installé sur les postes de l&apos;établissement. Les
              données scolaires restent chez vous : cette page précise qui édite le logiciel et
              ce qui circule. Pour nous joindre, passez par la{" "}
              <Link href="/contact">page contact</Link>.
            </p>
            <p className="mt-6 text-[13px] leading-5 tracking-[0.08em] uppercase text-[#B34400]">
              Dernière mise à jour : {legalMajDate}
            </p>
          </section>

          <Divider />

          {/* Mentions légales */}
          <section id="mentions" className="py-[76px]">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-[clamp(24px,5vw,96px)]">
              <div>
                <Kicker className="mb-3.5">01</Kicker>
                <h2 className="m-0 ml-[-0.03em] text-[clamp(26px,3vw,38px)] leading-[1.1] tracking-[-0.015em]">
                  Mentions légales
                </h2>
              </div>
              <div>
                <h3 className="m-0 text-[19px] leading-7">Éditeur du logiciel et du site</h3>
                <table className="mt-4 w-full border-collapse text-[15px]">
                  <tbody>
                    {legalRows.map(([label, value]) => (
                      <tr key={label} className="border-b border-[#DDD9D7]">
                        <th
                          scope="row"
                          className="w-[34%] py-2.5 pr-4 text-left align-top font-heading text-[15px] font-extrabold"
                        >
                          {label}
                        </th>
                        <td className="py-2.5 align-top text-[color-mix(in_srgb,#201E1D_82%,transparent)]">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h3 className="mt-10 text-[19px] leading-7">Hébergement</h3>
                <p className="mt-3 max-w-[64ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_82%,transparent)]">
                  Ce site de présentation, le serveur de licence et le service de téléchargement
                  sont hébergés sur un serveur privé virtuel (VPS) administré via Dokploy, chez{" "}
                  <strong>Hetzner Online GmbH</strong> — Industriestraße 25, 91710 Gunzenhausen,
                  Allemagne · +49 (0)9831 505-0 ·{" "}
                  <a href="https://www.hetzner.com" target="_blank" rel="noopener noreferrer">
                    www.hetzner.com
                  </a>
                  . Les e-mails transactionnels sont envoyés par l&apos;intermédiaire de Resend.
                </p>

                <h3 className="mt-10 text-[19px] leading-7">Propriété intellectuelle</h3>
                <p className="mt-3 max-w-[64ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_82%,transparent)]">
                  Le logiciel Lecolso, son code, son interface, sa documentation, son nom et son
                  logo sont la propriété de {legalRaisonSociale} et sont protégés par les
                  dispositions de l&apos;Annexe VII de l&apos;Accord de Bangui relatif à la
                  propriété littéraire et artistique ainsi que par le droit ivoirien de la
                  propriété intellectuelle. Toute reproduction, représentation ou diffusion,
                  totale ou partielle, sans autorisation préalable est interdite. La licence
                  accordée à l&apos;établissement est un droit d&apos;utilisation, non un
                  transfert de propriété : elle n&apos;autorise ni la revente, ni la
                  redistribution, ni la modification ou la décompilation du logiciel.
                </p>

                <h3 className="mt-10 text-[19px] leading-7">Licence d&apos;utilisation</h3>
                <p className="mt-3 max-w-[64ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_82%,transparent)]">
                  Chaque licence est rattachée à une machine identifiée lors de l&apos;activation.
                  Le contournement du mécanisme d&apos;activation, le partage d&apos;une clé
                  entre plusieurs postes ou son usage par un tiers non autorisé entraînent la
                  suspension de la licence. L&apos;installation sur un poste supplémentaire
                  nécessite une licence supplémentaire.
                </p>

                <h3 className="mt-10 text-[19px] leading-7">Responsabilité</h3>
                <p className="mt-3 max-w-[64ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_82%,transparent)]">
                  Le logiciel étant installé sur les équipements de l&apos;établissement, celui-ci
                  demeure responsable de son parc informatique, des comptes qu&apos;il crée, de
                  l&apos;exactitude des informations saisies et de la mise en œuvre effective des
                  sauvegardes proposées par l&apos;application. {legalRaisonSociale} ne peut être
                  tenue responsable d&apos;une perte de données consécutive à une panne
                  matérielle, une suppression manuelle ou l&apos;absence de sauvegarde
                  configurée.
                </p>

                <h3 className="mt-10 text-[19px] leading-7">Droit applicable</h3>
                <p className="mt-3 max-w-[64ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_82%,transparent)]">
                  Les présentes mentions légales sont soumises au droit ivoirien. En cas de
                  litige, et à défaut de résolution amiable, les tribunaux d&apos;Abidjan seront
                  seuls compétents.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* Confidentialité */}
          <section id="confidentialite" className="py-[76px]">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-[clamp(24px,5vw,96px)]">
              <div>
                <Kicker className="mb-3.5">02</Kicker>
                <h2 className="m-0 ml-[-0.03em] text-[clamp(26px,3vw,38px)] leading-[1.1] tracking-[-0.015em]">
                  Confidentialité et données
                </h2>
                <p className="mt-5 max-w-[40ch] border-l-[3px] border-[#D95300] pl-5 text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                  Le principe est simple : les données des élèves ne quittent pas
                  l&apos;établissement, sauf si vous décidez d&apos;activer une sauvegarde à
                  distance.
                </p>
              </div>
              <div>
                <h3 className="text-[19px] leading-7">Qui est responsable de quoi</h3>
                <p className="mt-3 max-w-[64ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_82%,transparent)]">
                  L&apos;établissement est responsable des données scolaires qu&apos;il traite :
                  élèves, parents, notes, absences, paiements, personnels. {legalRaisonSociale}{" "}
                  n&apos;y a pas accès — le logiciel fonctionne hors ligne et ne transmet aucune
                  donnée scolaire. Nous ne traitons que les informations nécessaires à la
                  licence, à la facturation et au support (nom de l&apos;établissement, contact
                  du responsable, clé de licence), conformément à la{" "}
                  <strong>
                    loi ivoirienne n°2013-450 du 19 juin 2013 relative à la protection des
                    données à caractère personnel
                  </strong>
                  , sous le contrôle de l&apos;ARTCI.
                </p>

                <h3 className="mt-10 text-[19px] leading-7">Ce qui reste sur votre poste</h3>
                <div className="mt-4 grid grid-cols-1 gap-x-[clamp(24px,4vw,56px)] sm:grid-cols-2">
                  {localData.map((item) => (
                    <div key={item.title} className="border-t-2 border-[#DDD9D7] py-[22px]">
                      <h4 className="m-0 text-[17px] leading-[26px]">{item.title}</h4>
                      <p className="mt-2 text-[15px] leading-[27px] text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 text-[19px] leading-7">Les seules connexions sortantes</h3>
                <div className="mt-4">
                  {outboundConnections.map((item, i) => (
                    <div
                      key={item.n}
                      className={`grid grid-cols-[44px_minmax(0,1fr)] gap-5 border-t-2 border-[#DDD9D7] py-[22px] ${
                        i === outboundConnections.length - 1 ? "border-b-2" : ""
                      }`}
                    >
                      <p className="m-0 text-[15px] leading-7 text-[#D95300]">{item.n}</p>
                      <p className="m-0 max-w-[60ch] text-[15.5px] leading-7">
                        <strong>{item.strong}</strong> {item.rest}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 max-w-[64ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_82%,transparent)]">
                  Le logiciel ne contient ni traceur publicitaire, ni mesure d&apos;audience, ni
                  collecte d&apos;usage. Ce site n&apos;utilise qu&apos;un cookie de session
                  strictement nécessaire à l&apos;authentification du back-office et ne dépose
                  aucun cookie de mesure d&apos;audience ou de publicité.
                </p>

                <h3 className="mt-10 text-[19px] leading-7">
                  Conservation et droits des personnes
                </h3>
                <p className="mt-3 max-w-[64ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_82%,transparent)]">
                  Les durées de conservation des dossiers scolaires sont décidées par
                  l&apos;établissement, qui reste l&apos;interlocuteur des familles pour toute
                  demande d&apos;accès, de rectification ou de suppression. Les données
                  critiques — élèves, paiements — sont archivées plutôt que détruites
                  immédiatement, afin de préserver l&apos;historique comptable et scolaire ; une
                  suppression définitive peut être effectuée à la demande de l&apos;établissement.
                </p>
                <p className="mt-4 max-w-[64ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_82%,transparent)]">
                  Sur les données que nous traitons (licence, facturation, support), vous
                  disposez d&apos;un droit d&apos;accès et de rectification, d&apos;un droit
                  d&apos;opposition pour motif légitime et d&apos;un droit à l&apos;effacement
                  dans les limites permises par les obligations légales de conservation. Pour les
                  exercer, écrivez à{" "}
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Vos données ne sont ni
                  vendues ni cédées à des tiers ; elles ne sont partagées qu&apos;avec les
                  prestataires strictement nécessaires au fonctionnement du service
                  (hébergement, envoi d&apos;e-mails transactionnels).
                </p>
              </div>
            </div>
          </section>
        </Container>

        <section className="bg-[#A33F00] text-white">
          <Container className="py-[76px]">
            <h2 className="m-0 ml-[-0.058em] text-[clamp(30px,3.8vw,50px)] leading-[1.05] tracking-[-0.015em]">
              <span className="block">Une question avant</span>
              <span className="block">de vous décider ?</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/contact" variant="ghost-white">
                Nous contacter
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
