import { ArrowUpRight, ExternalLink, Folder } from "lucide-react";
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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
      {/* Project image */}
      <div className="relative aspect-video overflow-hidden bg-bg-muted">
        {image ? (
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-linear-to-br from-accent/15 via-bg-muted to-primary/10"
            aria-hidden="true"
          >
            <Folder className="h-12 w-12 text-accent/70 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
          </div>
        )}

        {/* Image overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg-dark/80 via-bg-dark/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"
          aria-hidden="true"
        />

        {/* Overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
              className="rounded-full border border-border bg-surface/95 p-3 text-text transition-all duration-200 hover:scale-110 hover:border-accent hover:bg-accent hover:text-white"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code`}
              className="rounded-full border border-border bg-surface/95 p-3 text-text transition-all duration-200 hover:scale-110 hover:border-accent hover:bg-accent hover:text-white"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col space-y-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
            {title}
          </h3>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
              className="shrink-0 text-text-muted transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:text-accent"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-text-muted">
          {description}
        </p>

        {/* Technology tags */}
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-bg-muted px-3 py-1.5 text-xs font-medium text-text-muted transition-all duration-200 hover:border-accent/50 hover:bg-accent-light hover:text-accent-dark"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Project links */}
        {(repoUrl || liveUrl) && (
          <div className="mt-auto flex items-center gap-4 border-t border-border pt-4">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors duration-200 hover:text-accent"
              >
                <FaGithub className="h-4 w-4" />
                Source
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2 text-sm font-medium text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
              >
                Live demo
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
