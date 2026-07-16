import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { nav, footer } from "@/content/site-content";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {footer.description}
            </p>
            <a
              href={`mailto:${footer.contact}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-river hover:underline"
            >
              <Mail className="h-4 w-4" />
              {footer.contact}
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navegação
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(n.id);
                    }}
                    className="text-foreground/80 hover:text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Redes
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-foreground/80 hover:text-foreground">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Legal
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {footer.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-foreground/80 hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/70 pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            {footer.parceiros}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jovens do Velho Chico. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
