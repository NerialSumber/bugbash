export function Shot({
  src,
  alt,
  caption,
  tall = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  tall?: boolean;
}) {
  return (
    <figure className="my-5 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-foreground/10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={tall ? "max-h-[720px] w-full object-cover object-top" : "w-full"}
      />
      {caption ? (
        <figcaption className="border-t bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
