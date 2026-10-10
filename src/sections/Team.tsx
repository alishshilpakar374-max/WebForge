import SectionHeading from "../components/SectionHeading";
import TeamCard from "../components/TeamCard";
import { team } from "../data/content";

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="bg-bg-muted py-24">
      <div className="container-page">
        <SectionHeading
          id="team-title"
          eyebrow="// team"
          title="The crew at the forge"
          description="Three people, one goal: websites you're proud to launch."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
