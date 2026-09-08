import { Reveal } from "./Reveal";

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  detail: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-6 pl-6 before:absolute before:inset-y-2 before:left-0 before:w-px before:bg-linear-to-b before:from-primary/60 before:via-border before:to-transparent sm:pl-10">
      {items.map((item, index) => (
        <Reveal as="li" key={`${item.title}-${index}`} delay={index * 90} className="relative">
          <span
            aria-hidden
            className="absolute top-7 -left-[31px] size-3 rounded-full bg-primary ring-4 ring-background sm:-left-[47px]"
          />
          <div className="surface-panel rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
              {item.period}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{item.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
