import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero_, ctaLabel } from "@/content/site-content";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-gradient-to-b from-sand/70 via-background to-background"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-river/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 left-[-8%] -z-10 h-[420px] w-[420px] rounded-full bg-sertao/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-6 sm:px-6 md:pb-24 md:pt-10 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-sertao" />
            {hero_.eyebrow}
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[64px]">
            {hero_.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero_.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => scrollTo("baixar")}
              size="lg"
              className="h-12 rounded-full bg-river px-6 text-primary-foreground hover:bg-river-deep"
            >
              <Download className="mr-2 h-4 w-4" />
              {ctaLabel}
            </Button>
            <Button
              onClick={() => scrollTo("projeto")}
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-6 text-foreground hover:bg-muted"
            >
              Conheça o projeto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-6">
            <div>
              <div className="font-display text-2xl font-bold text-river">5</div>
              <div className="mt-1 text-xs text-muted-foreground">Comunidades quilombolas</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-river">6</div>
              <div className="mt-1 text-xs text-muted-foreground">Trilhas formativas</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-river">300</div>
              <div className="mt-1 text-xs text-muted-foreground">Jovens mobilizados</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-muted shadow-xl">
              <img
                src={hero_.image}
                alt="Jovens do Sertão do São Francisco reunidos ao entardecer com um celular"
                className="h-full w-full object-cover"
                width={1600}
                height={1200}
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-6 hidden sm:block md:-left-10">
              <PhoneMockup
                src={hero_.appScreenImage}
                alt="Tela do aplicativo Jovens do Velho Chico"
                className="w-[180px] md:w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
