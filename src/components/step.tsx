import { CheckItem } from "@/components/check-item";

export function Step({
  guide,
  id,
  n,
  title,
  children,
}: {
  guide: string;
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b py-8 last:border-b-0">
      <div className="mb-4 flex items-start gap-3">
        <CheckItem storageKey={`${guide}:${id}`} />
        <div>
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Passo {n}
          </p>
          <h3 className="font-display text-2xl text-primary">{title}</h3>
        </div>
      </div>
      <div className="space-y-3 text-[15px] leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  );
}
