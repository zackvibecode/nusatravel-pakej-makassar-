type Props = {
  eyebrow?: string;
  title?: string;
  season?: string;
  variant?: "default" | "promo" | "season" | "premier";
  className?: string;
  children?: React.ReactNode;
};

const styles: Record<string, string> = {
  default: "bg-brand-light text-brand-red",
  promo: "bg-brand-red text-white",
  season: "bg-amber-100 text-amber-700",
  premier: "bg-indigo-100 text-indigo-700",
};

export default function Badge({
  eyebrow,
  title,
  season,
  variant = "default",
  className = "",
  children,
}: Props) {
  return (
    <span className={`badge ${styles[variant]} ${className}`}>
      {eyebrow ?? title ?? season ?? children}
    </span>
  );
}
