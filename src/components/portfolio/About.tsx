import { BarChart3, Layers, Workflow, ClipboardList } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Layers,
    title: "Business Technology",
    text: "Connecting commercial goals with the systems, data and tools that make them achievable.",
  },
  {
    icon: BarChart3,
    title: "Information Systems",
    text: "Analysing, designing and documenting systems that keep information accurate and accessible.",
  },
  {
    icon: Workflow,
    title: "Process Improvement",
    text: "Mapping workflows, removing friction and automating repetitive operational tasks.",
  },
  {
    icon: ClipboardList,
    title: "IT Project Management",
    text: "Coordinating scope, stakeholders and delivery so digital initiatives actually land.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Turning Business Needs Into Practical Digital Solutions"
      muted
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a university student and aspiring business &amp; IT professional with a strong
            interest in how technology reshapes the way organisations operate. My focus sits at the
            intersection of business analysis and information systems, understanding a process end
            to end, then designing the digital solution that improves it.
          </p>
          <p>
            Through academic projects and hands-on work with tools like SAP Business One HANA, Power
            BI and SQL, I&apos;ve built experience in requirements gathering, database design,
            reporting and digital transformation initiatives. I enjoy translating technical detail
            into language decision-makers can act on.
          </p>
          <p>
            I&apos;m now looking for internship and graduate opportunities where I can contribute to
            IT project delivery, business systems and data-driven improvement, and keep growing
            alongside experienced teams.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 90}>
              <div className="surface-panel card-glow-top h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary shadow-[0_0_24px_-6px_var(--primary)]">
                  <pillar.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
