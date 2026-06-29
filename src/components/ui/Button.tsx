import Link from "next/link";

type Variant = "primary" | "secondary" | "whatsapp" | "accent";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  whatsapp: "btn-whatsapp",
  accent: "btn-accent",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: Props) {
  const classes = `${variants[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
