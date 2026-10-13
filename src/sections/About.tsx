import { skills } from "../data/content";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 sm:py-24"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* About content */}
        <div>
          <div
            className="mb-6 flex items-center gap-3 text-primary/90"
            aria-hidden="true"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="h-px w-8 bg-border" />
            <span className="text-base font-medium">✦</span>
            <span className="h-px w-8 bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          </div>

          <h2
            id="about-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            About
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-base leading-relaxed text-text-muted sm:text-lg">
            <p className="text-text">
              <span className="font-semibold">
                We turn ideas into digital experiences.
              </span>
            </p>

            <p>
              WebForge is a team of three passionate developers building modern,
              responsive, and user-friendly websites for businesses, brands, and
              startups. We combine thoughtful design with reliable development
              to create digital experiences that look great, work smoothly, and
              grow with your vision.
            </p>

            <p>
              From clean interfaces to functional web applications, we focus on
              writing maintainable code, building accessible experiences, and
              delivering websites that work seamlessly across devices.
            </p>

            <p className="font-semibold text-text">
              Smart solutions. Quality development.
            </p>
          </div>
        </div>

        {/* Tech stack — original mobile design and laptop design */}
        <div className="lg:rounded-2xl lg:border lg:border-border lg:bg-surface/50 lg:p-8 lg:shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-mono text-sm lg:text-base">
              Tech we work with
            </h3>

            <span className="hidden font-mono text-xs text-text-muted lg:block">
              MY TOOLKIT
            </span>
          </div>

          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-7 lg:grid-cols-2 lg:gap-3">
            {skills.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="group flex min-w-0 flex-col items-center gap-2 rounded-lg border border-border bg-surface p-4 text-center transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-glow sm:py-5 lg:flex-row lg:gap-3 lg:rounded-xl lg:px-3 lg:py-4 lg:text-left"
              >
                <Icon
                  className="h-8 w-8 text-primary transition-transform duration-200 group-hover:scale-110 lg:h-5 lg:w-5"
                  aria-hidden="true"
                />

                <span className="text-sm font-medium lg:text-xs">{name}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 hidden border-t border-border pt-6 lg:block">
            <p className="text-base font-semibold text-text">
              Let's build something great.
            </p>

            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Have a project in mind? Let's create something useful, modern, and
              memorable.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
            >
              Let's talk <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
