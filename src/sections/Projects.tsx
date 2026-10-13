import { ArrowUpRight } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import ProjectStack from "../components/ProjectStack";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
      />

      {/* Phone and tablet */}
      <div className="container-page relative z-10 block md:hidden">
        <SectionHeading
          id="projects-mobile-title"
          eyebrow="// selected work"
          title="Things we've built"
          description="A selection of projects showcasing our work, skills, and approach to solving real problems."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View All Projects
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      {/* Desktop */}
      <div className="container-page relative z-10 hidden lg:block">
        <SectionHeading
          id="projects-desktop-title"
          eyebrow="// selected work"
          title="Things we've built"
          description="A selection of projects showcasing our work, skills, and approach to solving real problems."
        />

        <div className="mt-12">
          <ProjectStack projects={projects} />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View All Projects
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
