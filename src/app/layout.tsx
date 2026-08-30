import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "800"],
});

const siteTitle = "Lecolso — la gestion scolaire, hors ligne d'abord";
const siteDescription =
  "Lecolso réunit élèves, classes, notes, bulletins, caisse et paie dans un logiciel Windows installé sur votre poste. Les données restent chez vous, et tout fonctionne sans connexion.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lecolso.com"),
  title: {
    default: siteTitle,
    template: "%s — Lecolso",
  },
  description: siteDescription,
  keywords: [
    "logiciel gestion scolaire",
    "gestion scolaire hors ligne",
    "logiciel école Côte d'Ivoire",
    "bulletins scolaires logiciel",
    "gestion caisse école",
    "Lecolso",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Lecolso",
    title: siteTitle,
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/images/lecolso-dashboard.png",
        width: 1888,
        height: 941,
        alt: "Tableau de bord Lecolso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/lecolso-dashboard.png"],
  },
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
