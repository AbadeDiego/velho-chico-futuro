import { Download } from "lucide-react";
import { ctaLabel } from "@/content/site-content";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FloatingDownload() {
  return (
    <button
      type="button"
      onClick={() => scrollTo("baixar")}
      className="fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-river px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-river/30 hover:bg-river-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
      aria-label={ctaLabel}
    >
      <Download className="h-4 w-4" />
      {ctaLabel}
    </button>
  );
}
