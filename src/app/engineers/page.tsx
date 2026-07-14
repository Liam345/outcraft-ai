import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Button, Eyebrow, Heading, Lede, Section } from "@/components/ui";
import { gauntlet, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "For engineers",
  description:
    "Outcraft places senior AI-native engineers with seed-stage startups. Five stages, no exceptions. Here's exactly what we test and why.",
};

const looksLike = [
  {
    title: "Seven years, minimum",
    body: "And at least one production system you owned end to end. You chose the architecture, you deployed it, you got paged when it broke.",
  },
  {
    title: "You've shipped AI into production",
    body: "Not a demo, not a weekend project. Something with real users, where you had to answer for cost, latency and what happens when the model is confidently wrong.",
  },
  {
    title: "You don't need managing",
    body: "You can take an ambiguous problem from a founder, ask the three questions that matter, and come back with something shipped.",
  },
  {
    title: "You want the seed-stage problem",
    body: "Small teams, real ownership, decisions that visibly matter. If you want a large org and a narrow lane, we're the wrong fit and that's fine.",
  },
];

export default function Engineers() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-ember/12 blur-[120px]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-20 md:px-10 md:pt-32 md:pb-24">
            <Eyebrow>For engineers</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.05] font-medium tracking-[-0.03em] text-balance md:text-7xl">
              Most people who apply here won&apos;t get in.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              That&apos;s not a marketing line, it&apos;s the entire product.
              Founders trust us because the bar doesn&apos;t move. If you clear
              it, you get put in front of seed-stage teams who need you to own
              something real, and you get paid like it.
            </p>
            <div className="mt-10">
              <Button href={`mailto:${site.founder.email}?subject=Engineer%20application`}>
                Apply
              </Button>
            </div>
          </div>
        </section>

        <Section>
          <Eyebrow>Who we&apos;re looking for</Eyebrow>
          <Heading>Senior first. AI-native second.</Heading>
          <Lede>
            We don&apos;t care which model you prefer or how clever your prompts
            are. We care whether you can put a nondeterministic system in front
            of real users and sleep at night.
          </Lede>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {looksLike.map((l) => (
              <div
                key={l.title}
                className="rounded-2xl border border-line bg-ink-2 p-8"
              >
                <h3 className="text-lg font-medium tracking-[-0.01em]">
                  {l.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{l.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-ink-2">
          <Eyebrow>The gauntlet</Eyebrow>
          <Heading>Five stages. We publish them so you can prepare.</Heading>
          <Lede>
            No trick questions, no whiteboard trivia, no take-home that&apos;s
            secretly free work. You&apos;ll know what you&apos;re walking into.
          </Lede>

          <div className="mt-16 divide-y divide-line border-y border-line">
            {gauntlet.map((s) => (
              <div
                key={s.n}
                className="grid gap-4 py-8 md:grid-cols-[80px_260px_1fr] md:gap-8"
              >
                <p className="font-mono text-sm text-ember">{s.n}</p>
                <h3 className="text-lg font-medium tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Apply</Eyebrow>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-balance md:text-5xl">
              Send me the thing you&apos;re proudest of.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Not a CV. A system you built, what it had to survive, and the
              decision in it you&apos;d defend hardest. I read every one.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                href={`mailto:${site.founder.email}?subject=Engineer%20application`}
              >
                Email {site.founder.name.split(" ")[0]}
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-2.5">
            <span className="block h-3 w-3 rotate-45 rounded-[2px] bg-ember" />
            <span className="text-sm">
              Outcraft <span className="text-muted">AI</span>
            </span>
          </div>
          <p className="font-mono text-xs text-muted">
            {site.domain} · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
