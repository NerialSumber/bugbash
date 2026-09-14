export function DoExpect({
  doItems,
  expectItems,
}: {
  doItems: string[];
  expectItems: string[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl bg-white p-4 ring-1 ring-foreground/10">
        <p className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
          O que fazer
        </p>
        <ol className="list-decimal space-y-1.5 pl-4 text-sm">
          {doItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
      <div className="rounded-xl bg-white p-4 ring-1 ring-foreground/10">
        <p className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
          O que deve acontecer
        </p>
        <ul className="list-disc space-y-1.5 pl-4 text-sm">
          {expectItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
