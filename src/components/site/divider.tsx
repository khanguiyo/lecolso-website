import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return <hr className={cn("h-[2px] border-0 bg-[#DDD9D7]", className)} />;
}
