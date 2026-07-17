import { Nav } from "@/components/Nav";
import { TeamPlanForm } from "@/components/TeamPlanForm";
import { Button, Eyebrow, Heading, Lede, LogoMark, Section } from "@/components/ui";
import {
  faqs,
  founderTrack,
  gauntlet,
  process,
  roles,
  site,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Bar />
        <TeamPlan />
        <Roles />
        <HowItWorks />
        <Founder />
        <Pricing />
        <Faq />
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
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-20 md:px-10 md:pt-32 md:pb-28">
        <Eyebrow>AI-native engineers · Seed stage · Series A</Eyebrow>

        <h1 className="mt-6 max-w-[64rem] text-[2.45rem] leading-[1.04] font-medium tracking-[-0.03em] text-balance md:text-[4.35rem]">
          AI-native engineers for early-stage startups racing to ship product.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-snug text-bone md:text-[1.55rem] md:leading-[1.35]">
          Outcraft AI helps companies bring in vetted engineers who use{" "}
          <span className="font-mono text-[0.88em] tracking-tight">
            Claude Code
          </span>
          ,{" "}
          <span className="font-mono text-[0.88em] tracking-tight">Codex</span>
          ,{" "}
          <span className="font-mono text-[0.88em] tracking-tight">Cursor</span>{" "}
          and modern agentic workflows to ship real product work.
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted/80 md:text-lg">
          The result: you ship 3x more PRs per engineer than industry baseline
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href={site.bookingUrl}>Get a 30-min velocity audit</Button>
          <Button href="#bar" variant="ghost">
            See the vetting bar
          </Button>
        </div>

        <ul className="mt-14 grid gap-3 font-mono text-xs tracking-wide text-muted sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <span className="text-ember">01</span> Highly vetted engineers
          </li>
          <li>
            <span className="text-ember">02</span> Measured in your repo
          </li>
          <li>
            <span className="text-ember">03</span> Built for early-stage speed
          </li>
          <li>
            <span className="text-ember">04</span> Founder-led hiring
          </li>
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- team plan */

function TeamPlan() {
  return (
    <Section id="team-plan">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Start without a Onboarding call</Eyebrow>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-balance md:text-5xl">
          Get a practical team plan before you hire.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Tell me what you are trying to build. I will reply with the kind of
          engineer you need, what the trial should measure, and whether
          Outcraft is a fit.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <TeamPlanForm recipient={site.teamPlanEmail} />

        <div className="rounded-2xl border border-ember/30 bg-ember/[0.04] p-8">
          <p className="font-mono text-xs tracking-widest text-ember uppercase">
            What you get back
          </p>
          <ul className="mt-6 space-y-5 text-sm leading-relaxed text-muted">
            <li>
              <span className="text-bone">Role recommendation:</span> full-stack,
              AI product, automation or platform.
            </li>
            <li>
              <span className="text-bone">Trial scope:</span> the smallest piece
              of real work that proves fit.
            </li>
            <li>
              <span className="text-bone">Success criteria:</span> what should be
              measured before any monthly commitment.
            </li>
            <li>
              <span className="text-bone">Honest fit call:</span> if this is not
              a good use of Outcraft, I will say that.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ roles */

function Roles() {
  return (
    <Section id="roles" className="bg-ink-2">
      <Eyebrow>Roles</Eyebrow>
      <Heading>Pick the engineering capacity your roadmap actually needs.</Heading>
      <Lede>
        The right engineer depends on what is blocking the roadmap: product
        scope, AI capability, internal operations, or delivery infrastructure.
      </Lede>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {roles.map((role) => (
          <div key={role.title} className="rounded-2xl border border-line bg-ink p-8">
            <h3 className="text-2xl font-medium tracking-[-0.02em]">{role.title}</h3>
            <p className="mt-3 text-ember">{role.line}</p>
            <p className="mt-6 border-l-2 border-ember pl-5 text-sm leading-relaxed text-muted">
              {role.proof}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ the bar */

function Bar() {
  return (
    <Section id="bar">
      <Eyebrow>The bar</Eyebrow>
      <Heading>Four stages. Every engineer. No exceptions.</Heading>
      <Lede>
        This is the filter Outcraft is built around. It is public so clients can
        hold us to it and engineers know exactly what they are walking into.
      </Lede>

      <div className="mt-16 divide-y divide-line border-y border-line">
        {gauntlet.map((s) => (
          <div
            key={s.n}
            className="grid gap-4 py-8 md:grid-cols-[80px_260px_1fr] md:gap-8"
          >
            <p className="font-mono text-sm text-ember">{s.n}</p>
            <h3 className="text-lg font-medium tracking-[-0.01em]">{s.title}</h3>
            <p className="leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-ember/30 bg-ember/[0.04] p-8">
        <p className="text-lg leading-relaxed text-balance">
          <span className="text-ember">The rule:</span> if nobody clears the bar
          for your role, we tell you. The failure mode of this category is
          sending the best available person instead of the right person.
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- how it works */

function HowItWorks() {
  return (
    <Section id="how" className="bg-ink-2">
      <Eyebrow>How it works</Eyebrow>
      <Heading>From problem brief to measured trial without a long hiring loop.</Heading>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
        {process.map((p) => (
          <div key={p.n} className="bg-ink p-7">
            <p className="font-mono text-sm text-ember">{p.n}</p>
            <h3 className="mt-5 text-lg font-medium tracking-[-0.01em]">
              {p.title}
            </h3>
            <p className="mt-1 font-mono text-xs tracking-wide text-muted uppercase">
              {p.meta}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- founder */

function Founder() {
  return (
    <Section id="founder" className="bg-ink-2">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <Eyebrow>Who&apos;s setting the bar</Eyebrow>
          <Heading>
            Ten years shipping software where mistakes cost real money.
          </Heading>

          <div className="mt-8 space-y-5 leading-relaxed text-muted">
            <p>
              I&apos;m {site.founder.name}. I&apos;ve spent a decade building
              systems inside institutions where reliability, security and
              delivery discipline mattered, and then inside a startup where slow
              execution becomes existential quickly.
            </p>
            <p className="text-bone">
              I built Outcraft for the engineer I kept wishing I could hire:
              fast with AI, careful with systems, clear about tradeoffs, and
              accountable when the work reaches production.
            </p>
          </div>

        </div>

        <div className="divide-y divide-line border-y border-line">
          {founderTrack.map((t) => (
            <div
              key={t.org}
              className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:gap-6"
            >
              <p className="font-mono text-sm text-bone">{t.org}</p>
              <p className="text-sm leading-relaxed text-muted">{t.what}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- pricing */

function Pricing() {
  return (
    <Section id="pricing">
      <Eyebrow>Pricing</Eyebrow>
      <Heading>Senior AI-native engineering without Bay Area burn.</Heading>

      <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="space-y-6 text-lg leading-relaxed text-muted">
          <p>
            Outcraft AI gives early-stage teams access to strong AI-native
            engineers from India, where the cost base is lower but the
            engineering bar stays high.
          </p>
          <p className="text-bone">
            Engagements typically range from{" "}
            <span className="text-bone">
              ${site.offer.monthlyPriceLow.toLocaleString()}-$
              {site.offer.monthlyPriceHigh.toLocaleString()}/month
            </span>{" "}
            depending on scope, availability, and the level of ownership
            required.
          </p>
          <p className="text-base">
            You are not paying for a local hiring market, recruiter margin, or
            agency overhead. You are paying for vetted engineering capacity that
            can move the product.
          </p>
        </div>

        <div className="rounded-2xl border border-ember/30 bg-ember/[0.04] p-8">
          <p className="font-mono text-xs tracking-widest text-ember uppercase">
            Typical range
          </p>
          <p className="mt-6 text-5xl font-medium tracking-[-0.03em]">
            ${site.offer.monthlyPriceLow / 1000}k-$
            {site.offer.monthlyPriceHigh / 1000}k
            <span className="text-muted">/mo</span>
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Scoped around the milestone, engineer availability, and level of
            ownership required.
          </p>
          <div className="mt-8">
            <Button href={site.bookingUrl}>Get a 30-min velocity audit</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------------- faq */

function Faq() {
  return (
    <Section className="bg-ink-2">
      <Eyebrow>Straight answers</Eyebrow>
      <Heading>The questions you&apos;re actually asking.</Heading>

      <div className="mt-14 divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-8">
              <span className="text-lg font-medium tracking-[-0.01em]">
                {f.q}
              </span>
              <span className="mt-1 font-mono text-ember transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
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
