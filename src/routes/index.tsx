import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Section } from "@/components/portfolio/Section";
import { Timeline } from "@/components/portfolio/Timeline";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { education, experience } from "@/data/portfolio";

const title = "Heshani — Tech-Savvy Business & IT Professional";
const description =
  "Portfolio of Heshani, an aspiring business and IT professional specialising in information systems, Power BI analytics, SAP Business One HANA, databases and IT project management.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Section
          id="education"
          eyebrow="Education"
          title="Academic Background & Certifications"
          singleLineTitle
        >
          <Timeline items={education} />
          <Certificates />
        </Section>
        <Section
          id="experience"
          eyebrow="Experience"
          title="Professional & Practical Experience"
          muted
        >
          <Timeline items={experience} />
        </Section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
