import { ArrowRight } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import { socials } from "../data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:block"
        aria-hidden="true"
      />

      <div className="container-page relative text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-mono text-sm text-primary">
            &lt;web development team &gt;
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            We forge fast, modern websites that{" "}
            <span className="text-primary">grow your business.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg">
            We're WebForge, a small team building clean, responsive React
            websites for startups and small businesses.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-on-primary shadow-glow transition hover:bg-primary-hover"
            >
              See our work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border px-6 py-3 font-medium text-text transition hover:border-primary"
            >
              Hire us
            </a>
          </div>

          <SocialLinks
            links={socials}
            className="mt-10 justify-center text-2xl"
          />
        </div>
      </div>
    </section>
  );
}
