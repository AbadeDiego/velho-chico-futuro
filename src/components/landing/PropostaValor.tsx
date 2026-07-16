import { ScrollReveal } from "./ScrollReveal";
import { proposta } from "@/content/site-content";

export function PropostaValor() {
  return (
    <section className="relative bg-sand/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-river">
              Proposta de valor
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              {proposta.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {proposta.subtitle}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {proposta.cards.map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-river/10 text-river">
                      <c.icon strokeWidth={1.5} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
