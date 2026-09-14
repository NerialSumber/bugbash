import { cn } from "@/lib/utils";

export function Callout({
  title,
  children,
  tone = "info",
}: {
  title?: string;
  children: React.ReactNode;
  tone?: "info" | "warn" | "ok";
}) {
  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-3 text-sm leading-relaxed",
        tone === "info" && "border-primary/20 bg-primary/8",
        tone === "warn" && "border-accent bg-accent/40",
        tone === "ok" && "border-emerald-700/20 bg-emerald-50"
      )}
    >
      {title ? <p className="mb-1 font-semibold">{title}</p> : null}
      <div className="text-foreground/85">{children}</div>
    </div>
  );
}
