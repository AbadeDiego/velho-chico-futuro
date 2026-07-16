import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galeria } from "@/content/site-content";

export function Galeria() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const photos = galeria.photos;

  const openAt = useCallback((i: number) => {
    setIdx(i);
    setOpen(true);
  }, []);

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + photos.length) % photos.length),
    [photos.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  const spanClass = (s: string) =>
    s === "wide"
      ? "sm:col-span-2 sm:row-span-1"
      : s === "tall"
        ? "sm:row-span-2"
        : "";

  return (
    <section id="galeria" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sertao">
            Galeria
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {galeria.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {galeria.subtitle}
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:auto-rows-[220px]">
          {photos.map((p, i) => (
            <button
              key={p.src + i}
              type="button"
              onClick={() => openAt(i)}
              className={`group relative overflow-hidden rounded-2xl bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${spanClass(p.span)}`}
              aria-label={`Abrir imagem: ${p.caption}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-graphite/90 to-transparent p-3 text-left text-xs text-primary-foreground transition-transform group-hover:translate-y-0">
                {p.caption}
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">
            {photos[idx]?.caption}
          </DialogTitle>
          <div className="relative">
            <img
              src={photos[idx]?.src}
              alt={photos[idx]?.alt ?? ""}
              className="mx-auto max-h-[85vh] w-auto rounded-2xl object-contain"
            />
            <div className="mt-3 text-center text-sm text-primary-foreground">
              {photos[idx]?.caption}
            </div>
            <button
              type="button"
              aria-label="Anterior"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-lg hover:bg-background"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Próxima"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-lg hover:bg-background"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
