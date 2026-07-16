import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { comoFunciona } from "@/content/site-content";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ComoFunciona() {
  return (
    <section className="relative bg-sand/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-river">
            Como funciona
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {comoFunciona.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {comoFunciona.subtitle}
          </p>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 hidden h-full w-px bg-border md:block md:left-1/2 md:h-px md:w-full md:top-12"
          />
          <ol className="grid gap-6 md:grid-cols-4 md:gap-4">
            {comoFunciona.steps.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <li className="relative rounded-3xl border border-border/70 bg-card p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-river font-display text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sertao/10 text-sertao">
                      <s.icon strokeWidth={1.5} className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => scrollTo("baixar")}
            size="lg"
            className="h-12 rounded-full bg-sertao px-6 text-accent-foreground hover:bg-sertao/90"
          >
            {comoFunciona.ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
