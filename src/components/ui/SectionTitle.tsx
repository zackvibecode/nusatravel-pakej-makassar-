type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  id?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
  id,
}: Props) {
  return (
    <div
      id={id}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-2xl font-bold tracking-tightest text-brand-charcoal sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-[15px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
