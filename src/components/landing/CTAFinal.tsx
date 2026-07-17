import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ctaFinal, ctaLabel } from "@/content/site-content";

export function CTAFinal() {
  return (
    <section id="baixar" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-river-deep px-6 py-14 text-primary-foreground md:px-14 md:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-sertao/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-river/40 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {ctaFinal.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {ctaFinal.text}
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="h-12 rounded-full bg-sertao px-6 text-accent-foreground hover:bg-sertao/90"
              >
                <Download className="mr-2 h-4 w-4" />
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
