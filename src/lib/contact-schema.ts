import { z } from "zod";

export const contactSubjects = {
  demo: "Démonstration",
  devis: "Devis / licences",
  support: "Support technique",
} as const;

export const contactFormSchema = z.object({
  etablissement: z.string().trim().min(2, "Indiquez le nom de l'établissement."),
  nom: z.string().trim().min(2, "Indiquez votre nom."),
  email: z.string().trim().email("Adresse e-mail invalide."),
  telephone: z.string().trim().optional(),
  sujet: z.enum(["demo", "devis", "support"], {
    message: "Choisissez l'objet de votre demande.",
  }),
  message: z.string().trim().min(10, "Votre message est un peu court (10 caractères minimum)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
