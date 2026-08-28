import Link from "next/link";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "ghost-white";
  className?: string;
};

export function CtaLink({ href, children, variant = "primary", className }: CtaLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href || "#"}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-start gap-1.5 whitespace-nowrap px-[14px] py-[10px] font-heading text-[14px] font-extrabold leading-[1.2] transition-colors",
        variant === "primary" &&
          "bg-[#D95300] text-[#201E1D] hover:bg-[#B34400] active:bg-[#A33F00]",
        variant === "ghost" &&
          "text-[#B34400] px-1 hover:bg-[color-mix(in_srgb,#D95300_10%,transparent)]",
        variant === "ghost-white" &&
          "border border-white text-white px-[14px] hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
