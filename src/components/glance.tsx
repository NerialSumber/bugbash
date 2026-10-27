export function Lines({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-2.5 rounded-lg bg-white/80 px-3 py-2 text-sm leading-snug ring-1 ring-foreground/10"
        >
          <span
            aria-hidden
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LineText({ text }: { text: string }) {
  const cut = text.indexOf(":");
  if (cut > 1 && cut < 42) {
    return (
      <>
        <span className="font-semibold">{text.slice(0, cut + 1)}</span>
        {text.slice(cut + 1)}
      </>
    );
  }
  return text;
}

export function Frame({
  src,
  alt,
  label,
  doItems,
  seeItems,
}: {
  src: string;
  alt: string;
  label: string;
  doItems: string[];
  seeItems: string[];
}) {
  return (
    <div className="space-y-3">
      <figure className="overflow-hidden rounded-xl bg-white ring-1 ring-foreground/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full" />
        <figcaption className="border-t bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
          {label}
        </figcaption>
      </figure>
      <Actions doItems={doItems} seeItems={seeItems} />
    </div>
  );
}

export function Actions({
  doItems,
  seeItems,
}: {
  doItems: string[];
  seeItems: string[];
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <div className="rounded-xl bg-white p-3 ring-1 ring-foreground/10">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">
          Faça
        </p>
        <ol className="mt-2 space-y-1.5">
          {doItems.map((item, index) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg bg-primary/6 px-2 py-2 text-sm leading-snug"
            >
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <span>
                <LineText text={item} />
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="rounded-xl bg-emerald-50 p-3 ring-1 ring-emerald-700/15">
        <p className="text-xs font-semibold tracking-widest text-emerald-800 uppercase">
          Tem que ver
        </p>
        <ul className="mt-2 space-y-1.5">
          {seeItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg bg-white/70 px-2 py-2 text-sm leading-snug"
            >
              <span
                aria-hidden
                className="mt-1.5 size-2 shrink-0 rounded-full bg-emerald-700"
              />
              <span>
                <LineText text={item} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
