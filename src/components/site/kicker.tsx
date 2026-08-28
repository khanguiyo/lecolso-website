import { cn } from "@/lib/utils";

export function Kicker({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "block text-[13px] leading-[14px] tracking-[0.08em] uppercase text-[#B34400]",
        className,
      )}
    >
      {children}
    </span>
  );
}
