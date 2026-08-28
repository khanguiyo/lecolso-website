import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Lecolso — la gestion scolaire, hors ligne d'abord",
    template: "%s — Lecolso",
  },
  description:
    "Lecolso réunit élèves, classes, notes, bulletins, caisse et paie dans un logiciel Windows installé sur votre poste. Les données restent chez vous, et tout fonctionne sans connexion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F3F2F2] text-[#201E1D] font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
