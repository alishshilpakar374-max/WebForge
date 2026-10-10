import SectionHeading from "../components/SectionHeading";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24">
      <div className="container-page">
        <SectionHeading
          id="services-title"
          eyebrow="// services"
          title="What we forge"
          description="From first sketch to live site, here's how we can help your business grow online."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map(({ id, title, description, icon: Icon }) => (
            <li
              key={id}
              className="rounded-xl border border-border bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-glow"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
