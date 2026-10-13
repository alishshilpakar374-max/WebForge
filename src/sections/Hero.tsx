import { ArrowRight } from "lucide-react";
import { SiReact, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import SocialLinks from "../components/SocialLinks";
import PixelCanvas from "../components/PixelCanvas";
import { socials } from "../data/content";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const pixelOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-bg px-4 pb-36 pt-24 sm:px-6"
    >
      {/* Center glow from the first code */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:block"
        aria-hidden="true"
      />

      {/* Pixel background from the second code */}

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          style={{ opacity: pixelOpacity }}
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <PixelCanvas />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--root-bg)_0%,color-mix(in_srgb,var(--root-bg)_75%,transparent)_48%,transparent_100%)] opacity-60" />
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--root-bg)_0%,color-mix(in_srgb,var(--root-bg)_75%,transparent)_48%,transparent_100%)] opacity-90" />
      </div>

      <div className="container-page relative z-10 mx-auto text-center">
        <div className="mx-auto max-w-6xl">
          {/* Animated heading from the second code */}

          <h1 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-5xl leading-[0.98] sm:gap-x-6 sm:text-7xl md:text-7xl lg:text-8xl 2xl:text-9xl">
            <span className="animate-word-reveal font-serif font-medium italic">
              Digital
            </span>

            <span className="animate-word-reveal animation-delay-300 font-heading font-extrabold tracking-[-0.075em]">
              experiences.
            </span>
          </h1>

          {/* Animated paragraph */}
          <p
            className="animate-fade-up mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg md:text-xl"
            style={{ animationDelay: "150ms" }}
          >
            We design and build fast, thoughtful websites that help ambitious
            businesses stand out and grow.
          </p>

          {/* Animated buttons */}
          <div className="animate-fade-up mt-10 flex flex-nowrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-xl bg-linear-to-b from-primary/90 to-primary px-4 text-sm font-semibold text-on-primary shadow-glow ring-1 ring-primary/20 transition duration-200 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98] sm:px-6 sm:text-base"
            >
              See our work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 shrink-0 items-center rounded-xl border border-border bg-surface/70 px-4 text-sm font-semibold text-text shadow-sm backdrop-blur transition duration-200 hover:scale-[1.03] hover:border-primary active:scale-[0.98] sm:px-6 sm:text-base"
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

      {/* Technology marquee from the second code */}
      <div className=" absolute inset-x-0 bottom-7 z-10">
        <p className="mb-5 text-center text-[0.65rem] font-medium uppercase tracking-[0.24em] text-text-muted/80">
          Crafted with modern tools
        </p>

        <div className="relative mx-auto max-w-5xl overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="hero-tech-marquee flex w-max items-center py-2">
            {[0, 1].map((group) => (
              <ul
                key={group}
                aria-hidden={group === 1}
                className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
              >
                {technologies.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-text-muted/80 transition-colors hover:text-text"
                  >
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
