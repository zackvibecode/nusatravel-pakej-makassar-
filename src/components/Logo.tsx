import Image from "next/image";
import { SITE } from "@/data/content";

type LogoProps = {
  size?: number;
  priority?: boolean;
  className?: string;
};

export default function Logo({
  size = 40,
  priority = false,
  className = "",
}: LogoProps) {
  return (
    <Image
      src={SITE.logo}
      alt={SITE.brand}
      width={size}
      height={size}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
