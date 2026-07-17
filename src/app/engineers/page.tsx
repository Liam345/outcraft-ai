import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Button, Eyebrow, Heading, Lede, LogoMark, Section } from "@/components/ui";
import {
  engineerExpectations,
  engineerReasons,
  gauntlet,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "For engineers",
  description:
    "Apply to the Outcraft AI engineer bench. We work with senior AI-native engineers who can ship production software with agentic workflows.",
};

const applicationFields = [
  "LinkedIn or personal site",
  "GitHub or code sample",
  "Best production system you owned",
  "AI tools you use seriously",
  "Availability and expected rate",
];

export default function Engineers() {
  return (
    <>
      <Nav context="engineers" />
      <main className="flex-1">
        <Hero />
        <WhyJoin />
        <Expectations />
        <Bar />
        <Application />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ hero */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-ember/12 blur-[120px]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-20 md:px-10 md:pt-32 md:pb-24">
        <Eyebrow>For senior engineers</Eyebrow>
        <h1 className="mt-6 max-w-5xl text-[2.6rem] leading-[1.05] font-medium tracking-[-0.03em] text-balance md:text-7xl">
          Join the Outcraft AI engineer bench.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          We work with senior engineers who can ship production software with
          agentic coding workflows, own ambiguous problems, and stand behind
          their work when it reaches real users.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#apply">Apply to the bench</Button>
          <Button href="#bar" variant="ghost">
            See the bar
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- why join */

function WhyJoin() {
  return (
    <Section id="why">
      <Eyebrow>Why join</Eyebrow>
      <Heading>Client work for engineers who do not need hand-holding.</Heading>
      <Lede>
        Outcraft is intentionally selective because the client promise depends
        on it. If you clear the bar, the goal is to put you in front of serious
        teams with clear problems, not into an endless recruiter funnel.
      </Lede>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {engineerReasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-2xl border border-line bg-ink-2 p-8"
          >
            <h3 className="text-lg font-medium tracking-[-0.01em]">
              {reason.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{reason.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- expectations */

function Expectations() {
  return (
    <Section className="bg-ink-2">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <Eyebrow>Who fits</Eyebrow>
          <Heading>Senior first. AI-native second.</Heading>
          <Lede>
            Tool fluency matters, but the bar is not prompt cleverness. We care
            whether you can make good engineering decisions when the work is
            ambiguous and the model is not always right.
          </Lede>
        </div>

        <div className="rounded-2xl border border-line bg-ink p-7">
          <ul className="space-y-5">
            {engineerExpectations.map((item) => (
              <li key={item} className="flex gap-4 text-sm leading-relaxed text-muted">
                <span className="mt-2 block h-2 w-2 shrink-0 rotate-45 rounded-[2px] bg-ember" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ the bar */

function Bar() {
  return (
    <Section id="bar">
      <Eyebrow>The gauntlet</Eyebrow>
      <Heading>Four stages. Published so you can prepare.</Heading>
      <Lede>
        No trick questions, no whiteboard trivia, and no take-home that is
        secretly free client work. You will know what you are being assessed on.
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
  );
}

/* --------------------------------------------------------------- apply */

function Application() {
  return (
    <Section id="apply" className="bg-ink-2">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Apply</Eyebrow>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-balance md:text-5xl">
          Send the evidence, not a generic CV.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          The strongest application explains a system you owned, what it had to
          survive, the tradeoffs you made, and how AI changed your delivery
          loop without lowering the engineering bar.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-ember/30 bg-ember/[0.04] p-8">
          <p className="font-mono text-xs tracking-widest text-ember uppercase">
            Include this
          </p>
          <ul className="mt-6 space-y-4">
            {applicationFields.map((field) => (
              <li key={field} className="flex gap-4 text-sm leading-relaxed text-muted">
                <span className="mt-2 block h-2 w-2 shrink-0 rotate-45 rounded-[2px] bg-ember" />
                <span>{field}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Rates are not hidden. Tell us what you expect, what type of work you
            want, and how much availability you have.
          </p>
        </div>

        <form
          action={`mailto:${site.founder.email}?subject=Engineer%20application`}
          method="post"
          encType="text/plain"
          className="rounded-2xl border border-line bg-ink p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-bone" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-3 w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-bone" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-3 w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium text-bone" htmlFor="links">
              Links
            </label>
            <input
              id="links"
              name="links"
              placeholder="LinkedIn, GitHub, personal site, code sample"
              className="mt-3 w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
            />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium text-bone" htmlFor="system">
              System you are proudest of
            </label>
            <textarea
              id="system"
              name="system"
              rows={6}
              required
              placeholder="What did you own, what could go wrong, and what decision would you defend hardest?"
              className="mt-3 w-full resize-y rounded-xl border border-line bg-ink-2 p-4 text-sm leading-relaxed text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
            />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-bone" htmlFor="ai-tools">
                AI tools
              </label>
              <input
                id="ai-tools"
                name="ai-tools"
                placeholder="Claude Code, Codex, Cursor..."
                className="mt-3 w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-bone" htmlFor="availability">
                Availability and rate
              </label>
              <input
                id="availability"
                name="availability"
                placeholder="20 hrs/week, full-time, day rate..."
                className="mt-3 w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-bone"
          >
            Email application
          </button>
          <p className="mt-4 text-center text-xs leading-relaxed text-muted">
            This opens your email client. I read applications directly while the
            bench is still small.
          </p>
        </form>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ footer */

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-[22px] w-[22px]" />
          <span className="text-sm">
            Outcraft <span className="text-muted">AI</span>
          </span>
        </div>
        <p className="font-mono text-xs text-muted">
          {site.domain} · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
