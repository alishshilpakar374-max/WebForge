import { ArrowUpRight } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden py-20"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-highlight/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        {/* Section heading */}
        <SectionHeading
          id="projects-title"
          eyebrow="// featured work"
          title="Projects that make an impact."
          description="A selection of our recent work, from web applications to innovative tools that solve real-world problems."
        />

        {/* Projects grid */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* View all projects */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/alishshilpakar374-max?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
