import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../types";

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  liveUrl,
  repoUrl,
}: Project) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-glow">
      {image ? (
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div
          className="flex aspect-video items-center justify-center bg-linear-to-br from-primary/20 to-accent/10 text-primary"
          aria-hidden="true"
        >
          <Folder className="h-10 w-10" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-bg-muted px-3 py-1 font-mono text-xs text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(repoUrl || liveUrl) && (
          <div className="mt-auto flex gap-4 pt-6 text-xl">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code on GitHub`}
                className="transition-colors hover:text-primary"
              >
                <FaGithub />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live site`}
                className="transition-colors hover:text-primary"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
