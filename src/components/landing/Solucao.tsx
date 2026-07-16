import { ScrollReveal } from "./ScrollReveal";
import { PhoneMockup } from "./PhoneMockup";
import { solucao, hero_ } from "@/content/site-content";

export function Solucao() {
  return (
    <section id="solucao" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sertao">
            Solução tecnológica
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {solucao.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {solucao.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-4">
            <PhoneMockup
              src={hero_.appScreenImage}
              alt="Aplicativo Jovens do Velho Chico"
              className="w-[240px]"
            />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {solucao.modules.map((m, i) => (
                <ScrollReveal key={m.title} delay={i * 60}>
                  <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:border-river/30 hover:shadow-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-river/10 text-river transition-colors group-hover:bg-river group-hover:text-primary-foreground">
                      <m.icon strokeWidth={1.5} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {m.text}
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
