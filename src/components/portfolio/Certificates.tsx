import { Reveal } from "./Reveal";
import { certificates } from "@/data/portfolio";

export function Certificates() {
  return (
    <div className="mt-16">
      <Reveal>
        <h3 className="text-xl font-semibold sm:text-2xl">Certificates</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Professional short courses completed alongside my degree.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {certificates.map((certificate, index) => (
          <Reveal key={certificate.title} delay={index * 90}>
            <div className="surface-panel card-glow-top group h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]">
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate issued by ${certificate.issuer}`}
                loading="lazy"
                className="aspect-[4/3] w-full border-b border-border bg-white object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-6">
                <h4 className="text-base font-semibold">{certificate.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{certificate.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
