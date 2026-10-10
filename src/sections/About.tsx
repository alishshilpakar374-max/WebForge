import { skills } from "../data/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-primary">// about</p>
          <h2 id="about-title" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Who's behind the forge
          </h2>
          {/* ✍️ Replace with YOUR story */}
          <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed">
            <p>
              We're WebForge, a small team of three who build clean, responsive websites with
              React and TypeScript.
            </p>
            <p>
              We care about readable code, accessible interfaces, and sites that feel fast. Tell
              us about your idea and let's build it properly.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-sm">Tech we work with</h3>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {skills.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface p-4 text-center transition hover:border-primary"
              >
                <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <span className="text-sm">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
