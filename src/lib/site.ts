/**
 * Single source of truth for anything that changes as the business changes.
 * Everything in here is a real, defensible claim. No invented clients,
 * testimonials, headcounts or outcome stats. Keep it that way.
 */

export const site = {
  name: "Outcraft AI",
  domain: "outcraftai.com",
  url: "https://outcraftai.com",
  tagline: "AI-native engineers for early-stage startups racing to ship product.",
  description:
    "Founder-led access to vetted AI-native engineers from India who use Claude Code, Codex, Cursor and modern agentic workflows to ship production software at early-stage-friendly pricing.",

  // TODO(founder): confirm spelling as you want it shown publicly.
  founder: {
    name: "Vinall",
    role: "Founder",
    email: "vinall.banga@gmail.com", // TODO: swap for hello@outcraftai.com once mail is set up
  },
  teamPlanEmail: "vinall@outcraftai.com",

  bookingUrl: "https://cal.com/outcraft-ai/ia?overlayCalendar=true",
  bookingCalLink: "outcraft-ai/ia",
  bookingCalNamespace: "ia",

  offer: {
    trialWeeks: 2,
    replacementDays: 5,
    matchDays: 10,
    monthlyPriceLow: 1000,
    monthlyPriceHigh: 2500,
  },
} as const;

export const valueProps = [
  {
    title: "Senior engineer embedded into your team",
    body: "You get one carefully matched engineer, not a pile of CVs. They work in your repo, your stack and your delivery rhythm.",
  },
  {
    title: "AI-native workflow from day one",
    body: "Claude Code, Codex, Cursor and agentic review loops are part of how they ship, not an after-hours experiment.",
  },
  {
    title: "Measured trial before commitment",
    body: "We agree success criteria upfront, then judge the work in your codebase before you decide whether to continue.",
  },
];

