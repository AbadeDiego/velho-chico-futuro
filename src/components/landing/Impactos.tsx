import { ScrollReveal } from "./ScrollReveal";
import { impactos } from "@/content/site-content";

export function Impactos() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sertao">
            Impactos gerados
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {impactos.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {impactos.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactos.items.map((it, i) => (
            <ScrollReveal key={it.text} delay={i * 40}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border/70 bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-river/10 text-river">
                  <it.icon strokeWidth={1.5} className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {it.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border/70 bg-sand/60 p-8 md:p-10">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-river">
            Alinhamento com os ODS
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {impactos.ods.map((o) => (
              <div
                key={o.code}
                className="flex items-center gap-4 rounded-2xl bg-card p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sertao font-display text-sm font-bold text-accent-foreground">
                  {o.code.replace("ODS ", "")}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {o.code}
                  </div>
                  <div className="font-display text-sm font-semibold text-foreground">
                    {o.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
