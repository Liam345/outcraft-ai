import { Nav } from "@/components/Nav";
import { Button, Eyebrow, Heading, Lede, Section } from "@/components/ui";
import { faqs, founderTrack, gauntlet, process, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TwoMistakes />
        <Definition />
        <Bar />
        <HowItWorks />
        <Guarantee />
        <Founder />
        <Pricing />
        <Faq />
        <Contact />
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
        <Eyebrow>AI-native engineers · Seed stage · Ship in weeks</Eyebrow>

        <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.05] font-medium tracking-[-0.03em] text-balance md:text-7xl">
          Your next engineer should ship like a team of three.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Outcraft places senior engineers who build with AI at the core — not
          as autocomplete. They take features from nothing to production, own
          the infrastructure, and don&apos;t need managing. Because at seed
          stage, you can&apos;t afford a hire who does.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href={site.bookingUrl}>Book a 20-min scoping call</Button>
          <Button href="#bar" variant="ghost">
            See the bar they clear
          </Button>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs tracking-wide text-muted">
          <li>
            <span className="text-ember">◆</span> {site.offer.trialWeeks}-week
            paid trial
          </li>
          <li>
            <span className="text-ember">◆</span> Not a fit? You don&apos;t pay
            for it
          </li>
          <li>
            <span className="text-ember">◆</span> Replacement in{" "}
            {site.offer.replacementDays} business days
          </li>
          <li>
            <span className="text-ember">◆</span> Month to month, no lock-in
          </li>
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- the two mistakes */

const mistakes = [
  {
    tag: "Mistake 01",
    title: "The autocomplete engineer",
    body: "A good senior dev with Copilot open. They write the same code they always did, about 20% faster. That's a productivity tweak, not a different kind of engineer — and you're paying senior rates for a rounding error.",
  },
  {
    tag: "Mistake 02",
    title: "The demo builder",
    body: "Ships something dazzling in a week. No evals, no cost ceiling, no failure path. It falls over the first time a real user does something strange, and you find out about it in production, from a customer.",
  },
];