export const founderTrack = [
  {
    org: "Global asset manager",
    what: "Platform engineering and CI/CD in a high-control financial environment.",
  },
  {
    org: "Big Four Australian bank",
    what: "Open Banking delivery across full-stack product and AWS infrastructure.",
  },
  {
    org: "Wealth-tech platform",
    what: "Built risk-profiling software used inside superannuation fund customer journeys.",
  },
  {
    org: "Superannuation software provider",
    what: "Backend engineering for fund, wealth and client administration platforms.",
  },
  {
    org: "Startmate-backed startup",
    what: "CTO for an AI product turning financial content into product intelligence.",
  },
  {
    org: "Zero-to-one product leadership",
    what: "Led engineering teams from product idea to shipped platforms across apparel ERP and student accommodation marketplace.",
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

export const workflowComparison = [
  {
    old: "AI used as autocomplete beside the editor",
    outcraft: "Agentic workflows planned around implementation, review, tests and merge readiness",
  },
  {
    old: "Ticket handoff, code, review, rework, merge",
    outcraft: "Problem context, AI-assisted implementation, senior review, production PR",
  },
  {
    old: "LLM feature shipped as a demo first",
    outcraft: "Evals, cost ceiling, latency budget and failure path designed before release",
  },
  {
    old: "Output measured by activity and status updates",
    outcraft: "Output measured by merged work, cycle time, review quality and production impact",
  },
  {
    old: "You discover the fit after a long contract",
    outcraft: "You discover the fit during a scoped trial in your repo",
  },
];

export const roles = [
  {
    title: "Full-stack AI-native engineer",
    line: "Build the full product slice, from interface to database, with AI-assisted speed and senior judgment.",
    stack: ["React", "Next.js", "Node", "Postgres", "Vercel"],
    proof: "Best when your next milestone needs engineers who can own frontend, backend, and delivery end to end.",
  },
  {
    title: "AI product engineer",
    line: "Turn an AI product idea into a dependable user workflow.",
    stack: ["Python", "Claude", "OpenAI", "Braintrust", "Langfuse"],
    proof: "Best when the model-backed feature needs to become part of the core product, not a side experiment.",
  },
  {
    title: "Automation and internal tools engineer",
    line: "Ops workflows, CRM/admin tools, reporting, data cleanup and manual-process replacement.",
    stack: ["TypeScript", "APIs", "Queues", "Workers", "Dashboards"],
    proof: "Best when the fastest ROI is removing repetitive work from your team.",
  },
  {
    title: "Platform and DevOps engineer",
    line: "CI/CD, cloud infrastructure, deploys, observability, incident response and developer velocity.",
    stack: ["AWS", "Terraform", "GitHub Actions", "Docker", "Sentry"],
    proof: "Best when your team is losing days to brittle deploys, slow pipelines or unclear ownership.",
  },
];

export const gauntlet = [
  {
    n: "01",
    title: "Proof of ownership",
    body: "Years do not qualify someone. Evidence does. We look for shipped work they can explain clearly: GitHub projects, production AI features, private repo walkthroughs, technical write-ups, or systems they owned end to end.",
  },
  {
    n: "02",
    title: "Systems interview",
    body: "We are not testing whether they know system-design vocabulary. We are testing whether they can take a messy founder problem, shape it into a system that can ship, and clearly explain the tradeoffs and risks.",
  },
  {
    n: "03",
    title: "AI-native build",
    body: "They complete a realistic product task using an agentic workflow: understand the repo, plan the change, implement it, test it, and explain how AI changed their delivery loop. If the task involves LLMs, we also look for evals, cost awareness, and failure paths.",
  },
  {
    n: "04",
    title: "Adversarial review",
    body: "They defend their own code while we attack it. We're looking for engineers who can name every tradeoff they made, not ones who got a good result by accident.",
  },
];

export const process = [
  {
    n: "01",
    title: "Velocity audit",
    meta: "30 minutes",
    body: "We map what you are trying to ship, where engineering is slowing down, and what kind of AI-native engineer would actually move the milestone.",
  },
  {
    n: "02",
    title: "Success criteria",
    meta: "Same day",
    body: "We convert the audit into a clear mission: what needs to ship, what the engineer owns, and how you will know the engagement is worth continuing.",
  },
  {
    n: "03",
    title: "One matched engineer",
    meta: `Within ${site.offer.matchDays} days`,
    body: "You get one matched engineer with context: what they have owned before, how they work with AI, and why they fit the milestone.",
  },
  {
    n: "04",
    title: "Two-week trial",
    meta: "Real work, real repo",
    body: "They work inside your codebase on the agreed scope. You judge cycle time, review quality, communication and shipped output.",
  },
  {
    n: "05",
    title: "Continue, or walk",
    meta: "Your call",
    body: "Keep the engineer if the milestone is moving. If the match misses, we replace them within five business days or end the engagement cleanly.",
  },
];

export const faqs = [
  {
    q: "Why should I trust the quality at this price?",
    a: "The price advantage comes from vetted Indian engineering talent and a lower cost base, not a lower bar. We still screen for proof of ownership, systems judgment, AI-native workflow and the ability to ship inside a real codebase.",
  },
  {
    q: "What if nobody clears the bar for my role?",
    a: "Then we tell you that, and you go elsewhere. The failure mode of every staffing agency is sending you the best of a bad shortlist to keep the deal alive. We would rather lose the contract than place someone who didn't clear all four stages.",
  },
  {
    q: "How is this different from just hiring a contractor?",
    a: "Most contract engineers are strong generalists who use AI as autocomplete. We select for senior engineers who can use agentic workflows to ship production systems, including the unglamorous parts: tests, evals, cost, latency, observability and failure paths.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Every line, from day one, including anything built during the trial you didn't pay for.",
  },
  {
    q: "How long until someone is working?",
    a: `We aim to present a matched engineer within ${site.offer.matchDays} days of the velocity audit, and they can typically start immediately after you say yes.`,
  },
  {
    q: "What does it cost?",
    a: `Engagements typically range from $${site.offer.monthlyPriceLow.toLocaleString()}-$${site.offer.monthlyPriceHigh.toLocaleString()}/month, depending on scope, availability and the level of ownership required. The price advantage comes from vetted Indian engineering talent and a lower cost base, not a lower bar.`,
  },
];

export const engineerReasons = [
  {
    title: "Serious client work",
    body: "No recruiter spam or race-to-the-bottom marketplace. We introduce you when the client has a real problem, budget and success criteria.",
  },
  {
    title: "Flexible engagements",
    body: "Most work is remote contract delivery, from focused part-time help to deeper monthly engagements.",
  },
  {
    title: "Founder-reviewed applications",
    body: "Every engineer is reviewed against the same published bar. The bench stays useful only if the bar stays high.",
  },
  {
    title: "Clear expectations",
    body: "Before a trial starts, you know the scope, repo context, communication rhythm and what the client will judge.",
  },
];

export const engineerExpectations = [
  "Evidence of production ownership matters more than years of experience.",
  "You have owned at least one system end to end: architecture, deployment, failure modes and support.",
  "You use AI coding tools as part of a disciplined workflow, not as a substitute for engineering judgment.",
  "You can explain tradeoffs clearly to founders, product leaders and other engineers.",
  "You are comfortable with remote client work, written updates and scoped trial outcomes.",
];
