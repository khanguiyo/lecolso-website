"use server";

import { Resend } from "resend";
import { contactEmail } from "@/lib/site-config";
import { contactFormSchema, contactSubjects } from "@/lib/contact-schema";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof typeof contactFormSchema.shape, string>>;
};

const resendFromEmail = process.env.RESEND_FROM_EMAIL || "Lecolso <onboarding@resend.dev>";

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse({
    etablissement: formData.get("etablissement"),
    nom: formData.get("nom"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
    sujet: formData.get("sujet"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const errors: ContactFormState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string") errors[key as keyof typeof errors] = issue.message;
    }
    return { status: "error", errors, message: "Merci de corriger les champs indiqués." };
  }

  const { etablissement, nom, email, telephone, sujet, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "RESEND_API_KEY manquant : le message de contact n'a pas pu être envoyé.",
    );
    return {
      status: "error",
      message:
        "Le service d'envoi n'est pas encore configuré. Écrivez-nous directement à " +
        contactEmail +
        ".",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: resendFromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `[Lecolso] ${contactSubjects[sujet]} — ${etablissement}`,
      text: [
        `Établissement : ${etablissement}`,
        `Responsable : ${nom}`,
        `E-mail : ${email}`,
        `Téléphone : ${telephone || "—"}`,
        `Objet : ${contactSubjects[sujet]}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Échec de l'envoi Resend", error);
      return {
        status: "error",
        message: "L'envoi a échoué. Réessayez ou écrivez-nous directement à " + contactEmail + ".",
      };
    }
  } catch (error) {
    console.error("Échec de l'envoi Resend", error);
    return {
      status: "error",
      message: "L'envoi a échoué. Réessayez ou écrivez-nous directement à " + contactEmail + ".",
    };
  }

  return {
    status: "success",
    message: "Merci — votre demande a été prise en compte, nous revenons vers vous sous un jour ouvré.",
  };
}
