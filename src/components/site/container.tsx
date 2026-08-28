import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,72px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
