"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";
import { contactSubjects } from "@/lib/contact-schema";

const initialState: ContactFormState = { status: "idle" };

const inputClassName =
  "rounded-none border-[#DDD9D7] bg-white text-[15px] focus-visible:border-[#D95300] focus-visible:ring-0";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-start bg-[#D95300] px-[14px] py-[10px] text-left font-heading text-[14px] font-extrabold leading-[1.2] text-[#201E1D] transition-colors hover:bg-[#B34400] active:bg-[#A33F00] disabled:cursor-not-allowed disabled:opacity-45"
    >
      {pending ? "Envoi en cours…" : "Envoyer la demande"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} noValidate>
      <div className="grid grid-cols-1 gap-x-[clamp(20px,3vw,40px)] gap-y-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="etablissement" className="text-[12px] text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
            Établissement
          </Label>
          <Input
            id="etablissement"
            name="etablissement"
            type="text"
            placeholder="Nom de l'école"
            className={inputClassName}
            aria-invalid={!!state.errors?.etablissement}
          />
          {state.errors?.etablissement && (
            <p className="text-[13px] text-[#A33F00]">{state.errors.etablissement}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="nom" className="text-[12px] text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
            Nom du responsable
          </Label>
          <Input
            id="nom"
            name="nom"
            type="text"
            placeholder="Prénom et nom"
            className={inputClassName}
            aria-invalid={!!state.errors?.nom}
          />
          {state.errors?.nom && <p className="text-[13px] text-[#A33F00]">{state.errors.nom}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-[12px] text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
            Adresse e-mail
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ecole@exemple.com"
            className={inputClassName}
            aria-invalid={!!state.errors?.email}
          />
          {state.errors?.email && <p className="text-[13px] text-[#A33F00]">{state.errors.email}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="telephone" className="text-[12px] text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
            Téléphone
          </Label>
          <Input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="Numéro joignable"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="mt-5 space-y-1.5">
        <Label className="text-[12px] text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
          Objet de la demande
        </Label>
        <div className="inline-flex overflow-hidden border border-[#DDD9D7]">
          {(Object.entries(contactSubjects) as [keyof typeof contactSubjects, string][]).map(
            ([value, label], i) => (
              <label
                key={value}
                className={`flex cursor-pointer items-center gap-1.5 px-3 py-[7px] text-[13px] transition-colors has-[:checked]:bg-[#D95300] has-[:checked]:text-[#201E1D] has-[:not(:checked)]:hover:bg-[color-mix(in_srgb,#201E1D_7%,transparent)] ${
                  i > 0 ? "border-l border-[#DDD9D7]" : ""
                }`}
              >
                <input
                  type="radio"
                  name="sujet"
                  value={value}
                  defaultChecked={value === "demo"}
                  className="sr-only"
                />
                {label}
              </label>
            ),
          )}
        </div>
        {state.errors?.sujet && <p className="text-[13px] text-[#A33F00]">{state.errors.sujet}</p>}
      </div>

      <div className="mt-5 space-y-1.5">
        <Label htmlFor="message" className="text-[12px] text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
          Votre message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Nombre d'élèves, niveaux concernés, ce que vous cherchez à mettre en place…"
          className={`${inputClassName} resize-y`}
          aria-invalid={!!state.errors?.message}
        />
        {state.errors?.message && <p className="text-[13px] text-[#A33F00]">{state.errors.message}</p>}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <SubmitButton />
        <p className="m-0 max-w-[46ch] text-[13px] leading-5 text-[color-mix(in_srgb,#201E1D_70%,transparent)]">
          Vos coordonnées ne servent qu&apos;à vous répondre. Aucune donnée d&apos;élève
          n&apos;est demandée ici.
        </p>
      </div>
    </form>
  );
}
