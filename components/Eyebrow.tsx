export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] ${
        tone === "dark" ? "text-blue" : "text-slate-light"
      }`}
    >
      <span
        className={`h-px w-8 ${tone === "dark" ? "bg-blue" : "bg-slate-light"}`}
        aria-hidden
      />
      {children}
    </p>
  );
}
