export function PhoneMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto ${className}`}>
      <div className="relative aspect-[9/19] w-full max-w-[280px] rounded-[2.5rem] border-[10px] border-graphite bg-graphite shadow-2xl">
        <div className="absolute left-1/2 top-1 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-graphite" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-muted">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background/70 to-transparent" />
          <div className="absolute inset-x-4 top-8 rounded-2xl bg-background/90 p-3 shadow-sm backdrop-blur">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-river">Trilha do dia</div>
            <div className="mt-1 text-[13px] font-semibold text-foreground">
              Economia criativa no território
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-2/3 rounded-full bg-river" />
            </div>
          </div>
          <div className="absolute inset-x-4 bottom-6 rounded-2xl bg-background/90 p-3 shadow-sm backdrop-blur">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-sertao">Oportunidade</div>
            <div className="mt-1 text-[13px] font-semibold text-foreground">
              Edital cultural — inscrições abertas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
