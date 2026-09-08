import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
  singleLineTitle?: boolean;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  muted = false,
  singleLineTitle = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-24 lg:py-28",
        muted && "bg-surface/40",
        className,
      )}
    >
      {muted && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        />
      )}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className={singleLineTitle ? "max-w-full" : "max-w-2xl"}>
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            <span aria-hidden className="h-px w-8 bg-[image:var(--gradient-accent)]" />
            {eyebrow}
          </p>
          <h2
            className={cn(
              "mt-3 text-3xl font-semibold sm:text-4xl",
              singleLineTitle && "sm:whitespace-nowrap",
            )}
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
