import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected Academic and Professional Work"
      singleLineTitle
      description="Systems, proposals and analytics work built around real business problems."
      muted
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 90} as="article">
            <div className="surface-panel card-glow-top group flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[var(--shadow-elevated)]">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[image:var(--gradient-accent)] transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
