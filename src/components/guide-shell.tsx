import Link from "next/link";

export type TocItem = { id: string; label: string };

export function GuideShell({
  kicker,
  title,
  intro,
  toc,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  toc: TocItem[];
  children: React.ReactNode;
}) {
  return (
    <div className="guide-shell mx-auto grid w-full max-w-6xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="no-print lg:sticky lg:top-20 lg:self-start">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Neste roteiro
        </p>
        <ul className="mt-3 space-y-1.5 text-sm">
          {toc.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <article>
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          {kicker}
        </p>
        <h1 className="font-display mt-1 text-4xl text-primary sm:text-5xl">
          {title}
        </h1>
        <ul className="mt-4 max-w-2xl space-y-1.5">
          {intro
            .split(/(?<=[.!?])\s+/)
            .map((line) => line.trim())
            .filter(Boolean)
            .map((line) => (
              <li
                key={line}
                className="flex items-start gap-2.5 text-sm leading-snug text-muted-foreground"
              >
                <span
                  aria-hidden
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                />
                <span>{line}</span>
              </li>
            ))}
        </ul>
        {children}
      </article>
    </div>
  );
}
