/**
 * Single source of truth for anything that changes as the business changes.
 * Everything in here is a real, defensible claim. No invented clients,
 * testimonials, headcounts or outcome stats. Keep it that way.
 */

export const site = {
  name: "Outcraft AI",
  domain: "outcraftai.com",
  url: "https://outcraftai.com",
  tagline: "AI-native engineers for seed-stage startups.",
  description:
    "Senior engineers who orchestrate code with Claude Code, Codex, Cursor and six more agentic tools, then ship it to production with evals and a cost ceiling. Two-week paid trial, measured in your repo. Not a fit, you don't pay.",

  // TODO(founder): confirm spelling as you want it shown publicly.
  founder: {
    name: "Vinall Banga",
    role: "Founder",
    email: "vinall.banga@gmail.com", // TODO: swap for hello@outcraftai.com once mail is set up
  },

  // TODO(founder): drop in your Cal.com / Calendly link.
  bookingUrl: "#contact",

  offer: {
    trialWeeks: 2,
    replacementDays: 5,
    matchDays: 10,
    foundingClientSlots: 5,
  },
} as const;

export const founderTrack = [
  {
    org: "Vanguard",
    what: "Platform engineering and CI/CD at one of the world's largest asset managers.",
  },
  {
    org: "Contino",
    what: "Open Banking delivery at NAB, one of Australia's Big Four banks. Fullstack and AWS infrastructure.",
  },
  {
    org: "IRESS",
    what: "Built the risk-profiling tool embedded on superannuation funds' own sites, guiding members into the right investment option.",
  },
  {
    org: "Bravura Solutions",
    what: "Java backend for the fund, wealth and client administration platforms used by Australia's largest super funds.",
  },
  {
    org: "Startmate-backed startup",
    what: "CTO. AI that turns financial content into a competitive edge.",
  },
  {
    org: "Shipped solo",
    what: "An ERP for apparel manufacturers, and a marketplace helping students find accommodation.",
  },
];

/**
 * The hero says "Claude Code, Codex, Cursor and six more agentic tools we
 * require fluency in", so this list must contain exactly nine, and it must be
 * what you genuinely test for in stage 03. If you change the list, change the
 * hero. The claim is only credible because it's checkable.
 *
 * TODO(founder): confirm this is the stack you'll actually assess. Swap
 * anything you wouldn't personally grade an engineer on.
 */
export const requiredStack = [
  "Claude Code",
  "Codex",
  "Cursor",
  "Windsurf",
  "Aider",
  "Cline",
  "Claude Agent SDK",
  "Braintrust (evals)",
  "Langfuse (tracing)",
];

export const gauntlet = [
  {
    n: "01",
    title: "Track record screen",
    body: "Seven years minimum, and they must have owned a production system end to end: architecture, deploy, on-call, the lot. Not a ticket queue.",
  },
  {
    n: "02",
    title: "Systems interview",
    body: "Architecture under the constraints that actually bite: a cost ceiling, a latency budget, a failure mode, and a deadline. We're listening for tradeoffs, not vocabulary.",
  },
  {
    n: "03",
    title: "AI-native build",
    body: "A take-home where they ship an LLM-backed feature with evals, a cost ceiling and a defined failure path. A working demo is table stakes. We grade what happens when it breaks.",
  },
  {
    n: "04",
    title: "Adversarial review",
    body: "They defend their own code while we attack it. We're looking for engineers who can name every tradeoff they made, not ones who got a good result by accident.",
  },
  {
    n: "05",
    title: "Reference call",
    body: "With someone who actually shipped alongside them. Not a manager who remembers them fondly.",
  },
];

export const process = [
  {
    n: "01",
    title: "Scoping call",
    meta: "20 minutes",
    body: "What you're building, what 'shipped' means to you, and what would make this hire a mistake. If we're not right for it, we'll say so on the call.",
  },
  {
    n: "02",
    title: "We match one engineer",
    meta: `Within ${site.offer.matchDays} days`,
    body: "One engineer, with a written case for why them. Not a stack of CVs for you to sift. That's the work you're paying us to do.",
  },
  {
    n: "03",
    title: "Two-week paid trial",
    meta: "Real work, real repo",
    body: "They ship something that matters, inside your codebase, alongside your team. You find out how they actually work before you commit.",
  },
  {
    n: "04",
    title: "Continue, or walk",
    meta: "Your call",
    body: "If they're not a fit, you don't pay for the trial and we part as friends. If they are, you keep going month to month.",
  },
];

export const faqs = [
  {
    q: "You're new. Why should I trust you?",
    a: "I'm not asking you to. I'm asking you to trial an engineer for two weeks and pay nothing if they're wrong for you. Our hiring bar is published above so you can hold us to it, my own track record is public and verifiable, and we're pricing our first clients below market precisely because we're building a reputation with them. Trust should be the output of that, not the entry fee.",
  },
  {
    q: "What if nobody clears the bar for my role?",
    a: "Then we tell you that, and you go elsewhere. The failure mode of every staffing agency is sending you the best of a bad shortlist to keep the deal alive. We would rather lose the contract than place someone who didn't clear all five stages.",
  },
  {
    q: "How is this different from just hiring a contractor?",
    a: "Most contract engineers are strong generalists who use AI as autocomplete. We select specifically for engineers who architect around what models actually are: nondeterministic, expensive and occasionally wrong. And who have shipped that into production, not just into a demo.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Every line, from day one, including anything built during the trial you didn't pay for.",
  },
  {
    q: "How long until someone is working?",
    a: `We aim to present a matched engineer within ${site.offer.matchDays} days of the scoping call, and they can typically start immediately after you say yes.`,
  },
  {
    q: "What does it cost?",
    a: "See below. We publish our rates, and our first clients get founding pricing.",
  },
];