function TwoMistakes() {
  return (
    <Section>
      <Eyebrow>The hiring trap</Eyebrow>
      <Heading>
        Most &ldquo;AI engineers&rdquo; are one of two expensive mistakes.
      </Heading>
      <Lede>
        You have twelve to eighteen months of runway. A bad engineering hire
        costs you a quarter of it — and at seed stage, you don&apos;t get that
        quarter back.
      </Lede>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {mistakes.map((m) => (
          <div
            key={m.tag}
            className="rounded-2xl border border-line bg-ink-2 p-8"
          >
            <p className="font-mono text-xs tracking-widest text-muted uppercase">
              {m.tag}
            </p>
            <h3 className="mt-4 text-xl font-medium tracking-[-0.01em]">
              {m.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{m.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- our definition */

function Definition() {
  return (
    <Section className="bg-ink-2">
      <div className="grid gap-12 md:grid-cols-[1fr_1.15fr] md:gap-20">
        <div>
          <Eyebrow>What we actually mean</Eyebrow>
          <Heading>AI-native is a seniority bar, not a tool preference.</Heading>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted">
          <p>
            An AI-native engineer architects{" "}
            <span className="text-bone">around what models actually are</span> —
            nondeterministic, expensive, latent, and occasionally, confidently
            wrong. They design the evals before the feature. They know what it
            costs per thousand calls. They know exactly what the system does
            when the model returns nonsense, because they decided that in
            advance.
          </p>
          <p>
            And they use AI to compress their own delivery loop, which is why
            one of them outruns a small team.
          </p>
          <p className="border-l-2 border-ember pl-6 text-bone">
            Seniority is the prerequisite. The AI part is the multiplier. An
            engineer who can&apos;t ship production systems without AI
            can&apos;t ship them with it either.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ the bar */

function Bar() {
  return (
    <Section id="bar">
      <Eyebrow>The bar</Eyebrow>
      <Heading>Five stages. Every engineer. No exceptions.</Heading>
      <Lede>
        We publish our hiring bar so you can hold us to it. This is the whole
        gauntlet — nothing behind the curtain.
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
          <span className="text-ember">The part nobody else will say:</span> if
          nobody clears the bar for your role, we tell you that — instead of
          sending you the best of a bad shortlist to keep the deal alive.
          We&apos;d rather lose the contract than place someone who didn&apos;t
          earn it.
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
      <Heading>From first call to shipping code in about two weeks.</Heading>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
        {process.map((p) => (
          <div key={p.n} className="bg-ink p-8">
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

/* --------------------------------------------------------------- guarantee */

const guarantees = [
  {
    title: `${site.offer.trialWeeks}-week paid trial`,
    body: "Real work in your repo. If they're not a fit at the end of it, you don't pay for the trial.",
  },
  {
    title: `Replacement in ${site.offer.replacementDays} days`,
    body: "If it stops working at any point, we replace them within five business days.",
  },
  {
    title: "Month to month",
    body: "No twelve-month lock-in. You should stay because it's working, not because you signed.",
  },
  {
    title: "You own everything",
    body: "All code and IP is yours from day one — including whatever they built during a trial you never paid for.",
  },
];

function Guarantee() {
  return (
    <Section>
      <Eyebrow>Risk, reversed</Eyebrow>
      <Heading>We take the risk of the hire. Not you.</Heading>
      <Lede>
        You&apos;re the one with runway on the line. So the terms are built so
        that a bad match costs us, and not you.
      </Lede>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {guarantees.map((g) => (
          <div
            key={g.title}
            className="flex gap-5 rounded-2xl border border-line bg-ink-2 p-7"
          >
            <span className="mt-1.5 block h-2.5 w-2.5 shrink-0 rotate-45 rounded-[2px] bg-ember" />
            <div>
              <h3 className="font-medium tracking-[-0.01em]">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{g.body}</p>
            </div>
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
              systems inside institutions where a bug is a regulatory incident,
              and then inside a seed-stage startup where a slow quarter is an
              extinction event.
            </p>
            <p className="text-bone">
              I&apos;ve been the seed-stage CTO trying to hire exactly this
              person. That&apos;s how I know how badly the market serves you —
              and it&apos;s why I run every engineer through the five stages
              myself.
            </p>
          </div>

          <div className="mt-10">
            <Button href={site.bookingUrl} variant="ghost">
              Talk to me directly
            </Button>
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
      <Heading>Founding client pricing, and an honest trade.</Heading>

      <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="space-y-6 text-lg leading-relaxed text-muted">
          <p>
            We&apos;re taking on our first{" "}
            <span className="text-bone">
              {site.offer.foundingClientSlots} clients
            </span>{" "}
            at below-market rates. In exchange, once you&apos;ve shipped
            something you&apos;re proud of, you let us write it up as a case
            study.
          </p>
          <p className="text-bone">
            That&apos;s the whole deal, stated plainly: you get senior AI-native
            engineering under market rate, and we get the proof we need to stop
            discounting. Both sides know what they&apos;re trading.
          </p>
          <p className="text-base">
            {/* TODO(founder): set your real day/month rates before launch. */}
            Rates depend on scope and commitment. Bring your problem to the
            scoping call and you&apos;ll leave it with a number.
          </p>
        </div>

        <div className="rounded-2xl border border-ember/30 bg-ember/[0.04] p-8">
          <p className="font-mono text-xs tracking-widest text-ember uppercase">
            Founding cohort
          </p>
          <p className="mt-6 text-5xl font-medium tracking-[-0.03em]">
            {site.offer.foundingClientSlots}
            <span className="text-muted"> slots</span>
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Below-market rates, direct access to me, and a say in how we build
            this. When they&apos;re gone, they&apos;re gone.
          </p>
          <div className="mt-8">
            <Button href={site.bookingUrl}>Claim a slot</Button>
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

/* ----------------------------------------------------------------- contact */

function Contact() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Next step</Eyebrow>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-balance md:text-5xl">
          Tell me what you&apos;re building.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Twenty minutes. You&apos;ll leave knowing whether an AI-native
          engineer solves your problem — including if the answer is no.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${site.founder.email}`}>
            Email {site.founder.name.split(" ")[0]}
          </Button>
          <Button href="/engineers" variant="ghost">
            I&apos;m an engineer, not a founder
          </Button>
        </div>
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
  );
}
