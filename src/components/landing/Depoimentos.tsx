import { Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { depoimentos } from "@/content/site-content";

export function Depoimentos() {
  return (
    <section className="relative bg-sand/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-river">
            Vozes
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {depoimentos.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {depoimentos.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.items.map((d, i) => (
            <ScrollReveal key={d.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7">
                <Quote className="h-6 w-6 text-sertao" strokeWidth={1.5} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  “{d.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                  <img
                    src={d.photo}
                    alt={d.name}
                    className="h-11 w-11 rounded-full object-cover"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                  <div>
                    <div className="font-display text-sm font-semibold text-foreground">
                      {d.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{d.role}</div>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Conteúdo provisório — será substituído por depoimentos reais do projeto.
        </p>
      </div>
    </section>
  );
}
