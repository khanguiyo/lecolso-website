// Édition en dur le temps que l'installateur Windows soit publié.
// Basculer sur "available" et renseigner windowsInstallerUrl quand le lien réel existe.
export const releaseMode: "available" | "soon" = "soon";

export const windowsInstallerUrl = "";

export const contactEmail = "contact@lecolso.com";
export const contactPhone = "+225 25 22 01 06 64";
export const contactWhatsapp = "+225 05 75 21 42 75";
export const contactAddressLine1 = "Cité Laurier 15, Faya, Cocody";
export const contactAddressLine2 = "Abidjan, Côte d'Ivoire";
export const contactHours = "Lundi – vendredi : 8h – 18h";
export const contactWebsite = "https://teiik.com";
export const contactWebsiteLabel = contactWebsite.replace(/^https?:\/\//, "");

// Éditeur légal (mentions légales)
export const legalRaisonSociale = "Teiik SARL";
export const legalFormeJuridique = "Société à responsabilité limitée de droit ivoirien";
export const legalAdresse = "Cité Laurier 15, Faya, Cocody — Abidjan, Côte d'Ivoire";
export const legalRccm = "CI-ABJ-03-2023-B12-03741";
export const legalCc = "2303061 H";
export const legalResponsable = "Emmanuel Koné, gérant de Teiik SARL";
export const legalMajDate = "août 2026";

export const ctaPrimaryLabel =
  releaseMode === "soon" ? "Demander un accès anticipé" : "Télécharger pour Windows";

export const ctaPrimaryHref = releaseMode === "soon" ? "/contact" : windowsInstallerUrl;

export const platformNote =
  releaseMode === "soon"
    ? "Version Windows en préparation — macOS et Linux ensuite"
    : "Windows 10 et 11 · installateur .exe · macOS et Linux sur demande";

export function telHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function whatsappHref(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  const withoutCountryCode = digits.startsWith("225") ? digits.slice(3) : digits;
  const local = withoutCountryCode.replace(/^0/, "");
  return `https://wa.me/225${local}`;
}
