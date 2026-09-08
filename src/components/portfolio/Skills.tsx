import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools and Capabilities I Work With"
      description="A blend of enterprise systems, data analysis, development fundamentals and business practice."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} delay={(index % 3) * 80}>
            <div className="surface-panel group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[var(--shadow-elevated)]">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[image:var(--gradient-accent)] transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold">{skill.name}</h3>
                <span className="shrink-0 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  {skill.group}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{skill.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
