import Image from "next/image";
import { Container } from "@/components/site/container";
import { Kicker } from "@/components/site/kicker";
import { CtaLink } from "@/components/site/cta-link";
import { Divider } from "@/components/site/divider";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { ctaPrimaryHref, ctaPrimaryLabel, platformNote, contactEmail } from "@/lib/site-config";

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lecolso",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Windows",
  description:
    "Logiciel de gestion scolaire hors ligne : élèves, classes, notes, bulletins, caisse et paie sur un seul poste Windows.",
  url: "https://lecolso.com",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
  publisher: {
    "@type": "Organization",
    name: "Teiik SARL",
    email: contactEmail,
  },
};

const stats = [
  { value: "12", label: "Modules couvrant toute la scolarité" },
  { value: "0", label: "Connexion requise au quotidien" },
  { value: "1", label: "Fichier de base de données, sur votre poste" },
  { value: "4", label: "Destinations de sauvegarde : disque, USB, Drive, SFTP" },
];

const offlinePoints = [
  {
    n: "01",
    title: "Tout est local",
    body: "Base de données embarquée sur la machine : inscriptions, saisie de notes, encaissements, impression des bulletins — aucune de ces opérations ne dépend du réseau.",
  },
  {
    n: "02",
    title: "Internet uniquement pour l'activation",
    body: "Une seule connexion est nécessaire, au premier lancement, pour activer votre licence. Ensuite l'application se vérifie localement.",
  },
  {
    n: "03",
    title: "Mises à jour dès qu'une connexion apparaît",
    body: "Quand le poste retrouve internet, Lecolso récupère et installe la dernière version. Rien à télécharger manuellement, rien à réinstaller.",
  },
];

const modules = [
  { n: "01", title: "Élèves", body: "Matricules générés automatiquement, fiches complètes, parents, statuts, historiques et recherche instantanée." },
  { n: "02", title: "Classes", body: "Création des classes, affectation des élèves, matières et enseignants rattachés." },
  { n: "03", title: "Notes", body: "Évaluations et coefficients, saisie rapide, import Excel, moyennes et classements calculés." },
  { n: "04", title: "Bulletins", body: "Génération par période, appréciations, export PDF prêt à imprimer, historique conservé." },
  { n: "05", title: "Caisse", body: "Encaissements, décaissements, journal de caisse, rapports et suivi des impayés." },
  { n: "06", title: "Paie enseignants", body: "Tarifs horaires, heures dispensées, calcul du salaire et édition des reçus." },
  { n: "07", title: "Absences", body: "Saisie quotidienne et suivi des absences par élève et par classe." },
  { n: "08", title: "Emploi du temps", body: "Créneaux placés au glisser-déposer, affichage par classe ou enseignant, impression." },
  { n: "09", title: "Enseignants", body: "Profils, affectations aux classes et aux matières, heures de cours dispensées." },
  { n: "10", title: "Congés & retenues", body: "Congés, avances et retenues répercutés automatiquement sur les salaires." },
  { n: "11", title: "Passage de classe", body: "Assistant de fin d'année : passage en classe supérieure, redoublements, clôture." },
  { n: "12", title: "Sauvegarde", body: "Archives chiffrées vers le disque, une clé USB, Google Drive ou un serveur SFTP." },
];

const gradeColumns = [
  {
    title: "Le niveau est détecté seul",
    body: "Le libellé de la classe suffit à choisir le bon système d'évaluation — et vous pouvez toujours le corriger à la main.",
  },
  {
    title: "Moyennes et rangs figés",
    body: "Une fois le bulletin généré, moyennes et classements sont enregistrés : le document réimprimé en juin est identique à celui remis aux parents.",
  },
  {
    title: "Préréglages d'épreuves",
    body: "Des jeux d'épreuves standard pour CP, CE et CM permettent de démarrer en quelques minutes, puis de tout ajuster.",
  },
];

const backupDestinations = [
  { title: "Disque local", body: "Une archive sur le poste, à l'emplacement de votre choix." },
  { title: "Clé USB", body: "La clé est détectée automatiquement, l'export se lance en un clic." },
  { title: "Google Drive", body: "Copie hors site quand une connexion est disponible, sans bloquer l'usage." },
  { title: "Serveur SFTP", body: "Dépôt sur votre propre serveur si vous préférez maîtriser l'hébergement." },
];

const licenseSteps = [
  "Téléchargez l'installateur et lancez-le sur le poste de la direction ou du secrétariat.",
  "Saisissez votre clé de licence — une connexion est nécessaire pour cette étape seulement.",
  "Renseignez l'établissement, l'année scolaire et vos classes, puis importez vos élèves.",
  "Configurez la sauvegarde automatique. Vous êtes prêt pour l'année.",
];

