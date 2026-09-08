import { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Enter a valid email address")
    .max(255, "Email is too long"),
  subject: z.string().trim().max(150, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message")
    .max(1000, "Message must be under 1000 characters"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "See my code", href: profile.github },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: profile.whatsapp,
    href: profile.whatsappHref,
  },
];

export function Contact() {
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const next: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    const params = new URLSearchParams({
      subject: result.data.subject || `Portfolio enquiry from ${result.data.name}`,
      body: `${result.data.message}\n\n— ${result.data.name} (${result.data.email})`,
    });
    window.location.href = `mailto:${profile.email}?${params.toString()}`;
    toast.success("Opening your email app with the message ready to send.");
    form.reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get In Touch"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="surface-panel flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary shadow-[0_0_24px_-6px_var(--primary)]">
                <channel.icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{channel.label}</span>
                <span className="block truncate text-sm text-muted-foreground">
                  {channel.value}
                </span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} noValidate className="surface-panel rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" maxLength={100} placeholder="Your full name" />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  placeholder="you@company.com"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                maxLength={150}
                placeholder="Internship opportunity, project collaboration…"
              />
              {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Tell me a little about the role or project…"
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>

            <Button type="submit" variant="hero" size="lg" className="mt-7 w-full sm:w-auto">
              Send Message <Send className="size-4" />
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
