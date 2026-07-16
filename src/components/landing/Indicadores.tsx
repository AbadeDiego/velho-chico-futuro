import { Counter } from "./Counter";
import { ScrollReveal } from "./ScrollReveal";
import { metas } from "@/content/site-content";

export function Indicadores() {
  return (
    <section id="impacto" className="relative overflow-hidden bg-river-deep py-24 text-primary-foreground md:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-river/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-sertao/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sertao-soft">
            {metas.eyebrow}
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            {metas.title}
          </h2>
          <p className="mt-4 text-sm text-primary-foreground/70">{metas.note}</p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8">
          {metas.items.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 60}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm">
                <div className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                  <Counter value={m.value} />
                  {m.suffix}
                </div>
                <div className="mt-2 text-xs text-primary-foreground/70 md:text-sm">
                  {m.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center font-display text-lg italic text-primary-foreground/85 sm:text-xl">
          “{metas.quote}”
        </p>
      </div>
    </section>
  );
}