const faqs = [
  {
    q: "Faut-il internet pour utiliser Lecolso ?",
    a: "Non. Seule l'activation initiale de la licence demande une connexion. Le travail quotidien, l'impression des bulletins et la caisse fonctionnent entièrement hors ligne. La connexion sert ensuite uniquement aux mises à jour et à la sauvegarde cloud, si vous l'activez.",
  },
  {
    q: "Où sont stockées les données des élèves ?",
    a: "Dans un fichier de base de données unique, sur la machine de l'établissement. Rien n'est envoyé ailleurs sans votre action ; les archives de sauvegarde sont chiffrées avant de quitter le poste.",
  },
  {
    q: "Peut-on installer Lecolso sur plusieurs postes ?",
    a: "Une licence est rattachée à une machine. Pour équiper un second poste — direction et secrétariat, par exemple — contactez-nous : une licence supplémentaire est nécessaire.",
  },
  {
    q: "Peut-on reprendre nos listes d'élèves et de notes existantes ?",
    a: "Oui. Les notes s'importent depuis un fichier Excel, et nous accompagnons la reprise de vos listes existantes lors de la mise en route.",
  },
  {
    q: "Lecolso fonctionne-t-il sur Mac ou Linux ?",
    a: "L'installateur principal est destiné à Windows 10 et 11. Des versions macOS et Linux peuvent être fournies sur demande.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <SiteNav />
      <main className="flex-1">
        <Container>
          {/* Hero */}
          <section className="pt-[92px] pb-[76px]">
            <Kicker className="mb-[18px]">Logiciel de gestion scolaire — Windows</Kicker>
            <h1 className="m-0 ml-[-0.058em] max-w-[20ch] text-[clamp(40px,5.6vw,78px)] leading-[1.05] tracking-[-0.02em]">
              <span className="block">Toute votre école</span>
              <span className="block">dans un seul logiciel,</span>
              <span className="block">même sans internet.</span>
            </h1>
            <div className="mt-10 grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-x-[clamp(32px,6vw,96px)]">
              <div>
                <p className="m-0 max-w-[56ch] text-[17px] leading-[29px]">
                  Élèves, classes, notes, bulletins, caisse, paie, absences, emploi du temps :
                  Lecolso réunit la gestion complète d&apos;un établissement dans une application
                  installée sur votre poste. Les données restent chez vous, dans un fichier
                  unique, et tout fonctionne sans connexion.
                </p>
                <div id="telecharger" className="mt-8 flex flex-wrap gap-3">
                  <CtaLink href={ctaPrimaryHref || "/contact"} variant="primary">
                    {ctaPrimaryLabel}
                  </CtaLink>
                  <CtaLink href="/#modules" variant="ghost">
                    Voir les 12 modules
                  </CtaLink>
                </div>
                <p className="mt-5 text-[13px] leading-5 tracking-[0.08em] uppercase text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
                  {platformNote}
                </p>
              </div>
              <p className="m-0 border-l-[3px] border-[#D95300] pl-5 text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                Conçu pour les établissements privés qui travaillent avec une connexion instable
                — ou sans connexion du tout.
              </p>
            </div>
            <figure className="mt-14 border-2 border-[#DDD9D7]">
              <Image
                src="/images/lecolso-dashboard.png"
                alt="Capture d'écran : tableau de bord Lecolso"
                width={1888}
                height={941}
                className="block w-full"
                sizes="(min-width: 1200px) 1200px, 100vw"
                priority
              />
            </figure>
            <figcaption className="mt-3.5 text-[13px] leading-5 tracking-[0.08em] uppercase text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
              Le tableau de bord : solde de caisse, impayés, effectifs, affectations à compléter
              et bulletins générés, dès l&apos;ouverture.
            </figcaption>
          </section>

          <Divider />

          {/* Chiffres */}
          <section aria-label="Lecolso en bref" className="py-[60px]">
            <div className="grid grid-cols-2 gap-x-[clamp(24px,4vw,56px)] gap-y-10 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="m-0 ml-[-0.045em] text-[clamp(30px,3.4vw,46px)] leading-[54px] text-[#D95300]">
                    {stat.value}
                  </p>
                  <p className="mt-3.5 text-[13px] leading-[18px] tracking-[0.08em] uppercase text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* Hors ligne */}
          <section id="horsligne" className="py-[84px]">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-x-[clamp(24px,5vw,96px)]">
              <div>
                <Kicker className="mb-3.5">Hors ligne d&apos;abord</Kicker>
                <h2 className="m-0 ml-[-0.03em] text-[clamp(28px,3.2vw,42px)] leading-[1.1] tracking-[-0.015em]">
                  Une panne de réseau n&apos;arrête pas votre secrétariat.
                </h2>
              </div>
              <div>
                {offlinePoints.map((point, i) => (
                  <div
                    key={point.n}
                    className={`grid grid-cols-[44px_minmax(0,1fr)] gap-5 border-t-2 border-[#DDD9D7] py-6 ${
                      i === offlinePoints.length - 1 ? "border-b-2" : ""
                    }`}
                  >
                    <p className="m-0 text-[15px] leading-7 text-[#D95300]">{point.n}</p>
                    <div>
                      <h3 className="m-0 text-[20px] leading-7">{point.title}</h3>
                      <p className="mt-2.5 max-w-[58ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                        {point.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* Modules */}
          <section id="modules" className="pt-[84px] pb-[70px]">
            <Kicker className="mb-3.5">Les modules</Kicker>
            <h2 className="m-0 mb-12 ml-[-0.03em] max-w-[26ch] text-[clamp(28px,3.2vw,42px)] leading-[1.1] tracking-[-0.015em]">
              De l&apos;inscription au bulletin, et de la caisse à la paie.
            </h2>
            <div className="grid grid-cols-1 gap-x-[clamp(24px,4vw,64px)] sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((mod) => (
                <div key={mod.n} className="border-t-2 border-[#DDD9D7] py-7">
                  <p className="m-0 mb-2.5 text-[13px] leading-5 text-[#D95300]">{mod.n}</p>
                  <h3 className="m-0 text-[20px] leading-7">{mod.title}</h3>
                  <p className="mt-2 text-[15px] leading-[27px] text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                    {mod.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* Notes et bulletins */}
          <section className="py-[84px]">
            <Kicker className="mb-3.5">Notes et bulletins</Kicker>
            <h2 className="m-0 mb-11 ml-[-0.03em] max-w-[28ch] text-[clamp(28px,3.2vw,42px)] leading-[1.1] tracking-[-0.015em]">
              Le primaire et le secondaire ne se notent pas pareil. Lecolso le sait.
            </h2>
            <div className="grid grid-cols-1 gap-8 gap-x-[clamp(24px,4vw,64px)] md:grid-cols-2">
              <div className="flex flex-col gap-2 bg-white p-3">
                <h3 className="font-heading text-[22px] font-extrabold leading-[1.2]">
                  Primaire — compositions
                </h3>
                <p className="m-0 flex-1 text-[15.5px] leading-7 opacity-80">
                  De 3 à 9 compositions par an. Les matières sont regroupées en épreuves
                  configurées une fois pour l&apos;année, et le coefficient est porté par
                  l&apos;épreuve. Le bulletin affiche les moyennes par épreuve.
                </p>
                <p className="m-0 flex items-center gap-1.5 text-[11px] text-[color-mix(in_srgb,#201E1D_50%,transparent)]">
                  Préscolaire, CP, CE, CM
                </p>
              </div>
              <div className="flex flex-col gap-2 bg-white p-3">
                <h3 className="font-heading text-[22px] font-extrabold leading-[1.2]">
                  Secondaire — trimestres
                </h3>
                <p className="m-0 flex-1 text-[15.5px] leading-7 opacity-80">
                  Trois trimestres, matières indépendantes avec leurs propres coefficients,
                  plusieurs notes par matière : devoirs, interrogations, composition. Le
                  bulletin affiche les moyennes par matière.
                </p>
                <p className="m-0 flex items-center gap-1.5 text-[11px] text-[color-mix(in_srgb,#201E1D_50%,transparent)]">
                  De la 6ème à la Terminale
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-x-[clamp(24px,4vw,64px)] sm:grid-cols-3">
              {gradeColumns.map((col) => (
                <div key={col.title} className="border-t-2 border-[#DDD9D7] py-[26px]">
                  <h3 className="m-0 text-[18px] leading-[26px]">{col.title}</h3>
                  <p className="mt-2 text-[15px] leading-[27px] text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                    {col.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* Caisse et paie */}
          <section className="grid grid-cols-1 items-center gap-10 py-[84px] md:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] md:gap-x-[clamp(24px,5vw,96px)]">
            <div>
              <Kicker className="mb-3.5">Caisse et paie</Kicker>
              <h2 className="m-0 ml-[-0.02em] text-[32px] leading-[42px] tracking-[-0.015em]">
                Des comptes que personne ne peut réécrire.
              </h2>
              <p className="mt-5 max-w-[50ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                Chaque encaissement et chaque décaissement est définitif : une erreur se corrige
                par une écriture inverse, jamais par une modification silencieuse. Le solde est
                recalculé à partir du journal, et les impayés sont visibles élève par élève.
                Côté enseignants, les heures dispensées, les congés et les retenues alimentent
                directement le calcul du salaire et l&apos;édition du reçu.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {["Journal de caisse", "Suivi des impayés", "Reçus PDF", "Écritures immuables"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center border border-[#D95300] px-2.5 py-[3px] text-[11px] tracking-[0.02em] text-[#D95300]"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
            <figure className="m-0">
              <div className="border-2 border-[#DDD9D7]">
                <Image
                  src="/images/lecolso-caisse.png"
                  alt="Capture d'écran : journal de caisse"
                  width={1780}
                  height={883}
                  className="block w-full"
                  sizes="(min-width: 1200px) 600px, 100vw"
                />
              </div>
              <figcaption className="mt-3.5 text-[13px] leading-5 tracking-[0.08em] uppercase text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
                Journal de caisse : une écriture annulée reste visible, barrée, avec son motif.
              </figcaption>
            </figure>
          </section>

          <Divider />

          {/* Sauvegarde */}
          <section id="sauvegarde" className="py-[84px]">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-x-[clamp(24px,5vw,96px)]">
              <div>
                <Kicker className="mb-3.5">Sauvegarde</Kicker>
                <h2 className="m-0 ml-[-0.03em] text-[clamp(28px,3.2vw,42px)] leading-[1.1] tracking-[-0.015em]">
                  Vos données sortent chiffrées, ou ne sortent pas.
                </h2>
                <p className="mt-5 max-w-[44ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                  Les archives sont chiffrées avant de quitter la machine et la sauvegarde se
                  planifie à la fréquence que vous choisissez. Si le cloud est injoignable,
                  l&apos;application continue de fonctionner et réessaie plus tard.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-x-[clamp(24px,4vw,56px)] sm:grid-cols-2">
                {backupDestinations.map((dest) => (
                  <div key={dest.title} className="border-t-2 border-[#DDD9D7] py-6">
                    <h3 className="m-0 text-[18px] leading-[26px]">{dest.title}</h3>
                    <p className="mt-2 text-[15px] leading-[27px] text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                      {dest.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* Licence et installation */}
          <section id="licence" className="py-[84px]">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] md:gap-x-[clamp(24px,5vw,96px)]">
              <div>
                <Kicker className="mb-3.5">Licence et installation</Kicker>
                <h2 className="m-0 ml-[-0.02em] text-[32px] leading-[42px] tracking-[-0.015em]">
                  Installée en une fois, sur le poste de l&apos;école.
                </h2>
                <p className="mt-5 max-w-[50ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                  Vous recevez un installateur Windows et une clé de licence. À la première
                  ouverture, la clé est activée en ligne puis rattachée à cette machine ; les
                  lancements suivants se vérifient hors ligne. Un assistant de configuration
                  reprend ensuite les informations de l&apos;établissement, l&apos;année scolaire
                  et le compte administrateur.
                </p>
              </div>
              <div>
                {licenseSteps.map((step, i) => (
                  <div
                    key={step}
                    className={`grid grid-cols-[44px_minmax(0,1fr)] gap-5 border-t-2 border-[#DDD9D7] py-[22px] ${
                      i === licenseSteps.length - 1 ? "border-b-2" : ""
                    }`}
                  >
                    <p className="m-0 text-[15px] leading-7 text-[#D95300]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="m-0 text-[15.5px] leading-7">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* FAQ */}
          <section className="py-[84px]">
            <Kicker className="mb-3.5">Questions fréquentes</Kicker>
            <div className="mt-7 grid max-w-[880px] grid-cols-1">
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  className={`border-t-2 border-[#DDD9D7] py-5 ${
                    i === faqs.length - 1 ? "border-b-2" : ""
                  }`}
                >
                  <summary className="font-heading text-[19px] font-extrabold leading-7">
                    {faq.q}
                  </summary>
                  <p className="mt-3.5 max-w-[62ch] text-[15.5px] leading-7 text-[color-mix(in_srgb,#201E1D_78%,transparent)]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </Container>

        {/* Bande de clôture */}
        <section className="bg-[#A33F00] text-white">
          <Container className="py-[84px]">
            <h2 className="m-0 ml-[-0.058em] text-[clamp(32px,4.2vw,56px)] leading-[1.05] tracking-[-0.015em]">
              <span className="block">Commencez l&apos;année</span>
              <span className="block">avec vos dossiers en ordre.</span>
            </h2>
            <p className="mt-7 max-w-[50ch] text-[17px] leading-[29px]">
              Installez Lecolso sur un poste, activez votre licence une fois, et travaillez
              ensuite sans dépendre du réseau.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink href={ctaPrimaryHref || "/contact"} variant="ghost-white">
                {ctaPrimaryLabel}
              </CtaLink>
              <CtaLink href="/contact" variant="ghost-white">
                Demander une démonstration
              </CtaLink>
            </div>
            <p className="mt-6 text-[13px] leading-5 tracking-[0.08em] uppercase opacity-85">
              {platformNote}
            </p>
          </Container>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
