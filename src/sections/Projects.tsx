import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-bg-muted py-24">
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          eyebrow="// projects"
          title="Things we've built"
          description="A few recent pieces of work, from first commit to live site."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
