import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

const stats = [
  { value: "12+", label: "Technical skills" },
  { value: "4", label: "Featured projects" },
  { value: "100%", label: "Business-first mindset" },
];

export function Hero() {
  return (
    <section id="home" className="hero-glow relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="bg-grid-fade absolute inset-0" />
      <div
        aria-hidden
        className="pulse-glow absolute top-24 -right-24 size-96 rounded-full bg-[image:var(--gradient-accent)] blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <h1 className="text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            {profile.name}
            <br />
            <span className="text-gradient">{profile.headline}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View My Projects <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button variant="outlineGlow" size="xl" asChild>
              <a href="/P.A.D.HESHANI%20NARMADA%20RANAWEERA%20CV.pdf" download="P.A.D.HESHANI NARMADA RANAWEERA CV.pdf">
                <Download className="size-4" /> Download CV
              </a>
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-border pl-4">
                <dt className="font-display text-2xl font-semibold text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={140} className="relative mx-auto w-full max-w-sm">
          <div className="float-slow relative">
            <div
              aria-hidden
              className="pulse-glow absolute -inset-8 rounded-[3rem] bg-[image:var(--gradient-accent)] blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -inset-px rounded-[2.1rem] bg-[image:var(--gradient-border)]"
            />
            <div className="surface-panel relative overflow-hidden rounded-[2rem] p-3">
              <img
                src="/22banner.png"
                alt={`${profile.name} — professional profile photo`}
                width={800}
                height={800}
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
