import { ScrollReveal } from "./ScrollReveal";
import { desafio } from "@/content/site-content";

export function Desafio() {
  return (
    <section id="projeto" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sertao">
            O desafio
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {desafio.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {desafio.paragraph}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {desafio.cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <div className="group h-full rounded-3xl border border-border/70 bg-card p-7 transition-all hover:-translate-y-1 hover:border-river/30 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sertao/10 text-sertao">
                  <c.icon strokeWidth={1.5} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="col-span-2 overflow-hidden rounded-3xl">
            <img
              src={desafio.photo}
              alt="Paisagem do Sertão do São Francisco ao entardecer"
              className="h-64 w-full object-cover md:h-80"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={desafio.photo2}
              alt="Roda de jovens em oficina formativa"
              className="h-64 w-full object-cover md:h-80"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
