import { z } from "zod";

export const contactSubjects = {
  demo: "Démonstration",
  devis: "Devis / licences",
  support: "Support technique",
} as const;

// Pas de retour à la ligne dans les champs mono-ligne : évite toute injection
// d'en-têtes si ces valeurs sont un jour recomposées dans un sujet d'e-mail.
const singleLine = "Ce champ ne peut pas contenir de retour à la ligne.";
const noNewlines = (value: string) => !/[\r\n]/.test(value);

export const contactFormSchema = z.object({
  etablissement: z
    .string()
    .trim()
    .min(2, "Indiquez le nom de l'établissement.")
    .max(120, "120 caractères maximum.")
    .refine(noNewlines, singleLine),
  nom: z.string().trim().min(2, "Indiquez votre nom.").max(120, "120 caractères maximum.").refine(noNewlines, singleLine),
  email: z.string().trim().email("Adresse e-mail invalide.").max(180, "180 caractères maximum."),
  telephone: z
    .string()
    .trim()
    .max(40, "40 caractères maximum.")
    .refine(noNewlines, singleLine)
    .optional(),
  sujet: z.enum(["demo", "devis", "support"], {
    message: "Choisissez l'objet de votre demande.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Votre message est un peu court (10 caractères minimum).")
    .max(4000, "4000 caractères maximum."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
