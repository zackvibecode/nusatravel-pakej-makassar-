type IconProps = {
  name: string;
  className?: string;
};

// Lightweight inline SVG icons (stroke-based, 24x24 viewBox).
export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "anchor":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="3" />
          <line x1="12" y1="22" x2="12" y2="8" />
          <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        </svg>
      );
    case "city":
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V7l5-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
        </svg>
      );
    case "mountain":
      return (
        <svg {...common}>
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      );
    case "hill":
      return (
        <svg {...common}>
          <path d="M3 20h18M6 20l4-8 3 5 2-3 4 6" />
        </svg>
      );
    case "shop":
      return (
        <svg {...common}>
          <path d="M3 9l1-5h16l1 5M5 9v11h14V9M9 20v-6h4v6" />
        </svg>
      );
    case "trees":
      return (
        <svg {...common}>
          <path d="M12 2l5 9h-3l4 7H6l4-7H7l5-9zM12 18v4" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16z" />
          <path d="M2 22c4-4 8-6 12-7" />
        </svg>
      );
    case "pine":
      return (
        <svg {...common}>
          <path d="M12 2l4 6h-2l3 5h-2l3 5H6l3-5H7l3-5H8l4-6zM12 18v4" />
        </svg>
      );
    case "mosque":
      return (
        <svg {...common}>
          <path d="M12 2c2 2 3 3 3 5M12 2c-2 2-3 3-3 5" />
          <path d="M4 21V12c0-3 4-5 8-5s8 2 8 5v9M4 21h16M9 21v-5a3 3 0 0 1 6 0v5" />
        </svg>
      );
    case "sunset":
      return (
        <svg {...common}>
          <path d="M17 18a5 5 0 0 0-10 0M2 18h2M20 18h2M12 2v6M4.93 10.93l1.41 1.41M18.36 12.36l1.41-1.41M2 22h20M8 6l4 4 4-4" />
        </svg>
      );
    case "beach":
      return (
        <svg {...common}>
          <path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 4c0 4-3 7-3 7s3 0 3-7zM12 11v9" />
        </svg>
      );
    case "fort":
      return (
        <svg {...common}>
          <path d="M3 21h18M4 21V9l2-2v2h2V7l2-2 2 2v2h2V7l2 2v12M9 21v-4h6v4" />
        </svg>
      );
    case "dome":
      return (
        <svg {...common}>
          <path d="M12 3c4 2 7 6 7 11H5c0-5 3-9 7-11zM5 14h14v7H5zM12 14v7" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "cross":
      return (
        <svg {...common}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.477-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case "file":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="13" y2="17" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "plane":
      return (
        <svg {...common}>
          <path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8L8 11l-3 3-2-1a.5.5 0 0 0-.6.8L5 16l1.2 2.6a.5.5 0 0 0 .8-.6l-1-2 3-3 4 4.7a.5.5 0 0 0 .8-.5z" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
          <path d="M19 16l.6 1.6L21 18l-1.4.4L19 20l-.6-1.6L17 18l1.4-.4L19 16z" />
        </svg>
      );
    default:
      return null;
  }
}
