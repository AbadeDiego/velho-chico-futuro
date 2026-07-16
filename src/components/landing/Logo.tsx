export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-background" : "text-foreground";
  const accent = tone === "light" ? "text-sertao-soft" : "text-river";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className={`h-9 w-9 ${accent}`}
        fill="none"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 24c4-4 8-4 12 0s10 4 16-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 30c4-3 8-3 12 0s10 3 16-1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
      <div className={`flex flex-col leading-none ${color}`}>
        <span className="font-display text-[13px] font-semibold tracking-tight">
          Jovens do
        </span>
        <span className="font-display text-[15px] font-bold tracking-tight">
          Velho Chico
        </span>
      </div>
    </div>
  );
}
