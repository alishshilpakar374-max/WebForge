import type { Social } from "../types";

interface SocialLinksProps {
  links: Social[];
  /** Prepended to each aria-label, e.g. "Pain on " → "Pain on GitHub" */
  labelPrefix?: string;
  /** Callers set size/alignment (text-xl, justify-center...) so classes never fight */
  className?: string;
}

export default function SocialLinks({ links, labelPrefix = "", className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex gap-5 ${className}`}>
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${labelPrefix}${label}`}
            className="transition-colors hover:text-primary"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
